import { CatalogSection, TitleWrapper, Subtitle, Title, Grid } from './style';
import Card from '../Card';

const Products = ({ cards }) => {
  return (
    <CatalogSection>
      <TitleWrapper>
        <Subtitle>Entrega e montagem garantida!</Subtitle>
        <Title>Nossos Brinquedos</Title>
      </TitleWrapper>
      <Grid>
        {cards.map((card) => (
          <Card key={card.id} image={card.image} title={card.title} alt={card.alt} />
        ))}
      </Grid>
    </CatalogSection>
  );
};

export default Products;
