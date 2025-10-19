import React, { Suspense } from 'react';
import HeroSection from './components/HeroSection';
import ScrollAnimation from './components/ScrollAnimation'; // Added import
import { GlobalStyle } from './styles/global.js';

// Lazy loaded components
const Produtos = React.lazy(() => import('./components/Produtos'));
const AgendarSection = React.lazy(() => import('./components/AgendarSection'));
const Footer = React.lazy(() => import('./components/Footer'));

// Importe os dados dos cards
import { cardsData } from './data/products';

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
