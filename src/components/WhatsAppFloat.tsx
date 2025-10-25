import React from "react";
import styled, { keyframes } from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
  
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

const FloatButton = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: var(--whatsapp);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 1500;
  text-decoration: none;
  transition: all 0.3s ease;
  animation: ${pulse} 3s infinite;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);

  &:hover {
    background: #128c7e;
    transform: translateY(-3px) scale(1.1);
    animation: none;
    box-shadow: 0 8px 30px rgba(37, 211, 102, 0.5);
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 55px;
    height: 55px;
    font-size: 1.3rem;
  }

  /* Tooltip */
  &::before {
    content: "Fale conosco!";
    position: absolute;
    right: 70px;
    top: 50%;
    transform: translateY(-50%);
    background: var(--dark-blue);
    color: var(--white);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    font-family: "Poppins", sans-serif;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &::after {
    content: "";
    position: absolute;
    right: 60px;
    top: 50%;
    transform: translateY(-50%);
    border: 6px solid transparent;
    border-left-color: var(--dark-blue);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
    visibility: visible;
  }
`;

const WhatsAppFloat: React.FC = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre os serviços da Monteiro Locações."
    );
    window.open(`https://wa.me/5567981396452?text=${message}`, "_blank");
  };

  return (
    <FloatButton
      href={`https://wa.me/5567981396452?text=${encodeURIComponent(
        "Olá! Gostaria de saber mais sobre os serviços da Monteiro Locações."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      <FaWhatsapp />
    </FloatButton>
  );
};

export default WhatsAppFloat;
