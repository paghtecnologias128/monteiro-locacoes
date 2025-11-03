import { useState, useEffect, useRef } from 'react';
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
  ConfirmationMessage,
  InputGroup,
  QuantityInput,
} from './style';
import { FaWhatsapp } from 'react-icons/fa';

const BookingSection = ({ selectedItems, onSend, onClear, onQuantityChange }) => {
  const [dateTime, setDateTime] = useState('');
  const [cep, setCep] = useState('');
  const [location, setLocation] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [observations, setObservations] = useState('');
  const [minDateTime, setMinDateTime] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [dateTimeError, setDateTimeError] = useState('');
  const [cepError, setCepError] = useState('');
  const [locationError, setLocationError] = useState('');
  const [numberError, setNumberError] = useState('');
  const [itemsError, setItemsError] = useState('');

  const observationsRef = useRef(null);

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

  useEffect(() => {
    if (observationsRef.current) {
      console.log('Resizing observations textarea', observationsRef.current.scrollHeight);
      observationsRef.current.style.height = '0px'; // Reset height to recalculate
      observationsRef.current.style.height = observationsRef.current.scrollHeight + 'px !important';
    }
  }, [observations]);

  const handleCepChange = async (e) => {
    const newCep = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setCep(newCep);
    setCepError('');

    if (newCep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${newCep}/json/`);
        const data = await response.json();

        if (data.erro) {
          setCepError('CEP não encontrado.');
          setLocation('');
        } else {
          const address = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
          setLocation(address);
        }
      } catch (error) {
        setCepError('Erro ao buscar CEP.');
        setLocation('');
      }
    }
  };

  const handleSend = () => {
    setDateTimeError('');
    setCepError('');
    setLocationError('');
    setNumberError('');
    setItemsError('');

    let hasError = false;

    if (selectedItems.length === 0) {
      setItemsError('Por favor, selecione pelo menos um item.');
      hasError = true;
    }

    const selectedDateTime = new Date(dateTime);
    const minimumDateTime = new Date(minDateTime);

    if (!dateTime) {
      setDateTimeError('Por favor, informe a data e o horário.');
      hasError = true;
    } else if (selectedDateTime < minimumDateTime) {
      setDateTimeError('A data e o horário devem ser pelo menos uma hora a partir de agora.');
      hasError = true;
    }

    if (!cep) {
      setCepError('Por favor, informe o CEP.');
      hasError = true;
    }

    if (!location) {
      setLocationError('Por favor, informe o local do evento.');
      hasError = true;
    }

    if (!number) {
      setNumberError('Por favor, informe o número.');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    setIsSending(true);
    setTimeout(() => {
      onSend({ dateTime, cep, location, number, complement, observations });
      setIsSending(false);
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);
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
      {itemsError && <ErrorMessage>{itemsError}</ErrorMessage>}
      <ChipContainer>
        {selectedItems.map((item) => (
          <Chip key={item.id}>
            {item.name} - {item.variation}
            <QuantityInput
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value))}
            />
          </Chip>
        ))}
      </ChipContainer>
      <Form>
        <InputGroup>
          <Input
            type="datetime-local"
            value={dateTime}
            min={minDateTime}
            onChange={(e) => setDateTime(e.target.value)}
            $isInvalid={!!dateTimeError}
          />
          {dateTimeError && <ErrorMessage>{dateTimeError}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Input
            type="text"
            placeholder="CEP"
            value={cep}
            onChange={handleCepChange}
            maxLength="8"
            $isInvalid={!!cepError}
          />
          {cepError && <ErrorMessage>{cepError}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Input
            type="text"
            placeholder="Número"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            $isInvalid={!!numberError}
          />
          {numberError && <ErrorMessage>{numberError}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Input
            type="text"
            placeholder="Complemento (opcional)"
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <TextArea
            placeholder="Local do evento"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            $isInvalid={!!locationError}
            disabled // Disable manual editing if CEP is used
          />
          {locationError && <ErrorMessage>{locationError}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <TextArea
            ref={observationsRef}
            placeholder="Observações"
            value={observations}
            onChange={(e) => setObservations(e.target.value)}
          />
        </InputGroup>
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
      {showConfirmation && (
        <ConfirmationMessage>
          Sua solicitação foi enviada! Redirecionando para o WhatsApp...
        </ConfirmationMessage>
      )}
    </BookingSectionContainer>
  );
};

BookingSection.propTypes = {
  selectedItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      variation: PropTypes.string,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onSend: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default BookingSection;
