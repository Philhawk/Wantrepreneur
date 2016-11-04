const db = require('APP/db');

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234', roles: 'user'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234', roles: 'admin'},
], user => db.model('users').create(user));

const seedProducts = () => db.Promise.map([
		{name: 'Candy Store', price: 2863, description: 'A candy store full of candy curated by four programmers who decided life would be better selling candy!'},
		{name: 'Leonidas Coffee Shop', price: 2, description: 'Our chocolate is good, but our customer service is as bitter as our espresso!'},
    {name: 'Awake Anthony AARP', price: 62474, description: 'Ever feel like there are not enough emojis in the world to express your emotions? Just make a request and Awake Anthony AARP and we will make you the perfect set of emojis for only $9.99!'},
    {name: 'Emotional Emily Encorporated', price: 90000, description: 'If you feel emotional, buy a product from Emotional Emily Encorporated to make you feel better right away! Each product is full of love, care, and a bowl of ramen!'},
    {name: 'Philosophical Phil Partnership', price: 35269, description: 'Veggiemite! \'Nuff said.'},
		{name: 'Jammin Jiheh, LLC', price: 999999, description: 'A club for those who can\'t dance! Come show off your moves in complete darkness so that no one can laugh at you!', image: 'https://as2.ftcdn.net/jpg/01/22/72/87/500_F_122728743_naarCjUP9bzSpgHpom6QFTD6vVr0dNgH.jpg', url: 'http://www.jihehritterling.com'},
    {name: 'Knocking Kenneth Korporation', price: 1000, description: 'Ever feel like you\'re alone because you\'re too smart? Join Knocking Kenneth Korportaion and be one of the 2% smartest people on earth. You will learn to show love to others through actions rather than words.'}
	], product => db.model('products').create(product));

const seedCategories = () => db.Promise.map([
	{name: 'beauty', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97350&w=350&h=350'},
  {name: 'entertainment', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97350&w=350&h=350', icon: 'theaters'},
  {name: 'fashion', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97350&w=350&h=350'},
  {name: 'food', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97350&w=350&h=350', icon: 'restaurant'},
  {name: 'service', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97350&w=350&h=350'},
	{name: 'sports', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97350&w=350&h=350'},
	{name: 'technology', image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97350&w=350&h=350', icon: 'devices'},
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
