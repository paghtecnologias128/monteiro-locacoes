import styled from 'styled-components';
import BackgroundImage from '../../assets/header_img.png';

export const Background = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${BackgroundImage}) center / cover no-repeat;
    filter: brightness(0.5);
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 10px; /* Ajusta o padding para telas menores */
  }
`;

export const Title = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(2.3rem, 7vw, 4rem);
  color: var(--color-white);
  font-weight: 700;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  margin-top: 250px;

  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;

export const SubTitle = styled.h2`
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: var(--color-white);
  font-weight: 300;
  margin-top: 1rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  text-transform: none;
  letter-spacing: normal;
`;

export const Paragraph = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 1rem;
  font-size: clamp(1rem, 3vw, 1.2rem);
  color: var(--color-white);

  span {
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  }
`;

export const ContactSection = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 3rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  gap: 10px;
  padding: 12px 25px;
  background-color: transparent;
  border: 1px solid var(--color-white);
  border-radius: 50px;
  color: var(--color-white);
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  text-decoration: none;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover,
  &:focus-visible {
    background-color: ${({ isWhatsapp }) =>
      isWhatsapp ? 'var(--color-green)' : 'var(--color-cyan)'};
    border-color: ${({ isWhatsapp }) => (isWhatsapp ? 'var(--color-green)' : 'var(--color-cyan)')};
    transform: scale(1.05);
  }

  svg {
    font-size: 1.3rem;
  }
`;
