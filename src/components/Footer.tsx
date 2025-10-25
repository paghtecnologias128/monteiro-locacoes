
import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaWhatsapp, FaEnvelope, FaHeart } from 'react-icons/fa'

const FooterContent = styled.div`
  margin-bottom: 2rem;
`

const Logo = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 2rem;
  margin-bottom: 1rem;
  
  span {
    color: var(--primary-blue);
  }
`

const FooterDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: var(--white);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary-blue);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 176, 240, 0.3);
  }
  
  &.whatsapp:hover {
    background: var(--whatsapp);
  }
`

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  
  p {
    margin: 0;
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
  
  .heart {
    color: var(--red);
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-blue text-white text-center py-12 px-0">
      <div className="max-w-6xl mx-auto px-5 md:px-4">
        <FooterContent>
          <Logo data-aos="fade-up">
            Monteiro <span className="text-primary-blue">Locações</span>
          </Logo>
          
          <FooterDescription data-aos="fade-up" data-aos-delay="100">
            Transformando eventos em momentos inesquecíveis com diversão, segurança e qualidade.
          </FooterDescription>
          
          <SocialLinks data-aos="fade-up" data-aos-delay="200">
            <SocialLink 
              href="https://wa.me/5567981396452" 
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </SocialLink>
            
            <SocialLink 
              href="https://instagram.com/monteirolocacoes" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialLink>
            
            <SocialLink 
              href="mailto:contato@monteirolocacoes.com.br"
              aria-label="E-mail"
            >
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
        </FooterContent>
        
        <FooterBottom data-aos="fade-up" data-aos-delay="300">
          <p className="flex items-center justify-center gap-2 flex-wrap text-opacity-80 md:text-sm">
            © 2025 Monteiro Locações — Todos os direitos reservados.
            <span>Feito com</span>
            <FaHeart className="text-red animate-pulse-slow" /> {/* Assuming pulse-slow is custom Tailwind animation or defining pulse animation as in GlobalStyles */}
            <span>em Campo Grande - MS</span>
          </p>
        </FooterBottom>
      </div>
    </footer>
  )
}

export default Footer
