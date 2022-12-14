/* eslint-disable no-undef */
const request = require('supertest');
const dotenv = require('dotenv');
const app = require('../index');
const emailValidation = require('../utils/emailValidation');

dotenv.config();
jest.useRealTimers();
let tokenEmail;
beforeAll((done) => {
   const newUser = {
     username: 'jane',
     fullName: 'Jane Angel',
     email: 'mbakstay@gmail.com',
     password: '12345678',
   };
  request(app)
    .post('/api/auth/register')
    .send(newUser)
    .end((err, response) => {
      tokenEmail = response.body.tokenVerifikasi; 
      done();
    });
});
describe('API register', () => {

  it('minimum password length is 8', async () => {
    const newUser = {
      username: 'jane',
      fullName: 'Jane Angel',
      email: 'mbakstay@gmail.com',
      password: '12345',
    };
    const response = await request(app)
      .post('/api/auth/register')
      .send(newUser);
    expect(response.statusCode).toBe(400);
  });

  it('register email has already taken', async () => {
    const user = {
      username: 'jane',
      fullName: 'Jane Angel',
      email: 'mbakstay@gmail.com',
      password: '12345678',
    };
    const response = await request(app).post('/api/auth/register').send(user);
    expect(response.statusCode).toBe(400);
  });
});
describe('API veriFy email', () => {
  it('verifikasi success', async () => {
    const response = await request(app).get(
      `/api/auth/send-email?token=${tokenEmail}`
    );
    expect(response.statusCode).toBe(200);
  });
});
describe('API Login', () => {
  it('failed login: password salah.', async () => {
    const failedUser = {
      email: 'mbakstay@gmail.com',
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

  // it('get user who is logged in', async () => {
  //   const user = {
  //     email: 'suhaeriheri45@gmail.com',
  //     password: 'tim3hore',
  //   };
  //   const login = await request(app).post('/api/auth/login').send(user);
  //   const token = login.token;
  //   const response = await request(app)
  //     .get('/api/auth/profile')
  //     .set('Authorization', token);
  //   expect(response.statusCode).toBe(200);
  // });
});
describe('API update profile', () => {
      var auth = {};
      beforeAll(loginUser(auth));
  it('profil berhasil diubah', async () => {
    const response = await request(app)
      .put('/api/auth/update-profile')
      .set('Authorization', auth.token)
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

function loginUser(auth) {
  return function (done) {
    request(app)
      .post('/api/auth/login')
      .send({
        email: 'mbakstay@gmail.com',
        password: '12345678',
      })
      .expect(200)
      .end(onResponse);

    function onResponse(err, res) {
      auth.token = res.body.token;
      return done();
    }
  };
}