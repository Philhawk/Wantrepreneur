'use strict';

const db = require('APP/db');
const Order = require('./order');
const {expect} = require('chai');

describe('Order', () => {
  before('wait for the db', () => db.didSync);

  describe('', () => {
    it('resolves true if the password matches', () =>
      User.create({ password: 'ok' })
        .then(user => user.authenticate('ok'))
        .then(result => expect(result).to.be.true));

    it("resolves false if the password doesn't match", () =>
      User.create({ password: 'ok' })
        .then(user => user.authenticate('not ok'))
        .then(result => expect(result).to.be.false));
  });
  describe('a user is created', () => {
    it('is not an admin', () =>
      User.create({name: 'whatever', email: 'something@example.com'})
        .then(result => expect(result.dataValues.roles).to.equal('user'))
      )
  });
});
