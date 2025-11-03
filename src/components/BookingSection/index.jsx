import PropTypes from 'prop-types';
import {
  BookingSectionContainer,
  ChipContainer,
  Form,
  Input,
  TextArea,
  ButtonContainer,
  Button,
  ErrorMessage,
  EmptyStateMessage,
  ConfirmationMessage,
  InputGroup,
} from './style';
import Chip from '../Chip';
import { FaWhatsapp } from 'react-icons/fa';
import useBookingForm from '../../hooks/useBookingForm';

const BookingSection = ({ selectedItems, onSend, onClear, onQuantityChange }) => {
  const {
    dateTime,
    setDateTime,
    cep,
    location,
    setLocation,
    number,
    setNumber,
    complement,
    setComplement,
    observations,
    setObservations,
    minDateTime,
    isSending,
    showConfirmation,
    dateTimeError,
    cepError,
    locationError,
    numberError,
    itemsError,
    observationsRef,
    handleCepChange,
    handleSend,
  } = useBookingForm(selectedItems, onSend);

  if (selectedItems.length === 0) {
    return (
      <BookingSectionContainer role="region" aria-live="polite">
        <EmptyStateMessage>
          Nenhum item selecionado. Clique em um card e faça sua alocação!
        </EmptyStateMessage>
      </BookingSectionContainer>
    );
  }

  return (
    <BookingSectionContainer role="region" aria-live="polite">
      {itemsError && <ErrorMessage id="items-error">{itemsError}</ErrorMessage>}
      <ChipContainer role="list" aria-labelledby="items-error">
        {selectedItems.map((item) => (
          <Chip key={item.id} item={item} onQuantityChange={onQuantityChange} />
        ))}
      </ChipContainer>
      <Form aria-labelledby="form-title">
        <h2 id="form-title" style={{ display: 'none' }}>
          Detalhes do Orçamento
        </h2>
        <InputGroup>
          <Input
            type="datetime-local"
            value={dateTime}
            min={minDateTime}
            onChange={(e) => setDateTime(e.target.value)}
            $isInvalid={!!dateTimeError}
            aria-invalid={!!dateTimeError}
            aria-describedby={dateTimeError ? 'datetime-error' : undefined}
          />
          {dateTimeError && <ErrorMessage id="datetime-error">{dateTimeError}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Input
            type="text"
            placeholder="CEP"
            value={cep}
            onChange={handleCepChange}
            maxLength="8"
            $isInvalid={!!cepError}
            aria-invalid={!!cepError}
            aria-describedby={cepError ? 'cep-error' : undefined}
          />
          {cepError && <ErrorMessage id="cep-error">{cepError}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Input
            type="text"
            placeholder="Número"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            $isInvalid={!!numberError}
            aria-invalid={!!numberError}
            aria-describedby={numberError ? 'number-error' : undefined}
          />
          {numberError && <ErrorMessage id="number-error">{numberError}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Input
            type="text"
            placeholder="Complemento (opcional)"
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
            aria-label="Complemento"
          />
        </InputGroup>
        <InputGroup>
          <TextArea
            placeholder="Local do evento"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            $isInvalid={!!locationError}
            aria-invalid={!!locationError}
            aria-describedby={locationError ? 'location-error' : undefined}
            disabled // Disable manual editing if CEP is used
          />
          {locationError && <ErrorMessage id="location-error">{locationError}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <TextArea
            ref={observationsRef}
            placeholder="Observações"
            value={observations}
            onChange={(e) => setObservations(e.target.value)}
            aria-label="Observações"
          />
        </InputGroup>
        <ButtonContainer>
          <Button
            onClick={handleSend}
            disabled={isSending}
            aria-label="Enviar orçamento via WhatsApp"
          >
            {isSending ? (
              'Enviando...'
            ) : (
              <>
                <FaWhatsapp />
                Enviar
              </>
            )}
          </Button>
          <Button
            $clear
            onClick={() => {
              if (window.confirm('Tem certeza que deseja limpar todos os itens selecionados?')) {
                onClear();
              }
            }}
            aria-label="Limpar seleção"
          >
            Limpar
          </Button>
        </ButtonContainer>
      </Form>
      {showConfirmation && (
        <ConfirmationMessage role="status" aria-live="assertive">
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
