import React from 'react';
import { Component } from 'react';
import './App.css';
import DataComponent from './Component/DataComponent';

export default class AppClass extends Component {
  render() {
    const images = DataComponent();

    return (
      <>
        <p><strong>This is from Class Component</strong></p>
        <div className="image-container">
          {images.map((ele) => (
            <img src={ele.img} alt="elephant-images" key={ele.id} />
          ))}
        </div>
      </>
    );
  }
}
