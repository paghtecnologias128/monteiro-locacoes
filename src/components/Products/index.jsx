import { useState, useCallback } from 'react';
import { CatalogSection, TitleWrapper, Title, Grid } from './style';
import Card from '../Card';
import BookingSection from '../BookingSection';
import { items as products } from '../../data/products';

const Products = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCardClick = useCallback((productId) => {
    setSelectedItems((prev) => {
      const productSelectedOptions = prev.filter((item) => item.productId === productId);
      if (productSelectedOptions.length > 0) {
        // If product has selected options, deselect all of them
        return prev.filter((item) => item.productId !== productId);
      } else {
        // If product has no selected options, select the first one with quantity 1
        const product = products.find((p) => p.id === productId);
        if (product && product.options.length > 0) {
          const firstOption = product.options[0];
          const uniqueItemId = `${productId}-${firstOption.label}`;
          return [
            ...prev,
            {
              id: uniqueItemId,
              productId: productId,
              name: product.name,
              variation: firstOption.label,
              quantity: 1,
            },
          ];
        }
      }
      return prev;
    });
  }, []);

  const handleOptionClick = useCallback((productId, option) => {
    setSelectedItems((prev) => {
      const uniqueItemId = `${productId}-${option.label}`;
      const existingItemIndex = prev.findIndex((item) => item.id === uniqueItemId);

      if (existingItemIndex !== -1) {
        // If already selected, remove it
        return prev.filter((item) => item.id !== uniqueItemId);
      } else {
        // If not selected, add it with default quantity 1
        const product = products.find((p) => p.id === productId);
        return [
          ...prev,
          {
            id: uniqueItemId,
            productId: productId,
            name: product.name,
            variation: option.label,
            quantity: 1,
          },
        ];
      }
    });
  }, []);

  const handleQuantityChange = useCallback((itemId, newQuantity) => {
    setSelectedItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item)),
    );
  }, []);

  const handleClear = () => {
    setSelectedItems([]);
  };

  const handleSend = ({ dateTime, cep, location, number, complement, observations }) => {
    if (selectedItems.length === 0) {
      alert('Por favor, selecione pelo menos um item.');
      return;
    }

    const message = `Olá! Quero orçamento para:\n\n${selectedItems
      .map((item) => `${item.quantity}x ${item.name} - ${item.variation}`)
      .join(
        '\n',
      )}\n\nData e horário: ${dateTime}\nCEP: ${cep}\nLocal do evento: ${location}, ${number} ${complement ? `- ${complement}` : ''}\nObservações: ${observations}`;

    const whatsappUrl = `https://wa.me/5567984684460?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <CatalogSection>
        <TitleWrapper>
          <Title> Nossos serviços</Title>
        </TitleWrapper>
        <Grid>
          {products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              images={product.images}
              title={product.name}
              alt={product.alt}
              options={product.options}
              isSelected={selectedItems.some((item) => item.productId === product.id)}
              selectedOptions={selectedItems.filter((item) => item.productId === product.id)}
              onCardClick={handleCardClick}
              onOptionClick={handleOptionClick}
            />
          ))}
        </Grid>
        <BookingSection
          selectedItems={selectedItems}
          onSend={handleSend}
          onClear={handleClear}
          onQuantityChange={handleQuantityChange}
        />
      </CatalogSection>
    </>
  );
};

export default Products;
