const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors({
  origin: ['https://mugilherbals.vercel.app', 'http://localhost:5173'], // Allow both your local and production URLs
  credentials: true, 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
  allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'], 
}));

app.use(express.json());

// Import routes
const itemRoutes = require('./routes/itemRoutes');
const accountRoutes = require('./routes/accountRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Use routes
app.use('/items', itemRoutes);
app.use('/account', accountRoutes);
app.use('/orders', orderRoutes);

module.exports = app;
