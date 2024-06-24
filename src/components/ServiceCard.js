import React from 'react';
import './ServiceCard.css';

function ServiceCard({ title, description, image }) {
  return (
    <div className="service-card">
      <img src={image} alt={`${title} logo`} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
