
import { useGalleryModalStore, Category } from '../store/useGalleryModalStore';
import styled from 'styled-components'
import { SectionTitle, SectionSubtitle } from '../styles/GlobalStyles'


const GallerySection = styled.section`
  background: var(--gray-light);
`

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
`

const GalleryItem = styled.div`
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow);
  aspect-ratio: 1 / 1; /* Standardize to square aspect ratio */
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: var(--shadow-hover);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`



const Gallery: React.FC = () => {
  const { openModal } = useGalleryModalStore();
  

  const galleryImages = [
    {
      src: '/images/Pula pula Grande 3,5m.jpg',
      alt: 'Pula Pula em festa infantil',
      height: '300px'
    },
    {
      src: '/images/Pula pula Médio 2,44m.jpg',
      alt: 'Piscina de bolinhas colorida',
      height: '250px'
    },
    {
      src: '/images/Pula pula Pequeno 1,40m.jpg',
      alt: 'Crianças brincando no playground',
      height: '350px'
    },
    {
      src: '/images/Pula pula Super - Grande 4,27m.jpg',
      alt: 'Escorregador infantil colorido',
      height: '280px'
    },
    {
      src: '/images/Pula pula Grande 3,5m.jpg',
      alt: 'Pula Pula grande para festa',
      height: '320px'
    },
    {
      src: '/images/Pula pula Médio 2,44m.jpg',
      alt: 'Área de bolinhas para crianças',
      height: '260px'
    },
    {
      src: '/images/Pula pula Pequeno 1,40m.jpg',
      alt: 'Playground completo',
      height: '300px'
    },
    {
      src: '/images/Pula pula Grande 3,5m.jpg',
      alt: 'Mesa e cadeiras para festa',
      height: '240px'
    },
    {
      src: '/images/Pula pula Médio 2,44m.jpg',
      alt: 'Brinquedos coloridos para festa',
      height: '290px'
    }
  ]

  const handleImageClick = (index: number) => {
    const category: Category = {
      id: 'gallery',
      titulo: 'Galeria de Fotos',
      imagens: galleryImages.map(img => img.src),
      descricao: '',
      icon: '🖼️',
    };
    openModal(category, galleryImages[index].src);
  };

  

  return (
    <GallerySection id="galeria" className="section-padding">
      <div className="container">
        <SectionTitle data-aos="fade-up">
          Galeria de Fotos
        </SectionTitle>
        
        <SectionSubtitle data-aos="fade-up" data-aos-delay="100">
          Veja alguns momentos especiais proporcionados pelos nossos brinquedos
        </SectionSubtitle>
        
        <GalleryGrid>
          {galleryImages.map((image, index) => (
            <GalleryItem 
              key={index}
              onClick={() => handleImageClick(index)}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                loading="lazy"
              />
            </GalleryItem>
          ))}
        </GalleryGrid>
      </div>

      
    </GallerySection>
  )
}

export default Gallery
