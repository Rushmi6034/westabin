import React, { forwardRef } from 'react';

const FeatureCard = forwardRef(({ icon, title, description }, ref) => {
  return (
    <div className="feature-card" ref={ref}>
      <div className="feature-icon">
        <img src={icon} width="50" height="50" alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
});

export default FeatureCard;