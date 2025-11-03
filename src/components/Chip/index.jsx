import React from 'react';
import PropTypes from 'prop-types';
import { ChipContainer, QuantityInput } from './style';

const Chip = ({ item, onQuantityChange }) => {
  return (
    <ChipContainer>
      {item.name} - {item.variation}
      <QuantityInput
        type="number"
        min="1"
        value={item.quantity}
        onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value))}
      />
    </ChipContainer>
  );
};

Chip.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    variation: PropTypes.string,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default Chip;
