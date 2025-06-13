const request = require('supertest');
const app = require('../../app'); // Import Express app
const db = require('../../models'); // Import model database

describe('Todo API Integration Tests', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true }); // Reset database sebelum testing
  });

  it('should create a new todo', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ title: 'Test Todo', completed: false });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  afterAll(async () => {
    await db.sequelize.close(); // Tutup koneksi database
  });
});