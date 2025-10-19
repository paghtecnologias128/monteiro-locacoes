import { FooterContainer, FooterContent, Column, LogoColumn, ContactColumn } from './style';
import Logo from '../../assets/img - logo.svg';
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <h3>QUEM SOMOS?</h3>
          <p>Somos uma empresa que realiza alocações e leva diversão para você.</p>
        </Column>
        <LogoColumn>
          <img src={Logo} alt="Monteiro Locações Logo" />
        </LogoColumn>
        <ContactColumn>
          <h3>CONTATO</h3>
          <ul>
            <li>
              <FaWhatsapp aria-hidden="true" />
              <a
                href="https://wa.me/556798765432"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale conosco pelo WhatsApp"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <FaPhone aria-hidden="true" />
              <a href="tel:+556798765432" aria-label="Ligue para nós">
                (67) 9876-5432
              </a>
            </li>
            <li>
              <FaMapMarkerAlt aria-hidden="true" />
              <span aria-label="Endereço da Monteiro Locações">R. Guarapuava, 850</span>
            </li>
          </ul>
        </ContactColumn>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
