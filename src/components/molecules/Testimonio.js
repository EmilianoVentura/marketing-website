import React from 'react';

const Testimonio = ({ text, author }) => {
  return (
    <div className="testimonial-card">
      <p>{text}</p>
      <p className="testimonial-author">- {author}</p>
    </div>
  );
};

export default Testimonio;
