import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--color-footer-background);
  color: var(--color-white);
  padding: 2rem 4rem;
  display: grid;
  place-items: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }

  @media (max-width: 480px) {
    gap: 2rem; /* Further reduce gap on very small screens */
  }
`;

export const Column = styled.div`
  text-align: center;
  width: 33%;

  @media (max-width: 768px) {
    width: 100%;
  }

  h3 {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.6;
    text-transform: none;
    letter-spacing: normal;
  }
`;

export const LogoColumn = styled(Column)`
  img {
    width: 150px;
    height: 150px;
    display: block;
    margin: 0 auto;
  }
`;

export const ContactColumn = styled(Column)`
  text-align: center;

  ul {
    list-style: none;
    padding: 0;
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
  font-size: 1rem;
  text-transform: none;
  letter-spacing: normal;
  justify-content: center;

  svg {
    color: var(--color-white);
    font-size: 24px;
    transition: color 0.3s ease;
  }

  a,
  span {
    color: var(--color-white);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  &:hover,
  &:focus-visible {
    svg,
    a,
    span {
      color: ${({ $isWhatsapp, $isLocation }) =>
        $isWhatsapp
          ? 'var(--color-green)'
          : $isLocation
            ? 'var(--color-yellow-lima)'
            : 'var(--color-cyan)'};
    }
  }
`;
