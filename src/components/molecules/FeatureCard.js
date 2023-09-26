import React from 'react';
import '../../styles/FeatureCard.css';

const FeatureCard = ({ imageSrc, productName, description, rating }) => {
  return (
    <div className="container card content">
      <div className="img-box">
        <img src={imageSrc} alt={productName} className="img" />
      </div>
      <h3>{productName}</h3>
      <p>{description}</p>
      <div className="rating">
        {renderStars(rating)}
      </div>
    </div>
  );
};

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`star ${i <= rating ? 'filled' : 'empty'}`}
        role="img"
        aria-label={i <= rating ? 'Estrella llena' : 'Estrella vacía'}
      >
        ⭐
      </span>
    );
  }
  return stars;
};

export default FeatureCard;
