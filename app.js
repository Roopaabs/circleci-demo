const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 7000;

app.use(bodyParser.json());

const users = [];

app.post('/add_user', (req, res) => {
    const { username, email } = req.body;

    if (!username || !email) {
        return res.status(400).json({ error: 'Missing username or email' });
    }

    const newUser = {
        username,
        email,
    };

    users.push(newUser);
    console.log('User data:', newUser);

    return res.status(201).json({ message: 'User added successfully' });
    
});

app.get('/get_users', (req, res) => {
    console.log('User data:', users);

    return res.json({ users });

});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
