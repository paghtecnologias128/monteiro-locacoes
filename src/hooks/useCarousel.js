import { useState, useEffect, useRef } from 'react';

const useCarousel = (imagesLength, intervalTime = 3500) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesLength);
      }, intervalTime);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered, imagesLength, intervalTime]);

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesLength);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imagesLength) % imagesLength);
  };

  return { currentImageIndex, handleNextImage, handlePrevImage, setIsHovered };
};

export default useCarousel;
