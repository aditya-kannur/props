import React from 'react';
import './App.css';
import DataComponent from './Component/DataComponent';

export default function App() {
  const images = DataComponent();

  return (
    <>
      <p><strong>This is from Function Component</strong></p>
      <div className="image-container">
        {images.map((ele) => (
          <img src={ele.img} alt="elephant-images" key={ele.id} />
        ))}
      </div>
    </>
  );
}
