import { AgendarSectionContainer, Title, Paragraph, Button } from './style';
import { FaWhatsapp } from 'react-icons/fa';

const AgendarSection = () => {
  return (
    <AgendarSectionContainer>
      <Title>APROVEITE E AGENDE!</Title>
      <Paragraph>
        Valorizamos sua festa com o objetivo de tornar esse momento inesquecível. Monitores
        treinados garantem segurança e diversão para você e seus convidados.
      </Paragraph>
      <Button
        href="https://wa.me/556798765432?text=Olá! Quero agendar uma locação."
        target="_blank"
        aria-label="Agendar agora pelo WhatsApp"
      >
        AGENDAR AGORA!
        <FaWhatsapp />
      </Button>
    </AgendarSectionContainer>
  );
};

export default AgendarSection;
