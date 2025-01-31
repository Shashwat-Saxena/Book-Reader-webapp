import React from 'react';
import { useLocation } from 'react-router-dom';

const Reader = () => {
  const location = useLocation();
  const { name, path, description, image } = location.state || {};

  return (
    <div className="container mt-4">
      <h1 style={{marginLeft:'25rem', fontFamily:'cursive', textDecoration:'underline'}}>{name}</h1>
      
      <iframe src={path} width="100%" height="600px" allow="autoplay" download></iframe>
     
    </div>
  );
};

export default Reader;
