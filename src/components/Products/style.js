import styled from 'styled-components';

export const CatalogSection = styled.section`
  padding: 4rem 2rem;
  background-color: var(--color-background);

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Subtitle = styled.p`
  color: var(--color-yellow);
  font-size: clamp(1rem, 4vw, 1.2rem);
  font-family: var(--font-main);
  text-transform: none;
  letter-spacing: normal;
`;

export const Title = styled.h2`
  color: var(--color-cyan);
  font-size: clamp(2rem, 6vw, 3rem);
  font-family: var(--font-main);
  font-weight: 700;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto 0 auto;
`;
