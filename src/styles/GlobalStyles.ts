
import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-blue: #00B0F0;
    --dark-blue: #00263C;
    --white: #FFFFFF;
    --black: #000000;
    --yellow: #FFD700;
    --red: #FF4757;
    --whatsapp: #25D366;
    --gray-light: #F8F9FA;
    --gray-medium: #6C757D;
    --shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    color: var(--black);
    background-color: var(--white);
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 768px) {
      padding: 0 16px;
    }
  }

  .section-padding {
    padding: 100px 0;

    @media (max-width: 768px) {
      padding: 60px 0;
    }
  }

  /* AOS Animations */
  [data-aos] {
    pointer-events: none;
  }
  
  [data-aos].aos-animate {
    pointer-events: auto;
  }

  /* Focus styles */
  *:focus {
    outline: 2px solid var(--primary-blue);
    outline-offset: 2px;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--gray-light);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-blue);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--dark-blue);
  }
`

export const Button = styled.button<{ $variant?: 'primary' | 'outline' | 'ghost'; size?: 'small' | 'medium' | 'large' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
  text-decoration: none;
  
  ${props => {
    switch (props.size) {
      case 'small':
        return `
          padding: 8px 20px;
          font-size: 14px;
        `
      case 'large':
        return `
          padding: 16px 32px;
          font-size: 18px;
        `
      default:
        return `
          padding: 12px 24px;
          font-size: 16px;
        `
    }
  }}

  ${props => {
    switch (props.$variant) {
      case 'outline':
        return `
          background: transparent;
          color: var(--primary-blue);
          border-color: var(--primary-blue);
          
          &:hover {
            background: var(--primary-blue);
            color: var(--white);
            transform: translateY(-2px);
            box-shadow: var(--shadow-hover);
          }
          &:active {
            background: var(--dark-blue);
            border-color: var(--dark-blue);
            transform: translateY(0);
            box-shadow: none;
          }
        `
      case 'ghost':
        return `
          background: transparent;
          color: var(--white);
          border-color: var(--white);
          
          &:hover {
            background: var(--white);
            color: var(--primary-blue);
            transform: translateY(-2px);
          }
          &:active {
            background: var(--gray-medium);
            border-color: var(--gray-medium);
            color: var(--white);
            transform: translateY(0);
          }
        `
      default:
        return `
          background: var(--primary-blue);
          color: var(--white);
          
          &:hover {
            background: var(--dark-blue);
            transform: translateY(-2px);
            box-shadow: var(--shadow-hover);
          }
          &:active {
            background: var(--dark-blue);
            transform: translateY(0);
            box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
          }
        `
    }
  }}

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    
    &:hover {
      transform: none;
    }
  }
`

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--dark-blue);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--gray-medium);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`
