import styled from 'styled-components';

export const CTASection = styled.section`
  background-color: var(--color-dark-background);
  padding: 4rem 2rem;
`;

export const CTAContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 30px;
  border: 1px solid var(--color-cyan);
  border-radius: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(2rem, 6vw, 3rem);
  color: var(--color-white);
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Subtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: var(--color-white);
  font-weight: 300;
  line-height: 1.6;
  margin-top: 1.5rem;
  max-width: 900px;
  text-transform: none;
  letter-spacing: normal;
`;

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 2.5rem;
  padding: 15px 40px;
  background-color: transparent;
  border: 2px solid var(--color-white);
  border-radius: 50px;
  color: var(--color-white);
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: var(--color-cyan);
    border-color: var(--color-cyan);
    transform: scale(1.05);
  }

  svg {
    font-size: 1.5rem;
  }
`;
