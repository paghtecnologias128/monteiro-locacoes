import styled, { css } from 'styled-components';

export const ContainerCard = styled.div`
  background-color: #fff;
  border: 2px solid #37b1f8;
  border-radius: 30px;
  padding: 1rem;
  text-align: center;
  transition: all 0.25s ease;

  ${({ isSelected }) =>
    isSelected &&
    css`
      box-shadow: 0 8px 16px 0 #37b1f873;
    `}

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

export const OptionsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

export const OptionButton = styled.button`
  background-color: ${({ isSelected }) => (isSelected ? 'var(--color-green)' : '#f0f0f0')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#333')};
  border: 1px solid ${({ isSelected }) => (isSelected ? 'var(--color-green)' : '#ccc')};
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? 'var(--color-green)' : '#e0e0e0')};
    border-color: ${({ isSelected }) => (isSelected ? 'var(--color-green)' : '#aaa')};
  }
`;

export const Sizes = styled.p`
  font-size: 0.9rem;
  color: var(--color-cyan);
  margin-top: 0.5rem;
  text-transform: none;
  letter-spacing: normal;
`;
