import{d as o,j as r}from"./index-Z1n7skph.js";const n=o.section`
  padding: 4rem 2rem;
  background-color: var(--color-background);

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,i=o.div`
  text-align: center;
  margin-bottom: 3rem;
`,s=o.p`
  color: var(--color-yellow);
  font-size: clamp(1rem, 4vw, 1.2rem);
  font-family: var(--font-main);
  text-transform: none;
  letter-spacing: normal;
`,l=o.h2`
  color: var(--color-cyan);
  font-size: clamp(2rem, 6vw, 3rem);
  font-family: var(--font-main);
  font-weight: 700;
`,d=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,m=o.div`
  background-color: #fff;
  border: 2px solid #8FD1FF; /* Cor da borda: azul-claro #8FD1FF, Espessura: 2px, Estilo: sólido */
  border-radius: 12px; /* Canto levemente arredondado */
  box-shadow: 0 6px 18px rgba(0, 123, 255, 0.12); /* Sombra leve */
  padding: 1rem;
  text-align: center;
  transition: all 0.25s ease; /* Transição suave */

  &:hover {
    border-color: #5AB8FF; /* Escurecer a borda para #5AB8FF */
    transform: translateY(-2px); /* Elevar levemente o card */
    box-shadow: 0 10px 24px rgba(0, 123, 255, 0.18); /* Aumentar a sombra */
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 5px;
  }

  h1 {
    font-size: 1.5rem;
    color: var(--color-cyan);
    margin-top: 1rem;
    font-weight: 700;
  }
`,c=o.p`
  font-size: 0.9rem;
  color: var(--color-cyan);
  margin-top: 0.5rem;
  text-transform: none;
  letter-spacing: normal;
`,p=({image:a,title:e,alt:t})=>r.jsxs(m,{children:[r.jsx("img",{src:a,alt:t}),r.jsx("h1",{children:e}),r.jsx(c,{children:"Pequeno | Médio | Grande"})]}),g=({cards:a})=>r.jsxs(n,{children:[r.jsxs(i,{children:[r.jsx(s,{children:"Entrega e montagem garantida!"}),r.jsx(l,{children:"Nossos Brinquedos"})]}),r.jsx(d,{children:a.map(e=>r.jsx(p,{image:e.image,title:e.title,alt:e.alt},e.id))})]});export{g as default};
