/* eslint-disable no-undef */
const request = require('supertest');
const dotenv = require('dotenv');
const app = require('../index');

dotenv.config();

describe('API Login', () => {
  it('success login', async () => {
    const user = {
      email: 'suhaeriheri45@gmail.com',
      password: 'tim3hore',
    };
    const response = await request(app).post('/api/auth/login').send(user);
    expect(response.statusCode).toBe(200);
  });

  it('failed login : Password salah.', async () => {
    const failedUser = {
      email: 'suhaeriheri45@gmail.com',
      password: '1234656',
    };
    const response = await request(app)
      .post('/api/auth/login')
      .send(failedUser);
    expect(response.statusCode).toBe(400);
  });
  it('failed login : Email tidak terdaftar.', async () => {
    const failedUser = {
      email: 'suhaeriheri45555@gmail.com',
      password: 'tim3hore',
    };
    const response = await request(app)
      .post('/api/auth/login')
      .send(failedUser);
    expect(response.statusCode).toBe(400);
  });
});
describe('API register', () => {
  it('register emial has ready by taken', async () => {
    const user = {
      username: 'suhaeri',
      fullName: 'stringingg',
      email: 'suhaeriheri45@gmail.com',
      password: '123456777',
    };
    const response = await request(app).post('/api/auth/register').send(user);
    expect(response.statusCode).toBe(400);
  });
});
describe('API update profile', () => {
  it('data berhasil di rubah', async () => {
    const user = {
      username: 'suhaeri',
      fullName: 'stringingg',
      email: 'suhaeriheri45@gmail.com',
      password: '123456777',
    };
    const response = await request(app)
      .post('/api/auth/update-profile')
      .send(user);
    expect(response.statusCode).toBe(404);
  });
});
