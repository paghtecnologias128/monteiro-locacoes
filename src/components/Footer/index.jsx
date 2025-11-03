import { FooterContainer, FooterContent, Column, LogoColumn, ContactColumn, Li } from './style';
import Logo from '../../assets/img-logo.svg';
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <h3>QUEM SOMOS?</h3>
          <p>
            Oferecemos brinquedos seguros e de alta qualidade para festas, garantindo a diversão das
            crianças e a tranquilidade dos pais.
          </p>
        </Column>
        <LogoColumn>
          <img src={Logo} alt="Monteiro Locações Logo" />
        </LogoColumn>
        <ContactColumn>
          <h3>CONTATO</h3>
          <ul>
            <Li $isWhatsapp>
              <FaWhatsapp aria-hidden="true" />
              <a
                href="https://wa.me/5567984684460"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale conosco pelo WhatsApp"
              >
                WhatsApp
              </a>
            </Li>
            <Li>
              <FaPhone aria-hidden="true" />
              <a href="tel:+5567984684460" aria-label="Ligue para nós">
                (67) 98468-4460
              </a>
            </Li>
            <Li $isLocation>
              <FaMapMarkerAlt aria-hidden="true" />
              <span aria-label="Endereço da Monteiro Locações">R. Guarapuava, 850</span>
            </Li>
          </ul>
        </ContactColumn>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
