import React from "react";
import styled from "styled-components";
import { Button } from "../styles/GlobalStyles";
import { FaWhatsapp, FaPlay } from "react-icons/fa";

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 38, 60, 0.7), rgba(0, 176, 240, 0.3)),
    url("https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--white);
  position: relative;

  @media (max-width: 768px) {
    background-attachment: scroll;
    padding: 100px 0 50px;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const WhatsAppButton = styled(Button)`
  background: var(--whatsapp);

  &:hover {
    background: #128c7e;
    transform: translateY(-2px) scale(1.05);
  }
`;

const Hero: React.FC = () => {
  const handleServicesClick = () => {
    const element = document.querySelector("#servicos");
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Quero um orçamento.");
    window.open(`https://wa.me/5567981396452?text=${message}`, "_blank");
  };

  return (
    <HeroSection id="inicio">
      <div className="max-w-6xl mx-auto px-5 md:px-4">
        <HeroContent>
          <HeroTitle data-aos="fade-up" data-aos-duration="1000">
            🎉 Diversão garantida para todas as idades!
          </HeroTitle>

          <HeroSubtitle
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Monteiro Locações — alegria com segurança para o seu evento.
          </HeroSubtitle>

          <HeroButtons
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <Button size="large" onClick={handleServicesClick}>
              <FaPlay />
              Conheça nossos serviços
            </Button>

            <WhatsAppButton
              $variant="ghost"
              size="large"
              onClick={handleWhatsAppClick}
            >
              <FaWhatsapp />
              Fale no WhatsApp
            </WhatsAppButton>
          </HeroButtons>
        </HeroContent>
      </div>
    </HeroSection>
  );
};

export default Hero;
