const request = require('supertest');
const dotenv = require('dotenv');
const app = require('../index');

dotenv.config();
// const baseUrl = "localhost:3000"
jest.useRealTimers();
describe('API get all airplane', () => {
  it('success get all data airplane', async () => {
    const response = await request(app).get('/api/airplanes');
    expect(response.statusCode).toBe(200);
  });
});
describe('API create airplane', () => {
  const token = 'bsajkhbsjakbsajkbswjgsduwedsbejbdejbjsdj';
  it('Unauthorized', async () => {
    const airplane = {
      airplaneName: "Boing 777",
      airplaneCode: "HU828",
      class: "ekonomi",
    };
    const response = await request(app)
      .post('/api/airplanes')
      .set('Authorization', `Bearer ${token}`)
      .send(airplane);
    expect(response.statusCode).toBe(401);
  });
});
describe('API get airplane By ID', () => {
  it('success get data airplane', async () => {
    const response = await request(app).get('/api/airplanes/20');
    expect(response.statusCode).toBe(404);
  });
});
describe('API delete airplane by ID', () => {
  it('Unauthorized', async () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6InN0cmluZyIsImVtYWlsIjoic3RyaW5nIiwiaW1hZ2UiOm51bGwsInJvbGUiOnsiaWQiOjEsIm5hbWUiOiJDVVNUT01FUiJ9LCJpYXQiOjE2NjgwMTg4MjB9.weFZDBPqqS0dA7RPNzlytJln8bZXBs0cfJPlAvzKVtw';
    const response = await request(app)
      .delete('/api/airplanes/20')
      .set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(401);
  });
});
describe('API update airplane by ID', () => {
  it('Unauthorized', async () => {
     const airplane = {
       airplaneName: 'Boing 777',
       airplaneCode: 'HU828',
       class: 'ekonomi',
     };
    const response = await request(app).put('/api/airplanes/20').send(airplane);
    expect(response.statusCode).toBe(401);
  });
});
