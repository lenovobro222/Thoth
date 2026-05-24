import { OAuth2Client } from 'google-auth-library';

const oauth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.NEXTAUTH_URL}/api/auth/callback`
);

export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    // Redirect to Google login
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: [
        'https://www.googleapis.com/auth/gmail.readonly',
        'https://www.googleapis.com/auth/gmail.send',
        'https://www.googleapis.com/auth/gmail.compose',
      ],
      prompt: 'consent',
    });
    return res.redirect(authUrl);
  }

  try {
    const { tokens } = await oauth2Client.getToken(code);
    
    // Store tokens in a cookie (httpOnly, secure)
    const tokenStr = JSON.stringify(tokens);
    const encoded = Buffer.from(tokenStr).toString('base64');
    
    res.setHeader('Set-Cookie', [
      `gmail_tokens=${encoded}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=2592000`,
    ]);

    return res.redirect('/?auth=success');
  } catch (err) {
    console.error('OAuth error:', err);
    return res.redirect('/?auth=error');
  }
}
