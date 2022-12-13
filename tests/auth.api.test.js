/* eslint-disable no-undef */
const request = require('supertest');
const dotenv = require('dotenv');
const app = require('../index');
const emailValidation = require('../utils/emailValidation');
const { Users } = require('../app/models');

dotenv.config();
jest.useRealTimers();
describe('API Login', () => {
  it('success login', async () => {
    const user = {
      email: 'suhaeriheri45@gmail.com',
      password: 'tim3hore',
    };
    const response = await request(app).post('/api/auth/login').send(user);
    expect(response.statusCode).toBe(200);
  });

  it('failed login: password salah.', async () => {
    const failedUser = {
      email: 'suhaeriheri45@gmail.com',
      password: '1234656',
    };
    const response = await request(app)
      .post('/api/auth/login')
      .send(failedUser);
    expect(response.statusCode).toBe(400);
  });

  it('failed login: email tidak terdaftar.', async () => {
    const failedUser = {
      email: 'suhaeriheri45555@gmail.com',
      password: 'tim3hore',
    };
    const response = await request(app)
      .post('/api/auth/login')
      .send(failedUser);
    expect(response.statusCode).toBe(400);
  });

  it('get user who is logged in', async () => {
    const user = {
      email: 'suhaeriheri45@gmail.com',
      password: 'tim3hore',
    };
    const login = await request(app).post('/api/auth/login').send(user);
    const token = login.body.token;
    const response = await request(app)
      .get('/api/auth/profile')
      .set('Authorization', token);
    expect(response.statusCode).toBe(200);
  });
});

describe('API register', () => {
  it('registration success', async () => {
    const newUser = {
      username: 'jane',
      fullName: 'Jane Angel',
      email: 'mbakstay@gmail.com',
      password: '12345678',
    };
    const response = await request(app).post('/api/auth/register').send(newUser);
    expect(response.statusCode).toBe(200);
    await Users.destroy({ where: { email: newUser.email } });
  });

  it('minimum password length is 8', async () => {
    const newUser = {
      username: 'jane',
      fullName: 'Jane Angel',
      email: 'mbakstay123@gmail.com',
      password: '12345',
    };
    const response = await request(app).post('/api/auth/register').send(newUser);
    expect(response.statusCode).toBe(400);
  });

  it('register email has already taken', async () => {
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
  it('profil berhasil diubah', async () => {
    const user = {
      email: 'suhaeriheri45@gmail.com',
      password: 'tim3hore',
    };
    const login = await request(app).post('/api/auth/login').send(user);
    const token = login.body.token;
    const response = await request(app)
      .put('/api/auth/update-profile')
      .set('Authorization', token)
      .send({ fullName: 'stringingg' });
    expect(response.statusCode).toBe(200);
  });
});

describe('Validate format of email', () => {
  it('Email is valid', async () => {
    const email = 'test@test.com';
    const isEmailValid = emailValidation(email);
    expect(isEmailValid).toBe(true);
  });

  it('Email is unvalid', async () => {
    const email = 'tetest.com';
    const isEmailValid = emailValidation(email);
    expect(isEmailValid).toBe(false);
  });

  it('Email is unvalid', async () => {
    const email = 'tete@stcom';
    const isEmailValid = emailValidation(email);
    expect(isEmailValid).toBe(false);
  });
});