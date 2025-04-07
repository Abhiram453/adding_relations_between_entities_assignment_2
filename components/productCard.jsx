import React from 'react';
import RatingWidget from './ratingWidget';


const ProductCard = ({ product, onRatingSubmit }) => {
  const { id, name, description, image, avgRating } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Average Rating: {avgRating.toFixed(1)}</p>
      <RatingWidget productId={id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

export default ProductCard;