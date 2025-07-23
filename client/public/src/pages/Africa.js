import React from 'react';
import RecipeCard from '../components/RecipeCard';
import './Africa.css';

const Africa = () => (
  <section className="continent-wrapper">
    <h1>🌍 Africa</h1>
    <p>Explore vibrant flavors from South Africa, Ethiopia, and Morocco.</p>
    <RecipeCard
      title="Bobotie"
      region="South Africa"
      tags="Curried · Baked"
      image="/images/bobotie.jpeg"
      link="/recipes/bobotie"
    />
    {/* Add Doro Wat and Tagine similarly */}
  </section>
);

export default Africa;
