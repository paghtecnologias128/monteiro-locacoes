import { ContainerCard, Sizes } from './style.js';

const Card = ({ image, title, alt }) => {
  return (
    <ContainerCard>
      <img src={image} alt={alt} />
      <h1>{title}</h1>
      <Sizes>Pequeno | Médio | Grande</Sizes>
    </ContainerCard>
  );
};

export default Card;
