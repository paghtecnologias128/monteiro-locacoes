import { Background, Paragraph, SubTitle, Title, ContactSection, ContactButton } from './style';
import { GrLocation } from 'react-icons/gr';
import { FaWhatsapp } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

const HeroSection = () => {
  return (
    <Background>
      <Title>Transforme sua festa em um parque de diversão!</Title>
      <SubTitle>Alocações com qualidade e segurança</SubTitle>

      <Paragraph>
        <GrLocation color="var(--color-yellow)" aria-hidden="true" />
        <span>Campo Grande - MS</span>
      </Paragraph>

      <ContactSection>
        <ContactButton
          href="https://wa.me/556798765432"
          target="_blank"
          aria-label="Fale conosco pelo WhatsApp"
        >
          <FaWhatsapp color="var(--color-white)" />
          <span>WhatsApp</span>
        </ContactButton>

        <ContactButton href="tel:+556798765432" aria-label="Ligue para nós">
          <FaPhone color="var(--color-white)" />
          <span>(67) 9876-5432</span>
        </ContactButton>
      </ContactSection>
    </Background>
  );
};

export default HeroSection;
