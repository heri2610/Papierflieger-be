const request = require('supertest');
const dotenv = require('dotenv');
const app = require('../index');

dotenv.config();
// const baseUrl = "localhost:3000"
jest.useRealTimers();
describe('API get all ticket', () => {
  it('success get all data ticket', async () => {
    const response = await request(app).get('/api/tickets');
    expect(response.statusCode).toBe(200);
  });
});
describe('API create ticket', () => {
  const token = 'bsajkhbsjakbsajkbswjgsduwedsbejbdejbjsdj';
  it('Unauthorized', async () => {
    const ticket = {
      ticketNumber: 674286,
      departureDate: '2022-12-11T11:56:53.324Z',
      departureTime: '09:05:00',
      arrivalDate: '2022-12-11T11:56:53.324Z',
      arrivalTime: '11:40:00',
      flightFrom: 1,
      flightTo: 2,
      airplaneId: 1,
      price: 8000000,
      totalTransit: 1,
      transitPoint: 3,
      transitDuration: '1 Jam 2 Menit',
      ticketType: 'Domestik',
      flightDuration: '8 Jam',
      arrivalTimeAtTransit: '10:14:00',
      departureTimeFromTransit: '10:54:00',
    };
    const response = await request(app)
      .post('/api/tickets')
      .set('Authorization', `Bearer ${token}`)
      .send(ticket);
    expect(response.statusCode).toBe(401);
  });
});
describe('API get ticket By ID', () => {
  it('success get data ticket', async () => {
    const response = await request(app).get('/api/tickets/20');
    expect(response.statusCode).toBe(200);
  });
});
describe('API delete ticket by ID', () => {
  it('Unauthorized', async () => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6InN0cmluZyIsImVtYWlsIjoic3RyaW5nIiwiaW1hZ2UiOm51bGwsInJvbGUiOnsiaWQiOjEsIm5hbWUiOiJDVVNUT01FUiJ9LCJpYXQiOjE2NjgwMTg4MjB9.weFZDBPqqS0dA7RPNzlytJln8bZXBs0cfJPlAvzKVtw';
    const response = await request(app)
      .delete('/api/tickets/20')
      .set('Authorization', `Bearer ${token}`);
    expect(response.statusCode).toBe(401);
  });
});
describe('API update ticket by ID', () => {
  it('Unauthorized', async () => {
    const ticket = {
      ticketNumber: 674286,
      departureDate: '2022-12-11T11:56:53.324Z',
      departureTime: '09:05:00',
      arrivalDate: '2022-12-11T11:56:53.324Z',
      arrivalTime: '11:40:00',
      flightFrom: 1,
      flightTo: 2,
      airplaneId: 1,
      price: 8000000,
      totalTransit: 1,
      transitPoint: 3,
      transitDuration: '1 Jam 2 Menit',
      ticketType: 'Domestik',
      flightDuration: '8 Jam',
      arrivalTimeAtTransit: '10:14:00',
      departureTimeFromTransit: '10:54:00',
    };
    const response = await request(app).put('/api/tickets/20').send(ticket);
    expect(response.statusCode).toBe(401);
  });
});
