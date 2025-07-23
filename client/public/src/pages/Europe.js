import React from 'react';
import RecipeCard from '../components/RecipeCard';
import './Europe.css';

const Europe = () => (
  <section className="continent-wrapper">
    <h1>🌍 Europe</h1>
    <p>Rustic breads, pasta, and elegant vegetable dishes from the heart of Europe.</p>
    <RecipeCard
      title="Spaghetti Aglio e Olio"
      region="Italy"
      tags="Quick · Vegan-Friendly"
      image="/images/aglio-e-olio.jpg"
      link="/recipes/aglio-e-olio"
    />
    <RecipeCard
      title="Ratatouille"
      region="France"
      tags="Vegan · Slow-Roasted"
      image="/images/ratatouille.jpg"
      link="/recipes/ratatouille"
    />
  </section>
);

export default Europe;
