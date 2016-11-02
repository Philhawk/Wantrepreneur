const db = require('APP/db');

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234', roles: 'user'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234', roles: 'admin'},
], user => db.model('users').create(user));

const seedProducts = () => db.Promise.map([
		{name: 'Candy Store', price: 100, description: 'Buy some candy'},
		{name: 'Progressive', price: 100, description: 'Basdfasdfasdf'},
    {name: 'Anthony', price: 100, description: 'I am good at double quotes'},
    {name: 'Emily', price: 100, description: 'I draw well haha'},
    {name: 'Phil', price: 100, description: 'Veggiemite!'},
		{name: 'Jiheh', price: Infinity, description: 'Asian glow'}
	], product => db.model('products').create(product));

const seedCategories = () => db.Promise.map([
	{name: 'beauty', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97350&w=350&h=350'},
	{name: 'sports', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97350&w=350&h=350'},
	{name: 'fashion', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97350&w=350&h=350'},
	{name: 'entertainment', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97350&w=350&h=350'},
	{name: 'technology', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97350&w=350&h=350'},
	{name: 'food', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97350&w=350&h=350'}
], category => db.model('categories').create(category));

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let createdCategories;

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedCategories)
  .then(categories => {
    createdCategories = categories;
    console.log(`Seeded ${categories.length} categories OK`);
  })
  .then(seedProducts)
  .then(products => {
  	createdProducts = products;
  	return db.Promise.all(products.map(product => product.addCategory(createdCategories[getRandomIntInclusive(0, createdCategories.length)])));
  })
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .catch(error => console.error(error))
  .finally(() => db.close());
