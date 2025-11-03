import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  BookingSectionContainer,
  ChipContainer,
  Chip,
  Form,
  Input,
  TextArea,
  ButtonContainer,
  Button,
  ErrorMessage,
  EmptyStateMessage,
} from './style';
import { FaWhatsapp } from 'react-icons/fa';

const BookingSection = ({ selectedItems, onSend, onClear, itemsWithNoVariationError }) => {
  const [dateTime, setDateTime] = useState('');
  const [location, setLocation] = useState('');
  const [observations, setObservations] = useState('');
  const [minDateTime, setMinDateTime] = useState('');
  const [isSending, setIsSending] = useState(false);

  const [dateTimeError, setDateTimeError] = useState('');
  const [locationError, setLocationError] = useState('');

  useEffect(() => {
    const now = new Date();
    now.setHours(now.getHours() + 1);
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    setMinDateTime(`${year}-${month}-${day}T${hours}:${minutes}`);
  }, []);

  const handleSend = () => {
    setDateTimeError('');
    setLocationError('');

    let hasError = false;

    const selectedDateTime = new Date(dateTime);
    const minimumDateTime = new Date(minDateTime);

    if (selectedDateTime < minimumDateTime) {
      setDateTimeError('A data e o horário devem ser pelo menos uma hora a partir de agora.');
      hasError = true;
    }

    if (!location) {
      setLocationError('Por favor, informe o local do evento.');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    setIsSending(true);
    setTimeout(() => {
      onSend({ dateTime, location, observations });
      setIsSending(false);
    }, 2000);
  };

  if (selectedItems.length === 0) {
    return (
      <BookingSectionContainer>
        <EmptyStateMessage>
          Nenhum item selecionado. Clique em um card para começar a montar seu orçamento!
        </EmptyStateMessage>
      </BookingSectionContainer>
    );
  }

  return (
    <BookingSectionContainer>
      {itemsWithNoVariationError && <ErrorMessage>{itemsWithNoVariationError}</ErrorMessage>}
      <ChipContainer>
        {selectedItems
          .filter((item) => item.variation)
          .map((item) => (
            <Chip key={item.id}>
              {item.name} - {item.variation}
            </Chip>
          ))}
      </ChipContainer>
      <Form>
        <div>
          <Input
            type="datetime-local"
            value={dateTime}
            min={minDateTime}
            onChange={(e) => setDateTime(e.target.value)}
            $isInvalid={!!dateTimeError}
          />
          {dateTimeError && <ErrorMessage>{dateTimeError}</ErrorMessage>}
        </div>
        <div>
          <TextArea
            placeholder="Local do evento"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            $isInvalid={!!locationError}
          />
          {locationError && <ErrorMessage>{locationError}</ErrorMessage>}
        </div>
        <TextArea
          placeholder="Observações"
          value={observations}
          onChange={(e) => setObservations(e.target.value)}
        />
        <ButtonContainer>
          <Button onClick={handleSend} disabled={isSending}>
            {isSending ? (
              'Enviando...'
            ) : (
              <>
                <FaWhatsapp />
                Enviar
              </>
            )}
          </Button>
          <Button $clear onClick={onClear}>
            Limpar
          </Button>
        </ButtonContainer>
      </Form>
    </BookingSectionContainer>
  );
};

BookingSection.propTypes = {
  selectedItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      variation: PropTypes.string,
    }),
  ).isRequired,
  onSend: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  itemsWithNoVariationError: PropTypes.string,
};

export default BookingSection;
