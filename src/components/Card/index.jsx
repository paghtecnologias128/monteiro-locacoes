import { ContainerCard, Sizes } from "./style.js";

const Card = ({ image, title }) => {
  return (
    <ContainerCard>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <Sizes>Pequeno | Médio | Grande</Sizes>
    </ContainerCard>
  );
};

export default Card;
