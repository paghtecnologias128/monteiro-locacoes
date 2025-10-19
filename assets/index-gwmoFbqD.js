import{d as o,j as e,F as r,a as t,b as n}from"./index-2xL1cp_Q.js";const s=o.footer`
  background-color: var(--color-footer-background);
  color: var(--color-white);
  padding: 2rem 4rem;
  display: grid;
  place-items: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,i=o.div`
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
`,a=o.div`
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
`,l=o(a)`
  img {
    width: 150px;
    height: 150px;
    display: block;
    margin: 0 auto;
  }
`,c=o(a)`
  text-align: center;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
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

    &:hover {
      svg,
      a,
      span {
        color: var(--color-cyan);
      }
    }
  }
`,d="/monteiro-locacoes/assets/img%20-%20logo-D8P_3xlT.svg",p=()=>e.jsx(s,{children:e.jsxs(i,{children:[e.jsxs(a,{children:[e.jsx("h3",{children:"QUEM SOMOS?"}),e.jsx("p",{children:"Somos uma empresa que realiza alocações e leva diversão para você."})]}),e.jsx(l,{children:e.jsx("img",{src:d,alt:"Monteiro Locações Logo"})}),e.jsxs(c,{children:[e.jsx("h3",{children:"CONTATO"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx(r,{}),e.jsx("a",{href:"https://wa.me/556798765432",target:"_blank",rel:"noopener noreferrer","aria-label":"Fale conosco pelo WhatsApp",children:"WhatsApp"})]}),e.jsxs("li",{children:[e.jsx(t,{}),e.jsx("a",{href:"tel:+556798765432","aria-label":"Ligue para nós",children:"(67) 9876-5432"})]}),e.jsxs("li",{children:[e.jsx(n,{}),e.jsx("span",{"aria-label":"Endereço da Monteiro Locações",children:"R. Guarapuava, 850"})]})]})]})]})});export{p as default};
