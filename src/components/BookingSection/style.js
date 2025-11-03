import styled from 'styled-components';

export const BookingSectionContainer = styled.section`
  background-color: #e0e0e0;
  padding: 2rem;
  max-width: 1200px;
  margin: 2rem auto 2rem auto;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Chip = styled.div`
  background-color: var(--color-green);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Form = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid ${({ $isInvalid }) => ($isInvalid ? 'var(--color-red)' : '#ccc')};
  height: 40px;
  font-family: inherit;
  font-size: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
  flex: 1;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid ${({ $isInvalid }) => ($isInvalid ? 'var(--color-red)' : '#ccc')};
  height: 40px;
  font-family: inherit;
  font-size: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ErrorMessage = styled.span`
  color: var(--color-red);
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: block;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background-color: ${({ $clear }) => ($clear ? 'transparent' : 'var(--color-green)')};
  border: 2px solid var(--color-green);
  border-radius: 30px;
  color: ${({ $clear }) => ($clear ? 'var(--color-green)' : '#fff')};
  font-family: 'Montserrat', sans-serif;
  font-weight: 600; /* SemiBold */
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: ${({ $clear }) => ($clear ? 'var(--color-green)' : '#218838')};
    border-color: ${({ $clear }) => ($clear ? 'var(--color-green)' : '#1e7e34')};
    color: #fff;
    transform: scale(1.05);
  }

  &:disabled {
    background-color: #ccc;
    border-color: #ccc;
    color: #666;
    cursor: not-allowed;
    transform: none;
  }

  svg {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export const EmptyStateMessage = styled.p`
  text-align: center;
  color: var(--color-text);
  font-size: 1.1rem;
  padding: 1rem;
  border: 1px dashed #ccc;
  border-radius: 8px;
  margin-top: 1rem;
`;
