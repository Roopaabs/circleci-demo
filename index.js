const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.use(bodyParser.json());

// Array to store posted data
const storedData = [];

// GET endpoint to retrieve stored data
app.get('/api/data', (req, res) => {
    console.log('stored data:', storedData)
    // Respond with the stored data
    res.status(200).json(storedData);
});

// POST endpoint to receive and store data
app.post('/api/data/user_data', (req, res) => {
    // Access the data from the request body
    const user_data={ key1, key2 } = req.body;
console.log('Recieved data:', user_data)
    // Store the data in the array
    storedData.push({ user_data });

    // Respond to the client
    res.status(201).json({ message: 'Data added and stored successfully for key1 and key2 value' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
