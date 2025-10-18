import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--color-footer-background);
  color: var(--color-white);
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
    padding: 2rem 1rem;
  }
`;

export const Column = styled.div`
  text-align: center;
  flex: 1;

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
  flex: 0.5;

  img {
    width: 150px;
    height: 150px;
  }
`;

export const ContactColumn = styled(Column)`
  text-align: left;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1rem;
    font-size: 1rem;
    text-transform: none;
    letter-spacing: normal;

    svg {
      color: var(--color-white);
      font-size: 1.5rem;
      transition: color 0.3s ease;
    }

    a, span {
      color: var(--color-white);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    &:hover {
      svg, a, span {
        color: var(--color-cyan);
      }
    }
  }
`;
