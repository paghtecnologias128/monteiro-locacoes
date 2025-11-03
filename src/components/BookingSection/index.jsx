import { useState, useEffect } from 'react';
import {
  BookingSectionContainer,
  ChipContainer,
  Chip,
  Form,
  Input,
  TextArea,
  ButtonContainer,
  Button,
} from './style';
import { FaWhatsapp } from 'react-icons/fa';

const BookingSection = ({ selectedItems, onSend, onClear }) => {
  const [dateTime, setDateTime] = useState('');
  const [location, setLocation] = useState('');
  const [observations, setObservations] = useState('');
  const [minDateTime, setMinDateTime] = useState('');

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
    const selectedDateTime = new Date(dateTime);
    const minimumDateTime = new Date(minDateTime);

    if (selectedDateTime < minimumDateTime) {
      alert('A data e o horário devem ser pelo menos uma hora a partir de agora.');
      return;
    }

    onSend({ dateTime, location, observations });
  };

  if (selectedItems.length === 0) {
    return null;
  }

  return (
    <BookingSectionContainer>
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
        <Input
          type="datetime-local"
          value={dateTime}
          min={minDateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />
        <TextArea
          placeholder="Local do evento"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <TextArea
          placeholder="Observações"
          value={observations}
          onChange={(e) => setObservations(e.target.value)}
        />
        <ButtonContainer>
          <Button onClick={handleSend}>
            <FaWhatsapp />
            Enviar
          </Button>
          <Button clear onClick={onClear}>
            Limpar
          </Button>
        </ButtonContainer>
      </Form>
    </BookingSectionContainer>
  );
};

export default BookingSection;
