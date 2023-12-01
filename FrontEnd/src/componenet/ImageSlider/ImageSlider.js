import React, { useState } from "react";
import i from "../../assets/profile/photo_2023-11-30_09-55-01.jpg";
import i3 from "../../assets/profile/photo_2023-10-31_23-35-07.jpg";
import i4 from "../../assets/profile/photo_2023-11-29_08-08-42.jpg";
import i2 from "../../assets/profile/photo_2023-11-30_09-54-38.jpg";
import "./ImageSlider.css";

const ImageSlider = () => {
  const Slides = [i,i2, i3, i4];
  const [currentIndex, setcurrentIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setcurrentIndex((prevIndex) =>
      prevIndex === 0 ? Slides.length - 1 : prevIndex - 1
    );
  };

  const handleRightArrowClick = () => {
    setcurrentIndex((prevIndex) =>
      prevIndex === Slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setcurrentIndex(index);
  };

  return (
    <>
      <div className="slideStyles">
        <div className="leftArrowStyles" onClick={handleLeftArrowClick}>
          &#9665;
        </div>
        <div
          className="slideStyles1"
          style={{ backgroundImage: `url(${Slides[currentIndex]})` }}
        ></div>
        <div className="RightArowStyles" onClick={handleRightArrowClick}>
          &#9655;
        </div>
        <div className="dot">
          {Slides.map((slide, slideindex) => (
            <div
              key={slideindex}
              className={`dotstyle ${currentIndex === slideindex && 'active'}`}
              onClick={() => handleDotClick(slideindex)}
            >
              ○
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
