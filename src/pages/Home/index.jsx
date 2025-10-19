import React, { Suspense } from 'react';
import HeroSection from '../../components/HeroSection';
import ScrollAnimation from '../../components/ScrollAnimation';

const Products = React.lazy(() => import('../../components/Products'));
const BookingSection = React.lazy(() => import('../../components/BookingSection'));
const Footer = React.lazy(() => import('../../components/Footer'));

import { cardsData } from '../../data/products';

function Home() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<div>Carregando produtos...</div>}>
        <ScrollAnimation>
          <Products cards={cardsData} />
        </ScrollAnimation>
      </Suspense>
      <Suspense fallback={<div>Carregando seção de agendamento...</div>}>
        <ScrollAnimation>
          <BookingSection />
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

export default Home;
