import styled from 'styled-components';

export const ContainerCard = styled.div`
  background-color: #fff;
  border: 1px solid var(--color-cyan);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 5px;
  }

  h1 {
    font-size: 1.5rem;
    color: var(--color-cyan);
    margin-top: 1rem;
    font-weight: 700;
  }
`;

export const Sizes = styled.p`
  font-size: 0.9rem;
  color: var(--color-cyan);
  margin-top: 0.5rem;
  text-transform: none;
  letter-spacing: normal;
`;
