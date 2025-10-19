import React, { Suspense } from 'react';
import HeroSection from './components/HeroSection';
import ScrollAnimation from './components/ScrollAnimation'; // Added import
import { GlobalStyle } from './styles/global.js';

// Lazy loaded components
const Produtos = React.lazy(() => import('./components/Produtos'));
const AgendarSection = React.lazy(() => import('./components/AgendarSection'));
const Footer = React.lazy(() => import('./components/Footer'));

// 1. Importe as imagens que você vai usar
import barracaBolinha from './assets/barraca_bolinha.png';
import cadeiras from './assets/cadeiras.png';
import comboFesta from './assets/combo_festa.png';
import pinturaFacil from './assets/pintura_facil.png';
import piscinaBolinha from './assets/piscina_bolinha.png';
import pulaPula from './assets/pula_pula.png';

// 2. Crie uma lista (array) com os dados de cada card
const cardsData = [
  {
    id: 1,
    image: piscinaBolinha,
    title: 'Piscina de Bolinhas',
    alt: 'Piscina de Bolinhas colorida com escorregador.',
  },
  {
    id: 2,
    image: pulaPula,
    title: 'Pula-Pula',
    alt: 'Pula-pula inflável com redes de proteção.',
  },
  {
    id: 3,
    image: barracaBolinha,
    title: 'Barra de Bolinhas',
    alt: 'Barraca de bolinhas inflável com tema de circo.',
  },
  {
    id: 4,
    image: cadeiras,
    title: 'Mesas + Cadeiras',
    alt: 'Conjunto de mesas e cadeiras de plástico brancas.',
  },
  {
    id: 5,
    image: pinturaFacil,
    title: 'Pintura Facial',
    alt: 'Criança com o rosto pintado de borboleta.',
  },
  {
    id: 6,
    image: comboFesta,
    title: 'Combo Festa',
    alt: 'Imagem com vários brinquedos de festa juntos.',
  },
];

function App() {
  return (
    <>
      <GlobalStyle />
      <HeroSection />
      <Suspense fallback={<div>Carregando produtos...</div>}>
        <ScrollAnimation>
          <Produtos cards={cardsData} />
        </ScrollAnimation>
      </Suspense>
      <Suspense fallback={<div>Carregando seção de agendamento...</div>}>
        <ScrollAnimation>
          <AgendarSection />
        </ScrollAnimation>
      </Suspense>
      <Suspense fallback={<div>Carregando rodapé...</div>}>
        <ScrollAnimation>
          <Footer />
        </ScrollAnimation>
      </Suspense>
    </>
  );
}

export default App;
