import styled from 'styled-components';

export const AgendarSectionContainer = styled.section`
  background-color: #00263C;
  color: #FFFFFF;
  padding: 48px 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 32px 1rem;
  }
`;

export const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 800; /* ExtraBold */
  font-size: 32px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const Paragraph = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400; /* Regular */
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background-color: transparent;
  border: 2px solid #FFFFFF;
  border-radius: 30px;
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600; /* SemiBold */
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color 0.25s ease, color 0.25s ease, transform 0.25s ease;

  &:hover {
    background-color: #00BFFF;
    color: #FFFFFF;
    transform: scale(1.05);
  }

  svg {
    font-size: 1.5rem; /* Adjust as needed */
  }
`;