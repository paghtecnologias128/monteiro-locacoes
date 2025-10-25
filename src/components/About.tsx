
import React from 'react'
import styled from 'styled-components'
import { SectionTitle, SectionSubtitle } from '../styles/GlobalStyles'
import { FaShieldHalved, FaClock, FaSprayCan } from 'react-icons/fa6'

const AboutSection = styled.section`
  background: var(--gray-light);
`

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const AboutText = styled.div`
  h3 {
    font-size: 1.8rem;
    color: var(--dark-blue);
    margin-bottom: 1.5rem;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--gray-medium);
    margin-bottom: 1.5rem;
  }
`

const AboutImage = styled.div`
  img {
    width: 100%;
    border-radius: 20px;
    box-shadow: var(--shadow);
  }
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FeatureCard = styled.div`
  background: var(--white);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
  }
  
  .icon {
    font-size: 3rem;
    color: var(--primary-blue);
    margin-bottom: 1rem;
  }
  
  h4 {
    font-size: 1.3rem;
    color: var(--dark-blue);
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--gray-medium);
    line-height: 1.6;
  }
`

const About: React.FC = () => {
  return (
    <AboutSection id="sobre" className="section-padding">
      <div className="container">
        <SectionTitle data-aos="fade-up">
          Sobre a Monteiro Locações
        </SectionTitle>
        
        <SectionSubtitle data-aos="fade-up" data-aos-delay="100">
          Transformando eventos em momentos inesquecíveis há anos
        </SectionSubtitle>
        
        <AboutContent>
          <AboutText data-aos="fade-right">
            <h3>Nossa História</h3>
            <p>
              Fundada com o objetivo de levar alegria e diversão para eventos especiais, 
              a Monteiro Locações se especializou em oferecer brinquedos seguros e de 
              alta qualidade para festas infantis e eventos familiares.
            </p>
            <p>
              Nossa missão é proporcionar momentos únicos de felicidade, sempre 
              priorizando a segurança das crianças e a tranquilidade dos pais. 
              Cada brinquedo passa por rigorosa inspeção e higienização antes 
              de cada locação.
            </p>
            <p>
              Com anos de experiência no mercado, nos tornamos referência em 
              Campo Grande - MS, atendendo com pontualidade, qualidade e 
              o melhor atendimento ao cliente.
            </p>
          </AboutText>
          
          <AboutImage data-aos="fade-left">
            <img 
              src="https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg" 
              alt="Crianças brincando em festa infantil"
              loading="lazy"
            />
          </AboutImage>
        </AboutContent>
        
        <FeaturesGrid>
          <FeatureCard data-aos="zoom-in" data-aos-delay="100">
            <FaShieldHalved className="icon" />
            <h4>Segurança</h4>
            <p>
              Todos os brinquedos passam por inspeção rigorosa e atendem às 
              normas de segurança. Sua diversão com total tranquilidade.
            </p>
          </FeatureCard>
          
          <FeatureCard data-aos="zoom-in" data-aos-delay="200">
            <FaClock className="icon" />
            <h4>Pontualidade</h4>
            <p>
              Entrega e retirada sempre no horário combinado. Respeitamos 
              seu tempo e o cronograma do seu evento.
            </p>
          </FeatureCard>
          
          <FeatureCard data-aos="zoom-in" data-aos-delay="300">
            <FaSprayCan className="icon" />
            <h4>Higienização</h4>
            <p>
              Higienização completa antes de cada locação com produtos 
              seguros e eficazes. Saúde em primeiro lugar.
            </p>
          </FeatureCard>
        </FeaturesGrid>
      </div>
    </AboutSection>
  )
}

export default About