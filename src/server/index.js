const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const get_articles = require('./get_data');

// Initialize dotenv to access environment variables
dotenv.config();

// Setup Express app
const app = express();

// API Key from environment variable
const API_KEY = process.env.API_KEY;
const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1';

// Middleware to handle CORS and JSON data
app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

// Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

// POST route for sentiment analysis
app.post('/api', async (req, res) => {
    const completeUrl = `${BASE_API_URL}?key=${API_KEY}&url=${req.body.url}&lang=en`;

    try {
        // Fetch and process the sentiment analysis
        const analysis = await get_articles(completeUrl);
        res.send({ sentiment: analysis });
    } catch (error) {
        console.log("Error in API call:", error);
        res.status(500).send({ error: "Internal server error" });
    }
});

// Server listens on port 8081
app.listen(8081, () => {
    console.log('Server running on port 8081');
});
