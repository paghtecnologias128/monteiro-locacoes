import { FooterContainer, Column, LogoColumn, ContactColumn } from './style';
import Logo from '../../assets/img - logo.svg';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const FooterMonteiro = () => {
  return (
    <FooterContainer>
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
            <FaWhatsapp />
            <a href="https://wa.me/556798765432" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </li>
          <li>
            <FaPhone />
            <a href="tel:+556798765432">(67) 9876-5432</a>
          </li>
          <li>
            <FaMapMarkerAlt />
            <span>R. Guarapuava, 850</span>
          </li>
        </ul>
      </ContactColumn>
    </FooterContainer>
  );
};

export default FooterMonteiro;
