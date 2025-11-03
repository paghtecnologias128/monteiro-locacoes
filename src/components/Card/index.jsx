import { memo } from 'react';
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
import useCarousel from '../..//hooks/useCarousel.js';

const Card = memo(
  ({
    id,
    images,
    title,
    alt,
    options,
    isSelected,
    selectedOptions,
    onCardClick,
    onOptionClick,
  }) => {
    const { currentImageIndex, handleNextImage, handlePrevImage, setIsHovered } = useCarousel(
      images.length,
    );

    const handleOptionClick = (e, option) => {
      e.stopPropagation();
      onOptionClick(id, option);
    };

    return (
      <ContainerCard
        $isSelected={isSelected}
        onClick={() => onCardClick(id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="button"
        tabIndex="0"
        aria-label={`Selecionar ${title}`}
      >
        <CarouselBox>
          <CarouselSlider $currentIndex={currentImageIndex}>
            {images.map((src, i) => (
              <CarouselImg key={i} src={src} alt={`${alt} ${i + 1}`} loading="lazy" />
            ))}
          </CarouselSlider>
          {images.length > 1 && (
            <>
              <CarouselButton
                direction="prev"
                onClick={handlePrevImage}
                aria-label="Imagem anterior"
              >
                <FaChevronLeft />
              </CarouselButton>
              <CarouselButton
                direction="next"
                onClick={handleNextImage}
                aria-label="Próxima imagem"
              >
                <FaChevronRight />
              </CarouselButton>
            </>
          )}
        </CarouselBox>
        <h2>{title}</h2>
        {isSelected && (
          <OptionsContainer role="group" aria-label={`Opções para ${title}`}>
            {options.map((option) => (
              <OptionButton
                key={option.label}
                $isSelected={selectedOptions.some((selOpt) => selOpt.variation === option.label)}
                onClick={(e) => handleOptionClick(e, option)}
                aria-pressed={selectedOptions.some((selOpt) => selOpt.variation === option.label)}
                aria-label={option.label}
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
  selectedOptions: PropTypes.arrayOf(
    PropTypes.shape({
      variation: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onCardClick: PropTypes.func.isRequired,
  onOptionClick: PropTypes.func.isRequired,
};

export default Card;
