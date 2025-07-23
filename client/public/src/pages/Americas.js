import React from 'react';
import RecipeCard from '../components/RecipeCard';
import './Americas.css';

const Americas = () => (
  <section className="continent-wrapper">
    <h1>🌎 Americas</h1>
    <p>From comfort food to coastal freshness — explore iconic dishes from North, Central, and South America.</p>
    <RecipeCard
      title="Mac & Cheese"
      region="USA"
      tags="Comfort · Baked"
      image="/images/mac-and-cheese.jpg"
      link="/recipes/mac-and-cheese"
    />
    <RecipeCard
      title="Empanadas Salteñas"
      region="Argentina"
      tags="Savory · Street Food"
      image="/images/empanadas.jpg"
      link="/recipes/empanadas-saltenas"
    />
    <RecipeCard
      title="Ceviche"
      region="Peru"
      tags="Seafood · Citrus"
      image="/images/ceviche.jpg"
      link="/recipes/ceviche"
    />
  </section>
);

export default Americas;
