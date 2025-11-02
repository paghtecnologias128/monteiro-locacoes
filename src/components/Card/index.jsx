import { ContainerCard, Sizes } from './style.js';

const Card = ({ image, title, alt, description }) => {
  return (
    <ContainerCard>
      <img src={image} alt={alt} loading="lazy" />
      <h2>{title}</h2>
      <Sizes>{description}</Sizes>
    </ContainerCard>
  );
};

export default Card;
