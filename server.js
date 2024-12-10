const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Create an Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Routes
app.use('/api/user', require('./routes/user'));  // User routes
app.use('/api/book', require('./routes/book'));  // Book routes

// Basic test route
app.get('/', (req, res) => res.send('Library Management System API'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
