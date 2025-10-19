import { ContainerCard, Sizes } from './style.js';

const Card = ({ image, title, alt }) => {
  return (
    <ContainerCard>
      <img src={image} alt={alt} loading="lazy" />
      <h2>{title}</h2>
      <Sizes>Pequeno | Médio | Grande</Sizes>
    </ContainerCard>
  );
};

export default Card;
