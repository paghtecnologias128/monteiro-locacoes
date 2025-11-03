import { useState } from 'react';
import { CatalogSection, TitleWrapper, Title, Grid } from './style';
import Card from '../Card';
import BookingSection from '../BookingSection';
import { items as products } from '../../data/products';

const Products = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCardClick = (itemId) => {
    setSelectedItems((prev) => {
      const isSelected = prev.some((item) => item.id === itemId);
      if (isSelected) {
        return prev.filter((item) => item.id !== itemId);
      }
      const product = products.find((p) => p.id === itemId);
      return [...prev, { id: itemId, name: product.name, variation: null, price: null }];
    });
  };

  const handleOptionClick = (itemId, option) => {
    setSelectedItems((prev) =>
      prev.map((item) =>
        // Se o ID do item corresponder, atualize a variação e o preço
        item.id === itemId ? { ...item, variation: option.label, price: option.price } : item,
      ),
    );
  };

  const handleClear = () => {
    setSelectedItems([]);
  };

  const handleSend = ({ dateTime, location, observations }) => {
    const itemsWithNoVariation = selectedItems.filter((item) => !item.variation);
    if (itemsWithNoVariation.length > 0) {
      alert('Por favor, selecione uma opção para todos os itens selecionados.');
      return;
    }

    const message = `Olá! Quero orçamento para:\n\n${selectedItems
      .map((item) => `1. ${item.name} - ${item.variation}`)
      .join(
        '\n',
      )}\n\nData e horário: ${dateTime}\nLocal do evento: ${location}\nObservações: ${observations}`;

    const whatsappUrl = `https://wa.me/5567984684460?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <CatalogSection>
        <TitleWrapper>
          <Title>
            Nossos <br /> serviços e brinquedos
          </Title>
        </TitleWrapper>
        <Grid>
          {products.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              image={card.image}
              title={card.name}
              alt={card.alt}
              options={card.options}
              isSelected={selectedItems.some((item) => item.id === card.id)}
              selectedOption={selectedItems.find((item) => item.id === card.id)}
              onCardClick={handleCardClick}
              onOptionClick={handleOptionClick}
            />
          ))}
        </Grid>
        <BookingSection selectedItems={selectedItems} onSend={handleSend} onClear={handleClear} />
      </CatalogSection>
    </>
  );
};

export default Products;
