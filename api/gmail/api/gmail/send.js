import { OAuth2Client } from 'google-auth-library';
import { google } from 'googleapis';

const oauth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.NEXTAUTH_URL}/api/auth/callback`
);

function getTokensFromCookie(req) {
  const cookie = req.headers.cookie || '';
  const match = cookie.match(/gmail_tokens=([^;]+)/);
  if (!match) return null;
  try {
    return JSON.parse(Buffer.from(match[1], 'base64').toString('utf8'));
  } catch {
    return null;
  }
}

function makeEmailBody({ to, subject, body }) {
  const lines = [
    `To: ${to}`,
    `Subject: ${subject}`,
    'Content-Type: text/plain; charset=utf-8',
    '',
    body,
  ];
  return Buffer.from(lines.join('\n'))
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const tokens = getTokensFromCookie(req);
  if (!tokens) {
    return res.status(401).json({ error: 'Not authenticated', loginUrl: '/api/auth/callback' });
  }

  const { to, subject, body, draftOnly = false } = req.body;

  if (!to || !subject || !body) {
    return res.status(400).json({ error: 'Missing to, subject, or body' });
  }

  try {
    oauth2Client.setCredentials(tokens);
    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    const raw = makeEmailBody({ to, subject, body });

    if (draftOnly) {
      const draft = await gmail.users.drafts.create({
        userId: 'me',
        requestBody: {
          message: { raw },
        },
      });
      return res.status(200).json({ success: true, mode: 'draft', draftId: draft.data.id });
    } else {
      const sent = await gmail.users.messages.send({
        userId: 'me',
        requestBody: { raw },
      });
      return res.status(200).json({ success: true, mode: 'sent', messageId: sent.data.id });
    }

  } catch (err) {
    console.error('Gmail send error:', err);
    return res.status(500).json({ error: err.message });
  }
}
