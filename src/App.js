import React from 'react';
import Carousel from './Carousel';
import { imageData } from './data';
import './style.css';

export default function App() {
  return (
    <div>
      <Carousel data={imageData} />
    </div>
  );
}
