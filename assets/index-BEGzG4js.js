import{d as a,j as e,b as i,c as s,e as l}from"./index-C0H80Gyi.js";const c=a.footer`
  background-color: var(--color-footer-background);
  color: var(--color-white);
  padding: 2rem 4rem;
  display: grid;
  place-items: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,d=a.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }

  @media (max-width: 480px) {
    gap: 2rem; /* Further reduce gap on very small screens */
  }
`,o=a.div`
  text-align: center;
  width: 33%;

  @media (max-width: 768px) {
    width: 100%;
  }

  h3 {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.6;
    text-transform: none;
    letter-spacing: normal;
  }
`,h=a(o)`
  img {
    width: 150px;
    height: 150px;
    display: block;
    margin: 0 auto;
  }
`,p=a(o)`
  text-align: center;

  ul {
    list-style: none;
    padding: 0;
  }
`,r=a.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
  font-size: 1rem;
  text-transform: none;
  letter-spacing: normal;
  justify-content: center;

  svg {
    color: var(--color-white);
    font-size: 24px;
    transition: color 0.3s ease;
  }

  a,
  span {
    color: var(--color-white);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  &:hover,
  &:focus-visible {
    svg,
    a,
    span {
      color: ${({$isWhatsapp:t,$isLocation:n})=>t?"var(--color-green)":n?"var(--color-yellow-lima)":"var(--color-cyan)"};
    }
  }
`,m="/assets/img-logo-BvKLxy3k.svg",g=()=>e.jsx(c,{children:e.jsxs(d,{children:[e.jsxs(o,{children:[e.jsx("h3",{children:"QUEM SOMOS?"}),e.jsx("p",{children:"Oferecemos brinquedos seguros e de alta qualidade para festas, garantindo a diversão das crianças e a tranquilidade dos pais."})]}),e.jsx(h,{children:e.jsx("img",{src:m,alt:"Monteiro Locações Logo"})}),e.jsxs(p,{children:[e.jsx("h3",{children:"CONTATO"}),e.jsxs("ul",{children:[e.jsxs(r,{$isWhatsapp:!0,children:[e.jsx(i,{"aria-hidden":"true"}),e.jsx("a",{href:"https://wa.me/5567984684460",target:"_blank",rel:"noopener noreferrer","aria-label":"Fale conosco pelo WhatsApp",children:"WhatsApp"})]}),e.jsxs(r,{children:[e.jsx(s,{"aria-hidden":"true"}),e.jsx("a",{href:"tel:+5567984684460","aria-label":"Ligue para nós",children:"(67) 98468-4460"})]}),e.jsxs(r,{$isLocation:!0,children:[e.jsx(l,{"aria-hidden":"true"}),e.jsx("span",{"aria-label":"Endereço da Monteiro Locações",children:"R. Guarapuava, 850"})]})]})]})]})});export{g as default};
