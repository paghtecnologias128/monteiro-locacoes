import { useState, useEffect, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import {
  ContainerCard,
  CarouselBox,
  CarouselSlider,
  CarouselImg,
  CarouselButton,
  OptionsContainer,
  OptionButton,
} from './style.js';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Card = memo(
  ({ id, images, title, alt, options, isSelected, selectedOption, onCardClick, onOptionClick, isMissingOption }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
      if (isHovered) {
        intervalRef.current = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3500);
      } else {
        clearInterval(intervalRef.current);
      }

      return () => clearInterval(intervalRef.current);
    }, [isHovered, images.length]);

    const handleOptionClick = (e, option) => {
      e.stopPropagation();
      onOptionClick(id, option);
    };

    const handleNextImage = (e) => {
      e.stopPropagation();
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = (e) => {
      e.stopPropagation();
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
      <ContainerCard
        $isSelected={isSelected}
        $isMissingOption={isMissingOption}
        onClick={() => onCardClick(id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CarouselBox>
          <CarouselSlider currentIndex={currentImageIndex}>
            {images.map((src, i) => (
              <CarouselImg key={i} src={src} alt={`${alt} ${i + 1}`} loading="lazy" />
            ))}
          </CarouselSlider>
          {images.length > 1 && (
            <>
              <CarouselButton direction="prev" onClick={handlePrevImage}>
                <FaChevronLeft />
              </CarouselButton>
              <CarouselButton direction="next" onClick={handleNextImage}>
                <FaChevronRight />
              </CarouselButton>
            </>
          )}
        </CarouselBox>
        <h2>{title}</h2>
        {isSelected && (
          <OptionsContainer>
            {options.map((option) => (
              <OptionButton
                key={option.label}
                $isSelected={selectedOption?.label === option.label}
                onClick={(e) => handleOptionClick(e, option)}
              >
                {option.label}
              </OptionButton>
            ))}
          </OptionsContainer>
        )}
      </ContainerCard>
    );
  },
);

Card.displayName = 'Card';

Card.propTypes = {
  id: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isSelected: PropTypes.bool.isRequired,
  selectedOption: PropTypes.shape({
    label: PropTypes.string,
  }),
  onCardClick: PropTypes.func.isRequired,
  onOptionClick: PropTypes.func.isRequired,
  isMissingOption: PropTypes.bool.isRequired,
};
export default Card;
