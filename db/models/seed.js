const db = require('APP/db');

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234', roles: 'user'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234', roles: 'admin'},
], user => db.model('users').create(user));

const seedProducts = () => db.Promise.map([
		{
      name: 'Candy Store',
      price: 2863,
      image: 'https://as2.ftcdn.net/jpg/00/65/70/71/500_F_65707143_rufOR26aw7QO7doTN50n5SS6eJhV0dVi.jpg',
      description: 'A candy store full of candy curated by four programmers who decided life would be better selling candy!'},
		{
      name: 'Leonidas Coffee Shop',
      price: 2,
      image: 'http://www.antwerpenkoekenstad.be/wp-content/uploads/2013/10/Leonidas-Chocolates-Caf%C3%A9WEB.jpg',
      description: 'Our chocolate is good, but our customer service is as bitter as our espresso!'
    },
    {
      name: 'Awake Anthony AARP',
      price: 62474,
      image: 'https://t3.ftcdn.net/jpg/01/18/40/62/240_F_118406286_ZxPtDpa8VzhECWWwkzUJkx7AN2T0TB5s.jpg',
      description: 'Ever feel like there are not enough emojis in the world to express your emotions? Just make a request and Awake Anthony AARP and we will make you the perfect set of emojis for only $9.99!'
    },
    {
      name: 'Emotional Emily Encorporated',
      price: 90000,
      image: 'https://as1.ftcdn.net/jpg/01/07/64/72/500_F_107647264_SUvrPkK9HspqKRz0EtzhAx08iJgLjJB2.jpg',
      description: 'If you feel emotional, buy a product from Emotional Emily Encorporated to make you feel better right away! Each product is full of love, care, and a bowl of ramen!'
    },
    {
      name: 'Philosophical Phil Partnership',
      price: 35269,
      image: 'https://as1.ftcdn.net/jpg/00/30/49/78/500_F_30497868_in2Om7LBcwbPDDZ6UAD0XuTWEHNGk4qJ.jpg',
      description: 'Veggiemite! \'Nuff said.'
    },
		{
      name: 'Jammin Jiheh, LLC',
      price: 999999,
      image: 'https://as2.ftcdn.net/jpg/01/22/72/87/500_F_122728743_naarCjUP9bzSpgHpom6QFTD6vVr0dNgH.jpg',
      url: 'http://www.jihehritterling.com',
      description: 'A club for those who can\'t dance! Come show off your moves in complete darkness so that no one can laugh at you!'
    },
    {
      name: 'Knocking Kenneth Korporation',
      price: 1000,
      image: '/images/bartendr.png',
      description: 'Ever feel like you\'re alone because you\'re too smart? Join Knocking Kenneth Korportaion and be one of the 2% smartest people on earth. You will learn to show love to others through actions rather than words.'
    }
	], product => db.model('products').create(product));

const seedCategories = () => db.Promise.map([
	{name: 'Beauty', icon: 'brush'},
  {name: 'Entertainment', icon: 'theaters'},
  {name: 'Fashion', icon: 'star'},
  {name: 'Food', icon: 'restaurant'},
  {name: 'Pets', icon: 'pets'},
  {name: 'Service', icon: 'work'},
	{name: 'Sports', icon: 'pool'},
	{name: 'Technology', icon: 'devices'},
], category => db.model('categories').create(category));

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let createdCategories, createdProducts;

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
    console.log(`Seeded ${products.length} products OK`);
  })
  .then(() => createdProducts[0].addCategory(createdCategories[3]))
  .then(() => createdProducts[1].addCategory(createdCategories[3]))
  .then(() => createdProducts[2].addCategories([createdCategories[5], createdCategories[7]]))
  .then(() => createdProducts[3].addCategory(createdCategories[5]))
  .then(() => createdProducts[4].addCategory(createdCategories[3]))
  .then(() => createdProducts[5].addCategory(createdCategories[1]))
  .then(() => createdProducts[6].addCategory(createdCategories[5]))
  .catch(error => console.error(error))
  .finally(() => db.close());
