import { CatalogSection, TitleWrapper, Subtitle, Title, Grid } from './style';
import Card from '../Card';

const Catalog = ({ cards }) => {
  return (
    <CatalogSection>
      <TitleWrapper>
        <Subtitle>Entrega e montagem garantida!</Subtitle>
        <Title>Nossos Brinquedos</Title>
      </TitleWrapper>
      <Grid>
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            sub_title={card.sub_title}
          />
        ))}
      </Grid>
    </CatalogSection>
  );
};

export default Catalog;
