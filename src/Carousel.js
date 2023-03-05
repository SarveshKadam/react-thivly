import React, { useState } from 'react';

export default function Carousel({ data }) {
  const [activeCard, setActiveCard] = useState(0);
  const currentData = data?.[activeCard];
  const handlePrev = () => {
    if (activeCard <= 0) return;
    setActiveCard((prev) => prev - 1);
  };
  const handleNext = () => {
    if (activeCard >= data?.length - 1) return;
    setActiveCard((prev) => prev + 1);
  };
  return (
    <div className="outside">
      <div className="container">
        <img src={currentData?.img} alt="" className="image" />
        <p className="title">{currentData?.title}</p>
        <p className="subtitle">{currentData?.subtitle}</p>
        <button onClick={handlePrev} className="prev-btn">
          P
        </button>
        <button onClick={handleNext} className="next-btn">
          N
        </button>
      </div>
    </div>
  );
}
