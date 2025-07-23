import React from 'react';
import RecipeCard from '../components/RecipeCard';
import './Oceania.css';

const Oceania = () => (
  <section className="continent-wrapper">
    <h1>🌏 Oceania</h1>
    <p>Earth oven feasts, creamy coconut bundles, and flaky pies from the Pacific islands and Australia.</p>
    <RecipeCard
      title="Meat Pie"
      region="Australia"
      tags="Savory · Baked"
      image="/images/meat-pie.jpg"
      link="/recipes/meat-pie"
    />
    <RecipeCard
      title="Hāngī"
      region="New Zealand"
      tags="Earth Oven · Feast"
      image="/images/hangi.jpg"
      link="/recipes/hangi"
    />
    <RecipeCard
      title="Palusami"
      region="Samoa"
      tags="Coconut · Leaf-Wrapped"
      image="/images/palusami.jpg"
      link="/recipes/palusami"
    />
  </section>
);

export default Oceania;
