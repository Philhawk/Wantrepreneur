'use strict';

const db = require('APP/db');
const User = require('./user');
const {expect} = require('chai');

describe('User', () => {
  before('wait for the db', () => db.didSync);

  describe('authenticate(plaintext: String) ~> Boolean', () => {
    it('resolves true if the password matches', () =>
      User.create(
        {
          name: 'whatever',
          email: 'something@example.com',
          password: 'ok'
        })
          .then(user => user.authenticate('ok'))
          .then(result => expect(result).to.be.true));

    it("resolves false if the password doesn't match", () =>
      User.create(
        {
          name: 'potato',
          email: 'somethingelse@example.com',
          password: 'ok'
        })
          .then(user => user.authenticate('not ok'))
          .then(result => expect(result).to.be.false));
  });
  describe('a user is created', () => {
    it('is not an admin', () =>
      User.create(
        {
          name: 'something-non-admin',
          email: 'nonadmin@example.com'
        })
        .then(result => expect(result.dataValues.roles).to.equal('user'))
      )
  });
});
