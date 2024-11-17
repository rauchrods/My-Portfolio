import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./carousal.css";

const Carousal = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevState) =>
        prevState === images.length - 1 ? 0 : prevState + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  function rightImageHandler() {
    setCurrentSlide((prevState) => {
      if (prevState === images.length - 1) {
        return 0;
      }
      return prevState + 1;
    });
  }

  function leftImageHandler() {
    setCurrentSlide((prevState) => {
      if (prevState === 0) {
        return images.length - 1;
      }
      return prevState - 1;
    });
  }

  function setCurrentIndicator(currIndex) {
    setCurrentSlide(currIndex);
  }

  return (
    <div className={"image-slider-container"}>
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={leftImageHandler}
      />
      {images.length > 0 &&
        images.map((image, index) => (
          <img
            src={image}
            alt={index}
            key={index}
            loading="lazy"
            className={currentSlide === index ? "current-image" : "hide-image"}
          />
        ))}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={rightImageHandler}
      />
      <span className="circle-indicator">
        {images.length > 0 &&
          images.map((image, index) => (
            <button
              className={
                currentSlide === index
                  ? "current-indicator"
                  : "suppress-indicator"
              }
              key={index}
              onClick={() => setCurrentIndicator(index)}
            ></button>
          ))}
      </span>
    </div>
  );
};

export default Carousal;