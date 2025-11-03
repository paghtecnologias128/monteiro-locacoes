import React, { Suspense } from 'react';
import HeroSection from '../../components/HeroSection';
import ScrollAnimation from '../../components/ScrollAnimation';
import Spinner from '../../components/Spinner';

const Products = React.lazy(() => import('../../components/Products'));
const Footer = React.lazy(() => import('../../components/Footer'));

function Home() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<Spinner />}>
        <ScrollAnimation>
          <Products />
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
