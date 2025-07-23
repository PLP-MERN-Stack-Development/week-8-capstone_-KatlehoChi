import React from 'react';
import RecipeCard from '../components/RecipeCard';
import './Asia.css';

const Asia = () => (
  <section className="continent-wrapper">
    <h1>🌏 Asia</h1>
    <p>Bold spices, comforting noodles, and sweet treats from East to South Asia.</p>
    <RecipeCard
      title="Pad Thai"
      region="Thailand"
      tags="Noodles · Street Food"
      image="/images/pad-thai.jpg"
      link="/recipes/pad-thai"
    />
    <RecipeCard
      title="Chana Masala"
      region="India"
      tags="Vegan · Spiced"
      image="/images/chana-masala.jpg"
      link="/recipes/chana-masala"
    />
    <RecipeCard
      title="Matcha Mochi"
      region="Japan"
      tags="Dessert · Gluten-Free"
      image="/images/matcha-mochi.jpg"
      link="/recipes/matcha-mochi"
    />
  </section>
);

export default Asia;
