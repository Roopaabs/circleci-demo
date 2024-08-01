const request = require('supertest');
const { expect } = require('chai'); // Import expect from Chai
const app = require('../index'); // Adjust the path if needed

describe('API Endpoints', () => {
  let server;

  before(() => {
    server = app.listen(3001); // Start the server on a different port
  });

  after(() => {
    server.close(); // Close the server after tests
  });

  describe('GET /api/data', () => {
    it('should retrieve stored data', async () => {
      const response = await request(server)
        .get('/api/data')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(response.body).to.be.an('array');
    });
  });

  describe('POST /api/data/user_data', () => {
    it('should store user data and respond with success message', async () => {
      const newData = { key1: 'value1', key2: 'value2' };
      const response = await request(server)
        .post('/api/data/user_data')
        .send(newData)
        .expect('Content-Type', /json/)
        .expect(201);

      expect(response.body.message).to.equal('Data added successfully');
    });
  });
});
