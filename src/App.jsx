import HeroSection from './components/HeroSection';
import Produtos from './components/Produtos';
import Agendar from './components/Agendar';
import Footer from './components/Footer';
import ScrollAnimation from './components/ScrollAnimation';
import { GlobalStyle } from './styles/global.js';

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
  },
  {
    id: 2,
    image: pulaPula,
    title: 'Pula-Pula',
  },
  {
    id: 3,
    image: barracaBolinha,
    title: 'Barra de Bolinhas',
  },
  {
    id: 4,
    image: cadeiras,
    title: 'Mesas + Cadeiras',
  },
  {
    id: 5,
    image: pinturaFacil,
    title: 'Pintura Facial',
  },
  {
    id: 6,
    image: comboFesta,
    title: 'Combo Festa',
  },
];

function App() {
  return (
    <>
      <GlobalStyle />
      <HeroSection />
      <ScrollAnimation>
        <Produtos cards={cardsData} />
      </ScrollAnimation>
      <ScrollAnimation>
        <Agendar />
      </ScrollAnimation>
      <ScrollAnimation>
        <Footer />
      </ScrollAnimation>
    </>
  );
}

export default App;