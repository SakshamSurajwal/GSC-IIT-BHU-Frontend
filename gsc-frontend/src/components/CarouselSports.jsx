// ImageCarousel.js
import { useState, useEffect } from "react";

const ImageCarousel = ({ images, autoSlideInterval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoSlideInterval);

    return () => clearInterval(intervalId);
  }, [autoSlideInterval, images.length]);

  return (
    <div className="absolute z-10 mt-16 sm:hidden">
      <div className="h-[300px] w-[250px] sm:h-[500px] sm:w-[450px] bg-[#F4F4F4] border-8 border-[#A2A2A2] rounded-xl items-center flex justify-center">
        <img
          src={images[currentImageIndex]}
          alt="carousel"
          className="h-[250px] w-[250px]"
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
