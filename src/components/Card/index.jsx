import { ContainerCard, OptionsContainer, OptionButton } from './style.js';

const Card = ({
  id,
  image,
  title,
  alt,
  options,
  isSelected,
  selectedOption,
  onCardClick,
  onOptionClick,
}) => {
  const handleOptionClick = (e, option) => {
    e.stopPropagation();
    onOptionClick(id, option);
  };

  return (
    <ContainerCard isSelected={isSelected} onClick={() => onCardClick(id)}>
      <img src={image} alt={alt} loading="lazy" />
      <h2>{title}</h2>
      {isSelected && (
        <OptionsContainer>
          {options.map((option) => (
            <OptionButton
              key={option.label}
              isSelected={selectedOption?.label === option.label}
              onClick={(e) => handleOptionClick(e, option)}
            >
              {option.label}
            </OptionButton>
          ))}
        </OptionsContainer>
      )}
    </ContainerCard>
  );
};

export default Card;
