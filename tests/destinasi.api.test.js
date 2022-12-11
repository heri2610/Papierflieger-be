const request = require('supertest');
const dotenv = require('dotenv');
const app = require('../index');

dotenv.config();
// const baseUrl = "localhost:3000"

describe('API get all destination', () => {
  it('success get all data destination', async () => {
    const response = await request(app).get('/api/destinations');
    expect(response.statusCode).toBe(200);
  });
});
describe('API create destination', () => {
  const token = 'bsajkhbsjakbsajkbswjgsduwedsbejbdejbjsdj';
  it('Unauthorized', async () => {
    const destination = {
      name: 'Bukit Waruwangi',
      location: 'Serang Banten',
      description: 'waru wangi adalah balablablabla',
      airportId: 1,
    };
    const response = await request(app)
      .post('/api/destinations')
      .set('Authorization', `Bearer ${token}`)
      .send(destination);
    expect(response.statusCode).toBe(401);
  });
});
describe('API get destination By ID', () => {
  it('success get data destination', async () => {
    const response = await request(app).get('/api/destinations/20');
    expect(response.statusCode).toBe(200);
  });
});
describe('API delete destination by ID', () => {
  it('Unauthorized', async () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6InN0cmluZyIsImVtYWlsIjoic3RyaW5nIiwiaW1hZ2UiOm51bGwsInJvbGUiOnsiaWQiOjEsIm5hbWUiOiJDVVNUT01FUiJ9LCJpYXQiOjE2NjgwMTg4MjB9.weFZDBPqqS0dA7RPNzlytJln8bZXBs0cfJPlAvzKVtw';
    const response = await request(app)
      .delete('/api/destinations/20')
      .set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(401);
  });
});
describe('API update destination by ID', () => {
  it('Unauthorized', async () => {
    const destination = {
      name: 'Bukit Waruwangi',
      location: 'Serang Banten',
      description: 'waru wangi adalah balablablabla',
      airportId: 1,
    };
    const response = await request(app)
      .put('/api/destinations/20')
      .send(destination);
    expect(response.statusCode).toBe(401);
  });
});
