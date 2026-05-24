module.exports = function handler(req, res) {
  res.json({
    hasClientId: !!process.env.GOOGLE_CLIENT_ID,
    hasClientSecret: !!process.env.GOOGLE_CLIENT_SECRET,
    hasNextAuthUrl: !!process.env.NEXTAUTH_URL,
    nextAuthUrl: process.env.NEXTAUTH_URL,
    clientIdPrefix: process.env.GOOGLE_CLIENT_ID?.slice(0, 10),
  });
};
