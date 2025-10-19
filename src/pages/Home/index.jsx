import React, { Suspense } from 'react';
import HeroSection from '../../components/HeroSection';
import ScrollAnimation from '../../components/ScrollAnimation';
import Spinner from '../../components/Spinner';

const Products = React.lazy(() => import('../../components/Products'));
const BookingSection = React.lazy(() => import('../../components/BookingSection'));
const Footer = React.lazy(() => import('../../components/Footer'));

import { cardsData } from '../../data/products';

function Home() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<Spinner />}>
        <ScrollAnimation>
          <Products cards={cardsData} />
        </ScrollAnimation>
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <ScrollAnimation>
          <BookingSection />
        </ScrollAnimation>
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <ScrollAnimation>
          <Footer />
        </ScrollAnimation>
      </Suspense>
    </>
  );
}

export default Home;
