import React from 'react';

const Caracteristica = ({ title, description }) => {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Caracteristica;
