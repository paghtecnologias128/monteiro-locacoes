import { CTASection, CTAContainer, Title, Subtitle, CTAButton } from './style';
import { FaWhatsapp } from 'react-icons/fa';

const CTA = () => {
  return (
    <CTASection>
      <CTAContainer>
        <Title>APROVEITE E AGENDE!</Title>
        <Subtitle>
          Valorizamos sua festa com o objetivo de tornar esse momento inesquecível. Monitores treinados garantem segurança e diversão para você e seus convidados.
        </Subtitle>
        <CTAButton href="https://wa.me/556798765432" target="_blank">
          AGENDAR AGORA!
          <FaWhatsapp />
        </CTAButton>
      </CTAContainer>
    </CTASection>
  );
};

export default CTA;
