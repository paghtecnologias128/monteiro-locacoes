import styled from 'styled-components';

export const ContainerCard = styled.div`
  background-color: #fff;
  border: 2px solid #8FD1FF; /* Cor da borda: azul-claro #8FD1FF, Espessura: 2px, Estilo: sólido */
  border-radius: 12px; /* Canto levemente arredondado */
  box-shadow: 0 6px 18px rgba(0, 123, 255, 0.12); /* Sombra leve */
  padding: 1rem;
  text-align: center;
  transition: all 0.25s ease; /* Transição suave */

  &:hover {
    border-color: #5AB8FF; /* Escurecer a borda para #5AB8FF */
    transform: translateY(-2px); /* Elevar levemente o card */
    box-shadow: 0 10px 24px rgba(0, 123, 255, 0.18); /* Aumentar a sombra */
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 5px;
  }

  h2 {
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
