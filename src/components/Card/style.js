import styled from 'styled-components';

export const ContainerCard = styled.div`
  background-color: #fff;
  border: 2px solid #37b1f8; /* Cor da borda: azul-claro #37B1F8, Espessura: 2px, Estilo: sólido */
  border-radius: 30px; /* Canto levemente arredondado */
  box-shadow: 0 4px 8px 0 #37b1f859; /* Sombra azul especificada */
  padding: 1rem;
  text-align: center;
  transition: all 0.25s ease; /* Transição suave */

  &:hover {
    border-color: #37b1f8; /* Escurecer a borda para #37B1F8 */
    transform: translateY(-2px); /* Elevar levemente o card */
    box-shadow: 0 8px 16px 0 #37b1f873; /* Aumentar a sombra no hover */
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 25px;
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
