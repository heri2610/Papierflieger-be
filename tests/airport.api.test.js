const request = require('supertest');
const dotenv = require('dotenv');
const app = require('../index');

dotenv.config();

describe('API get all airport', () => {
  it('success get all data airport', async () => {
    const response = await request(app).get('/api/airports');
    expect(response.statusCode).toBe(200);
  });
});

describe('API create airport', () => {
  const token = 'bsajkhbsjakbsajkbswjgsduwedsbejbdejbjsdj';
  it('Unauthorized', async () => {
    const airport = {
      airportName: "soekarno hatta",
      city: "tangerang banten",
      cityCode: "BTN1",
    };
    const response = await request(app)
      .post('/api/airports')
      .set('Authorization', `Bearer ${token}`)
      .send(airport);
    expect(response.statusCode).toBe(401);
  });

  it('success add airport data', async () => {
    const token = 'jwt token of user with role admin';
    const airport = {
      airportName: "soekarno hatta",
      city: "tangerang banten",
      cityCode: "BTN1",
    };
    const response = await request(app)
      .post('/api/airports')
      .set("Authorization", token)
      .send(airport);
    expect(response.statusCode).toBe(401);
  });
});

describe('API get airport By ID', () => {
  it('success get data airport', async () => {
    const response = await request(app).get('/api/airports/20');
    expect(response.statusCode).toBe(200);
  });
});

describe('API delete airport by ID', () => {
  it('Unauthorized', async () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6InN0cmluZyIsImVtYWlsIjoic3RyaW5nIiwiaW1hZ2UiOm51bGwsInJvbGUiOnsiaWQiOjEsIm5hbWUiOiJDVVNUT01FUiJ9LCJpYXQiOjE2NjgwMTg4MjB9.weFZDBPqqS0dA7RPNzlytJln8bZXBs0cfJPlAvzKVtw';
    const response = await request(app)
      .delete('/api/airports/20')
      .set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(401);
  });
});

describe('API update airport by ID', () => {
  it('Unauthorized', async () => {
    const airport = {
      airportName: "soekarno hatta",
      city: "tangerang banten",
      cityCode: "BTN1",
    };
    const response = await request(app).put('/api/airports/20').send(airport);
    expect(response.statusCode).toBe(401);
  });
});
