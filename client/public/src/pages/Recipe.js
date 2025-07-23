import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Recipe.css';

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://your-backend-url/api/recipes/${id}`)
      .then(res => res.json())
      .then(data => setRecipe(data));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <section className="recipe-wrapper">
      <h1>{recipe.title}</h1>
      <p className="intro">{recipe.region} · {recipe.tags.join(', ')}</p>
      <img src={recipe.image} alt={recipe.title} className="hero-image" />
      <div className="recipe-card">
        <h2>Ingredients</h2>
        <ul>{recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}</ul>
        <h2>Instructions</h2>
        <ol>{recipe.instructions.map((step, i) => <li key={i}>{step}</li>)}</ol>
      </div>
    </section>
  );
};

export default Recipe;
