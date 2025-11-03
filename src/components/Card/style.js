import styled, { css } from 'styled-components';

export const ContainerCard = styled.div`
  background-color: #fff;
  border: 2px solid ${({ $isMissingOption }) => ($isMissingOption ? 'var(--color-red)' : '#37b1f8')};
  border-radius: 30px;
  padding: 1rem;
  text-align: center;
  transition: all 0.25s ease;

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      box-shadow: 0 8px 16px 0 #37b1f873;
    `}
`;

export const CarouselBox = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
`;

export const CarouselSlider = styled.div`
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: ${({ $currentIndex }) => `translateX(-${$currentIndex * 100}%)`};
`;

export const CarouselImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  flex-shrink: 0;
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 0.8rem;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease, opacity 0.2s ease;
  opacity: 0.9;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    opacity: 1;
  }

  ${({ direction }) =>
    direction === 'prev'
      ? css`
          left: 10px;
        `
      : css`
          right: 10px;
        `}
`;

export const OptionsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

export const OptionButton = styled.button`
  background-color: ${({ $isSelected }) => ($isSelected ? 'var(--color-green)' : '#f0f0f0')};
  color: ${({ $isSelected }) => ($isSelected ? '#fff' : '#333')};
  border: 1px solid ${({ $isSelected }) => ($isSelected ? 'var(--color-green)' : '#ccc')};
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ $isSelected }) => ($isSelected ? 'var(--color-green)' : '#e0e0e0')};
    border-color: ${({ $isSelected }) => ($isSelected ? 'var(--color-green)' : '#aaa')};
  }
`;

export const Sizes = styled.p`
  font-size: 0.9rem;
  color: var(--color-cyan);
  margin-top: 0.5rem;
  text-transform: none;
  letter-spacing: normal;
`;
