'use strict';

const epilogue = require('./epilogue');
const db = require('APP/db');

const productRoutes = require('express').Router();

productRoutes.post('/createProduct', (req, res, next) => {
	if (req.user && req.user.roles === 'admin') {
		db.model('products').create(req.body)
		.then(product => res.status(201).send(product))
		.catch(next);
	} else {
		next(new ForbiddenError('You must be an admin to access this page.'));
	}
});

productRoutes.put('/updateProduct/:productId', (req, res, next) => {
  if (req.user && req.user.roles === 'admin') {
  	db.model('products').update(req.body, {
  		where: {id: req.params.productId},
  		returning: true
  	})
  	.then(product => res.status(204).send(product))
  	.catch(next);
  } else {
  	next(new ForbiddenError('You must be an admin to access this page.'));
  }
});

productRoutes.put('/addCategory/:productId', (req, res, next) => {
  if (req.user && req.user.roles === 'admin') {
  	let foundProduct;
  	db.model('products').findById(req.params.productId)
  	.then(product => {
  		if (!product) throw new Error('product not found');
  		foundProduct = product;
  		return db.model('categories').findById(req.body.category)
  	})
  	.then(category => {
  		if (!category) throw new Error ('category not found');
  		return foundProduct.addCategory(category);
  	})
  	.then(() => res.sendStatus(204))
  	.catch(next);
  } else {
  	next(new ForbiddenError('You must be an admin to access this page.'));
  }
});

productRoutes.put('/deleteCategory/:productId', (req, res, next) => {
  if (req.user && req.user.roles === 'admin') {
  	let foundProduct;
  	db.model('products').findById(req.params.productId)
  	.then(product => {
  		if (!product) throw new Error('product not found');
  		foundProduct = product;
  		return db.model('categories').findById(req.body.category)
  	})
  	.then(category => {
  		if (!category) throw new Error ('category not found');
  		return foundProduct.removeCategory(category);
  	})
  	.then(() => res.sendStatus(204))
  	.catch(next);
  } else {
  	next(new ForbiddenError('You must be an admin to access this page.'));
  }
});

productRoutes.delete('/:productId', (req, res, next) => {
  if (req.user && req.user.roles === 'admin') {
    db.model('products').destroy({
      where: {id: req.params.productId}
    })
      .then(numDeleted => {
        if (numDeleted) res.sendStatus(204)
        else res.json("Product does not exist")
      })
      .catch(next);
  } else {
    next(new ForbiddenError('You must be an admin to access this page.'));
  }
});

const products = epilogue.resource({
  model: db.model('products'),
  endpoints: ['/products', '/products/:id'],
  include: [{
    model: db.model('categories')
  }]
});

const {mustBeAdmin, mustBeLoggedIn} = epilogue.filters;
products.delete.auth(mustBeLoggedIn);
products.delete.auth(mustBeAdmin);
products.update.auth(mustBeLoggedIn);
products.update.auth(mustBeAdmin);
products.create.auth(mustBeAdmin);
products.create.auth(mustBeAdmin);

products.list.fetch.before((req, res, context) => {
  if(!req.user || req.user.role === 'user') { context.criteria['order_id'] = null; }
  return context.continue;
});

products.read.fetch.before((req, res, context) => {
  if(!req.user || req.user.role === 'user') { context.criteria['order_id'] = null; }
  return context.continue;
})

module.exports = productRoutes;
