import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
import styled, { css } from "styled-components";
import { Combo, Category } from "../store/useModalStore";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaWhatsapp,
} from "react-icons/fa";

const ModalOverlay = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isOpen", "variant"].includes(prop),
})<{ $isOpen: boolean; variant: 'gallery' | 'service' }>`
  position: fixed;
  inset: 0;
  background: ${(props) =>
    props.variant === "service" ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.8)"};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 16px;
  transition: all 0.3s ease-in-out;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
`;

const ModalContent = styled.div<{ $variant: 'gallery' | 'service' }>`
  ${({ $variant }) =>
    $variant === "service"
      ? css`
          background: var(--white);
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          width: 100%;
          max-width: 900px;
          position: relative;
        `
      : css`
          display: contents;
        `}
`;



const CloseButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "variant",
})<{ variant: 'gallery' | 'service' }>`
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) =>
    props.variant === "service" ? "var(--white)" : "rgba(255, 255, 255, 0.1)"};
  color: ${(props) =>
    props.variant === "service" ? "var(--primary-blue)" : "var(--white)"};
  font-size: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10001;
  backdrop-filter: blur(10px);

  &:hover {
    background: ${(props) =>
      props.variant === "service"
        ? "var(--gray-light)"
        : "rgba(255, 255, 255, 0.2)"};
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.95);
    background: ${(props) =>
      props.variant === "service"
        ? "var(--gray-medium)"
        : "rgba(255, 255, 255, 0.3)"};
  }
`;

const ModalBody = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "variant",
})<{ variant: 'gallery' | 'service' }>`
  padding: ${(props) => (props.variant === "service" ? "2rem" : "0")};
`;

const CarouselContainer = styled.div`
`;

const CarouselMain = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CarouselImage = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== "variant",
})<{ variant: 'gallery' | 'service' }>`
  max-width: ${(props) => (props.variant === "service" ? "100%" : "90vw")};
  max-height: ${(props) => (props.variant === "service" ? "50vh" : "80vh")};
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: ${(props) => (props.variant === "service" ? "12px" : "10px")};
  display: block;
  margin: 0 auto;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  color: var(--dark-blue);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--white);
    box-shadow: var(--shadow);
  }
  &:active {
    transform: translateY(-50%) scale(0.95);
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  &.prev {
    left: 2rem;
  }

  &.next {
    right: 2rem;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;

const Thumbnails = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.5rem 0;

  &::-webkit-scrollbar {
    height: 4px;
  }
`;

const Thumbnail = styled.img.withConfig({
  shouldForwardProp: (prop) => !["active"].includes(prop),
})<{ $active: boolean }>`
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid
    ${(props) => (props.$active ? "var(--primary-blue)" : "transparent")};
  opacity: ${(props) => (props.$active ? 1 : 0.7)};

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 45px;
  }
`;

const OptionsSection = styled.div`
  margin-bottom: 2rem;

  h3 {
    font-size: 1.2rem;
    color: var(--dark-blue);
    margin-bottom: 1rem;
  }
`;

const OptionsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const OptionChip = styled.button<{ selected: boolean }>`
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid
    ${(props) => (props.selected ? "var(--primary-blue)" : "var(--gray-light)")};
  background: ${(props) =>
    props.selected ? "var(--primary-blue)" : "var(--white)"};
  color: ${(props) => (props.selected ? "var(--white)" : "var(--dark-blue)")};

  &:hover {
    border-color: var(--primary-blue);
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`;

const Description = styled.div`
  margin-bottom: 2rem;

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--gray-medium);
  }
`;

const CombosSection = styled.div`
  margin-bottom: 2rem;

  h3 {
    font-size: 1.2rem;
    color: var(--dark-blue);
    margin-bottom: 1rem;
  }
`;

const ComboCard = styled.div`
  border: 1px solid var(--gray-light);
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;

  h4 {
    color: var(--primary-blue);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--gray-medium);
    font-size: 0.95rem;
  }
`;

const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

interface ModalProps {
  store: {
    isOpen: boolean;
    activeCategory: Category | null;
    selectedOption: string;
    closeModal: () => void;
    setSelectedOption: (option: string) => void;
  };
  variant: 'gallery' | 'service';
}

const Modal: React.FC<ModalProps> = ({ store, variant }) => {
  const {
    isOpen,
    activeCategory,
    selectedOption,
    closeModal,
    setSelectedOption,
  } = store;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const images = useMemo(() => activeCategory?.imagens || [], [activeCategory]);

  useEffect(() => {
    if (isOpen && images.length > 0) {
      const initialIndex = images.findIndex((img) => img === selectedOption);
      setCurrentImageIndex(initialIndex !== -1 ? initialIndex : 0);
      // Focus trap
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);

      // Prevent body scroll
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, images, selectedOption]);

  const handlePrevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          e.preventDefault();
          handlePrevImage();
          break;
        case "ArrowRight":
          e.preventDefault();
          handleNextImage();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal, handleNextImage, handlePrevImage]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleWhatsAppClick = () => {
    let message = "Olá! Quero orçamento";

    if (activeCategory?.id === "combos") {
      message += ` do ${selectedOption} para [data/local].`;
    } else if (selectedOption) {
      message += ` do ${activeCategory?.titulo} ${selectedOption} para [data/local].`;
    } else {
      message += ` do ${activeCategory?.titulo} para [data/local].`;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5567981396452?text=${encodedMessage}`, "_blank");
  };

  if (!isOpen || !activeCategory) return null;

  return (
    <ModalOverlay $isOpen={isOpen} onClick={handleOverlayClick} variant={variant}>
      <CloseButton
        ref={closeButtonRef}
        onClick={closeModal}
        aria-label="Fechar modal"
        variant={variant}
      >
        <FaTimes />
      </CloseButton>
      <ModalContent ref={modalRef} role="dialog" aria-modal="true" $variant={variant}>
        

        <ModalBody variant={variant}>
          {images.length > 0 && (
            <CarouselContainer>
              <CarouselMain>
                <CarouselImage
                  src={images[currentImageIndex]}
                  alt={`${activeCategory.titulo} - Imagem ${
                    currentImageIndex + 1
                  }`}
                  variant={variant}
                />

                {images.length > 1 && (
                  <>
                    <CarouselButton
                      className="prev"
                      onClick={handlePrevImage}
                      aria-label="Imagem anterior"
                    >
                      <FaChevronLeft />
                    </CarouselButton>
                    <CarouselButton
                      className="next"
                      onClick={handleNextImage}
                      aria-label="Próxima imagem"
                    >
                      <FaChevronRight />
                    </CarouselButton>
                  </>
                )}
              </CarouselMain>

              {images.length > 1 && (
                <Thumbnails>
                  {images.map((image: string, index: number) => (
                    <Thumbnail
                      key={index}
                      src={image}
                      alt={`Miniatura ${index + 1}`}
                      $active={index === currentImageIndex}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </Thumbnails>
              )}
            </CarouselContainer>
          )}

                    {activeCategory.id !== 'gallery' && (
            <>
              <Description>
                <p>{activeCategory.descricao}</p>
              </Description>

              {activeCategory.id === 'combos' ? (
                <CombosSection>
                  <h3>Opções Disponíveis:</h3>
                  {activeCategory.combos?.map((combo: Combo) => (
                    <ComboCard key={combo.nome}>
                      <h4>{combo.nome}</h4>
                      <p>{combo.descricao}</p>
                    </ComboCard>
                  ))}
                </CombosSection>
              ) : (
                activeCategory.opcoes && (
                  <OptionsSection>
                    <h3>Opções Disponíveis:</h3>
                    <OptionsGrid>
                      {activeCategory.opcoes.map((opcao: string) => (
                        <OptionChip
                          key={opcao}
                          selected={selectedOption === opcao}
                          onClick={() => setSelectedOption(opcao)}
                        >
                          {opcao}
                        </OptionChip>
                      ))}
                    </OptionsGrid>
                  </OptionsSection>
                )
              )}

              <ModalActions>
                <button
                  className="inline-flex items-center justify-center gap-2 font-poppins font-semibold rounded-full transition-all duration-300 ease-in-out border-2 border-transparent text-white bg-whatsapp py-3 px-6 text-lg hover:bg-whatsapp-dark hover:shadow-shadow-hover active:bg-whatsapp-dark active:shadow-inner"
                  onClick={handleWhatsAppClick}
                >
                  <FaWhatsapp />
                  Solicitar orçamento no WhatsApp
                </button>

                <button
                  className="inline-flex items-center justify-center gap-2 font-poppins font-semibold rounded-full transition-all duration-300 ease-in-out border-2 border-primary-blue text-primary-blue bg-transparent py-3 px-6 text-lg hover:bg-primary-blue hover:text-white hover:shadow-shadow-hover active:bg-dark-blue active:border-dark-blue active:text-white active:shadow-none"
                  onClick={closeModal}
                >
                  Fechar
                </button>
              </ModalActions>
            </>
          )}
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
