import React from 'react';

const Section = ({ title, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Section;
