import { Background, Paragraph, SubTitle, Title, ContactSection, ContactButton } from "./style";
import { GrLocation } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Header = () => {
  return (
    <Background>
      <Title>Transforme sua festa em um parque de diversão!</Title>
      <SubTitle>Alocações com qualidade e segurança</SubTitle>

      <Paragraph>
        <GrLocation color="#FFD700"/>
        <span>Campo Grande - MS</span>
      </Paragraph>

      <ContactSection>
        <ContactButton href="https://wa.me/556798765432" target="_blank">
            <FaWhatsapp color="#25D366"/>
            <span>WhatsApp</span>
        </ContactButton>

        <ContactButton href="tel:+556798765432">
            <FaPhone color="#fff"/>
            <span>(67) 9876-5432</span>
        </ContactButton>
      </ContactSection>
    </Background>
  );
};

export default Header;

