const mongoose = require('mongoose');
const Recipe = require('./models/Recipe');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const recipes = [
  {
    title: 'Bobotie',
    region: 'South Africa',
    continent: 'Africa',
    tags: ['Curried', 'Baked'],
    ingredients: ['500g minced beef', '1 onion', '2 eggs', '1 slice bread', 'milk', 'curry powder'],
    instructions: ['Soak bread in milk', 'Fry onion and beef', 'Mix with curry and bread', 'Bake with egg topping'],
    image: '/images/bobotie.jpg'
  },
  {
    title: 'Doro Wat',
    region: 'Ethiopia',
    continent: 'Africa',
    tags: ['Spicy', 'Stew'],
    ingredients: ['Chicken', 'Berbere spice', 'Onions', 'Garlic', 'Ginger', 'Hard-boiled eggs'],
    instructions: ['Sauté onions', 'Add spices and chicken', 'Simmer until tender', 'Add eggs'],
    image: '/images/doro-wat.jpg'
  },
  {
    title: 'Chicken Tagine',
    region: 'Morocco',
    continent: 'Africa',
    tags: ['Slow-Cooked', 'Aromatic'],
    ingredients: ['Chicken thighs', 'Preserved lemon', 'Olives', 'Onion', 'Spices'],
    instructions: ['Brown chicken', 'Add onions and spices', 'Simmer with lemon and olives'],
    image: '/images/tagine.jpg'
  },
  {
    title: 'Mac & Cheese',
    region: 'USA',
    continent: 'Americas',
    tags: ['Comfort', 'Baked'],
    ingredients: ['Elbow pasta', 'Cheddar cheese', 'Milk', 'Butter', 'Flour'],
    instructions: ['Make cheese sauce', 'Mix with pasta', 'Bake until golden'],
    image: '/images/mac-and-cheese.jpg'
  },
  {
    title: 'Empanadas Salteñas',
    region: 'Argentina',
    continent: 'Americas',
    tags: ['Savory', 'Street Food'],
    ingredients: ['Beef', 'Potatoes', 'Onion', 'Olives', 'Hard-boiled eggs', 'Pastry'],
    instructions: ['Cook filling', 'Stuff pastry', 'Bake until golden'],
    image: '/images/empanadas.jpg'
  },
  {
    title: 'Ceviche',
    region: 'Peru',
    continent: 'Americas',
    tags: ['Seafood', 'Citrus'],
    ingredients: ['White fish', 'Lime juice', 'Onion', 'Tomato', 'Cilantro'],
    instructions: ['Marinate fish in lime', 'Add veggies', 'Serve chilled'],
    image: '/images/ceviche.jpg'
  },
  {
    title: 'Meat Pie',
    region: 'Australia',
    continent: 'Oceania',
    tags: ['Savory', 'Baked'],
    ingredients: ['Beef', 'Onion', 'Gravy', 'Shortcrust pastry', 'Puff pastry'],
    instructions: ['Cook filling', 'Assemble pie', 'Bake until golden'],
    image: '/images/meat-pie.jpg'
  },
  {
    title: 'Hāngī',
    region: 'New Zealand',
    continent: 'Oceania',
    tags: ['Earth Oven', 'Feast'],
    ingredients: ['Pork', 'Chicken', 'Kumara', 'Pumpkin', 'Cabbage'],
    instructions: ['Wrap ingredients', 'Cook underground with hot stones'],
    image: '/images/hangi.jpg'
  },
  {
    title: 'Palusami',
    region: 'Samoa',
    continent: 'Oceania',
    tags: ['Coconut', 'Leaf-Wrapped'],
    ingredients: ['Taro leaves', 'Corned beef', 'Onion', 'Coconut cream'],
    instructions: ['Wrap filling in leaves', 'Bake until tender'],
    image: '/images/palusami.jpg'
  }
];

Recipe.insertMany(recipes)
  .then(() => {
    console.log('Seed data inserted');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting seed data:', err);
    mongoose.connection.close();
  });
