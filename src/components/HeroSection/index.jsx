import { Background, Paragraph, SubTitle, Title, ContactSection, ContactButton } from './style';
import { GrLocation } from 'react-icons/gr';
import { FaWhatsapp } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

const HeroSection = () => {
  return (
    <Background role="region" aria-labelledby="hero-title">
      <Title id="hero-title">
        Transforme sua festa em <br />
        um parque de diversão!
      </Title>
      <SubTitle>Alocações com qualidade e segurança</SubTitle>

      <Paragraph>
        <GrLocation color="var(--color-yellow)" aria-hidden="true" />
        <span>Campo Grande - MS</span>
      </Paragraph>

      <ContactSection>
        <ContactButton
          href="https://wa.me/5567984684460"
          target="_blank"
          aria-label="Fale conosco pelo WhatsApp"
          $isWhatsapp
        >
          <FaWhatsapp color="var(--color-white)" />
          <span>WhatsApp</span>
        </ContactButton>

        <ContactButton href="tel:+5567984684460" aria-label="Ligue para nós">
          <FaPhone color="var(--color-white)" />
          <span>(67) 9 8468-4460</span>
        </ContactButton>
      </ContactSection>
    </Background>
  );
};

export default HeroSection;
