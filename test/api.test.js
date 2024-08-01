// __tests__/app.test.js
const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const users = [];

app.post('/add_user', (req, res) => {
  const { username, email } = req.body;
  if (!username || !email) {
    return res.status(400).json({ error: 'Missing username or email' });
  }
  const newUser = { username, email };
  users.push(newUser);
  return res.status(201).json({ message: 'User added successfully' });
});

app.get('/get_users', (req, res) => {
  return res.json({ users });
});

describe('User API', () => {
  it('should add a user', async () => {
    const response = await request(app)
      .post('/add_user')
      .send({ username: 'testuser', email: 'test@example.com' });
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe('User added successfully');
  });

  it('should return all users', async () => {
    await request(app).post('/add_user').send({ username: 'anotheruser', email: 'another@example.com' });
    const response = await request(app).get('/get_users');
    expect(response.statusCode).toBe(200);
    expect(response.body.users.length).toBeGreaterThan(0);
  });
});
