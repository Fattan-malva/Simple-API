require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const productRoutes = require('./Routes/R.product');
const authRoutes = require('./Routes/R.auth');

const app = express();

// Middleware keamanan
app.use(helmet()); // proteksi header HTTP
app.use(cors({ origin: process.env.CLIENT_URL || '*' })); // atur origin FE Flutter
app.use(express.json());

// Rate Limiter (batas request agar anti-DDOS/bruteforce)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 menit
  max: 100, // max 100 request per IP
  message: { message: 'Too many requests, please try again later.' }
});
app.use(limiter);

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// Health check
app.get('/health', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
