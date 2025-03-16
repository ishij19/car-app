export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    if (email === 'user@example.com' && password === 'password') {
      res.status(200).json({ token: 'fake-jwt-token' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}