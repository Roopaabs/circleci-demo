const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8000; // Use environment variable for port

app.use(bodyParser.json());

// Array to store posted data
const storedData = [];

// GET endpoint to retrieve stored data
app.get('/api/data', (req, res) => {
    console.log('stored data:', storedData);
    res.status(200).json(storedData);
});

// POST endpoint to receive and store data
app.post('/api/data/user_data', (req, res) => {
    const { key1, key2 } = req.body;
    console.log('Received data:', { key1, key2 });
    storedData.push({ key1, key2 });
    res.status(201).json({ message: 'Data added and stored successfully for key1 and key2 value' });
});

if (require.main === module) {
  app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
  });
}

module.exports = app; // Export the app for testing
