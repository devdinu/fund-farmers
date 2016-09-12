'use strict';

const mongoose = require('mongoose');
const test = require('tape');
const request = require('supertest');
const app = require('../app');
const User = mongoose.model('User');
const co = require('co');

test('Clean up', t => {
    co(function* () {
        yield User.remove();
        t.end();
    });
});

test('should throw error if value left blank', t => {
  let user = { name : '', contactNumber : '9876543210'};

  request(app)
      .post('/users')
      .send(user)
      .expect('Content-Type', /application\/json/)
      .expect(500)
      .expect(/Name cannot be blank/)
      .expect(/Gender cannot be blank/)
      .expect(/House number cannot be blank/)
      .expect(/City cannot be blank/)
      .expect(/State cannot be blank/)
      .end(t.end);
});

test('should persist user if validation is successful', t => {
    let user = { name : 'SomeName',
        gender : 'Male',
        dob : '01/01/2016',
        contactNumber : 98765432311,
        houseNo : '1',
        street : 'SomeStreet',
        locality : 'SomeLocality',
        city : 'SomeCity',
        state : 'SomeState',
        pinCode : 123456 };

    request(app)
        .post('/users')
        .send(user)
        .expect('Content-Type', /application\/json/)
        .expect(201)
        .end(t.end);
});

test.onFinish(() => process.exit(0));