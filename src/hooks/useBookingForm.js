import { useState, useEffect, useRef } from 'react';

const useBookingForm = (selectedItems, onSend) => {
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
      } catch (_error) {
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

  return {
    dateTime,
    setDateTime,
    cep,
    setCep,
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
  };
};

export default useBookingForm;
