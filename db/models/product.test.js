'use strict';

const db = require('APP/db');
const Product = require('./product.js');
const chai = require('chai');
chai.use(require('chai-as-promised'));
chai.should();

describe('Product', () => {
  const goodProduct = {
    name: 'test name',
    category: 'beauty',
    price: '100000000',
    description: 'test description',
    url: 'http://google.com',
    image: 'http://google.com/image.jpg'
  };

  const invalidCategory = {
    name: 'test name',
    category: 'not a category',
    price: '100000000',
    description: 'test description',
    url: 'http://google.com',
    image: 'http://google.com/image.jpg'
  };

  const nullName = {
    category: 'beauty',
    price: '100000000',
    description: 'test description',
    url: 'http://google.com',
    image: 'http://google.com/image.jpg'
  };

  const emptyName = {
    name: '',
    category: 'beauty',
    price: '100000000',
    description: 'test description',
    url: 'http://google.com',
    image: 'http://google.com/image.jpg'
  };

  const invalidUrl = {
    name: 'test name',
    category: 'beauty',
    price: '100000000',
    description: 'test description',
    url: 'http://google.com',
    image: 'url here'
  };

  before('wait for the db', () => db.didSync);

  describe('Checks validation of the Product', () => {
    it('successfully creates a user', () => {
      return Product.create(goodProduct).should.be.fulfilled;
    });

    it('fails with an invalid category', () => Product.create(invalidCategory).should.be.rejected);

    it('fails if name isn\'t provided', () => Product.create(nullName).should.be.rejected);

    it('fails if name is empty', () => Product.create(emptyName).should.be.rejected);

    it('fails if image url is invalid', () => Product.create(invalidUrl).should.be.rejected);
  });
});
