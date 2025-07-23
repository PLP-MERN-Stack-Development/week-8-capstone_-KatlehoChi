import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

const RecipeCard = ({ title, region, tags, image, link }) => (
  <Link to={link} className="card-link">
    <div className="recipe-card">
      <div className="top-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p className="tags">{region} · {tags}</p>
      </div>
    </div>
  </Link>
);

export default RecipeCard;
