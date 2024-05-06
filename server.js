const express = require('express');
const dotenv = require('dotenv');
const connectToDatabase = require('./config/dbConfig');
const userRoutes = require('./routes/userRoutes');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database connection
connectToDatabase();

// Register routes
app.use('/users', userRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
