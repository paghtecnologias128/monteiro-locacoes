import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SectionTitle, SectionSubtitle } from "../styles/GlobalStyles";
import { useServicesModalStore } from "../store/useServicesModalStore";
import { Categoria, Combo } from "../types/catalogo";

const ServicesSection = styled.section`
  background: var(--white);
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: var(--white);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
    border-color: var(--primary-blue);
  }

  &:active {
    transform: translateY(-5px) scale(0.98);
    box-shadow: var(--shadow);
  }
`;

const ServiceImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 38, 60, 0.1) 100%
    );
  }
`;

const ServiceContent = styled.div`
  padding: 1.5rem;

  .icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.3rem;
    color: var(--dark-blue);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--gray-medium);
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .options {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    span {
      background: var(--gray-light);
      color: var(--dark-blue);
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 500;
    }
  }
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: var(--dark-blue);
  padding: 2rem 0;
`;

const ErrorMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: var(--red);
  padding: 2rem 0;
`;

const Services: React.FC = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { openModal } = useServicesModalStore();

  useEffect(() => {
    const loadCatalogo = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/catalogo.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCategorias(data.categorias);
      } catch (err) {
        console.error("Erro ao carregar catálogo:", err);
        setError(
          "Não foi possível carregar os serviços. Tente novamente mais tarde."
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadCatalogo();
  }, []);

  const handleCardClick = (categoria: Categoria) => {
    openModal(categoria);
  };

  const renderOptions = (categoria: Categoria) => {
    if (categoria.id === "combos") {
      return (
        categoria.combos
          ?.slice(0, 3)
          .map((combo: Combo) => <span key={combo.nome}>{combo.nome}</span>) ||
        []
      );
    }

    return (
      categoria.opcoes
        ?.slice(0, 3)
        .map((opcao: string) => <span key={opcao}>{opcao}</span>) || []
    );
  };

  return (
    <ServicesSection id="servicos" className="section-padding">
      <div className="container">
        <SectionTitle data-aos="fade-up">Nossos Serviços</SectionTitle>

        <SectionSubtitle data-aos="fade-up" data-aos-delay="100">
          Diversão completa para todas as idades. Clique em cada categoria para
          ver mais detalhes.
        </SectionSubtitle>

        {isLoading && <LoadingMessage>Carregando serviços...</LoadingMessage>}
        {error && <ErrorMessage>{error}</ErrorMessage>}

        {!isLoading && !error && categorias.length === 0 && (
          <LoadingMessage>Nenhum serviço disponível no momento.</LoadingMessage>
        )}

        {!isLoading && !error && categorias.length > 0 && (
          <ServicesGrid>
            {categorias.map((categoria, index) => (
              <ServiceCard
                key={categoria.id}
                onClick={() => handleCardClick(categoria)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <ServiceImage
                  style={{
                    backgroundImage: `url(${
                      categoria.imagens?.[0] ||
                      "https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg"
                    })`,
                  }}
                />

                <ServiceContent>
                  <div className="icon">{categoria.icon}</div>
                  <h3>{categoria.titulo}</h3>
                  <p>{categoria.descricao}</p>

                  <div className="options">
                    {renderOptions(categoria)}
                    {((categoria.opcoes && categoria.opcoes.length > 3) ||
                      (categoria.combos && categoria.combos.length > 3)) && (
                      <span>+ mais opções</span>
                    )}
                  </div>
                </ServiceContent>
              </ServiceCard>
            ))}
          </ServicesGrid>
        )}
      </div>
    </ServicesSection>
  );
};

export default Services;
