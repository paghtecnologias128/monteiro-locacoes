import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderContainer = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== "scrolled",
})<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${(props) =>
    props.scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent"};
  backdrop-filter: ${(props) => (props.scrolled ? "blur(10px)" : "none")};
  transition: all 0.3s ease;
  border-bottom: ${(props) =>
    props.scrolled ? "1px solid rgba(0, 176, 240, 0.1)" : "none"};
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

const Logo = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--primary-blue);

  span {
    color: var(--dark-blue);
  }
`;

const NavLinks = styled.ul.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  }
`;

const NavLink = styled.a.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>`
  font-weight: 500;
  color: ${(props) => (props.isActive ? "var(--primary-blue)" : "var(--dark-blue)")};
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: var(--primary-blue);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${(props) => (props.isActive ? "100%" : "0")};
    height: 2px;
    background: var(--primary-blue);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 1rem 0;
  }
`;

const MenuToggle = styled.button`
  display: none;
  font-size: 1.5rem;
  color: var(--dark-blue);
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
  }
`;

const CTAButton = styled.a`
  background: var(--primary-blue);
  color: var(--white);
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: var(--dark-blue);
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
  }
`;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      let currentSection = "#inicio";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSection = `#${section.id}`;
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setActiveLink(href);

    const element = document.querySelector<HTMLElement>(href);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <HeaderContainer scrolled={isScrolled}>
      <div className="max-w-6xl mx-auto px-5 md:px-4">
        <Nav>
          <Logo>
            Monteiro <span className="text-dark-blue">Locações</span>
          </Logo>

          <NavLinks isOpen={isMobileMenuOpen}>
            <li>
              <NavLink href="#inicio" onClick={() => handleNavClick("#inicio")} isActive={activeLink === "#inicio"}>
                Início
              </NavLink>
            </li>
            <li>
              <NavLink href="#sobre" onClick={() => handleNavClick("#sobre")} isActive={activeLink === "#sobre"}>
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#servicos"
                onClick={() => handleNavClick("#servicos")}
                isActive={activeLink === "#servicos"}
              >
                Serviços
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#galeria"
                onClick={() => handleNavClick("#galeria")}
                isActive={activeLink === "#galeria"}
              >
                Galeria
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#contato"
                onClick={() => handleNavClick("#contato")}
                isActive={activeLink === "#contato"}
              >
                Contato
              </NavLink>
            </li>
            <li>
              <CTAButton href="#contato" onClick={() => handleNavClick("#contato")}>
                Fale Conosco
              </CTAButton>
            </li>
          </NavLinks>

          <MenuToggle onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MenuToggle>
        </Nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;
