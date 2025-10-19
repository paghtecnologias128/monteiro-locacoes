import{d as o,j as r}from"./index-CuUX7gl-.js";const n=o.section`
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
  border: 2px solid #37b1f8; /* Cor da borda: azul-claro #37B1F8, Espessura: 2px, Estilo: sólido */
  border-radius: 10px; /* Canto levemente arredondado */
  box-shadow: 0 4px 8px 0 #37b1f859; /* Sombra azul especificada */
  padding: 1rem;
  text-align: center;
  transition: all 0.25s ease; /* Transição suave */

  &:hover {
    border-color: #37b1f8; /* Escurecer a borda para #37B1F8 */
    transform: translateY(-2px); /* Elevar levemente o card */
    box-shadow: 0 8px 16px 0 #37b1f873; /* Aumentar a sombra no hover */
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 5px;
  }

  h2 {
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
`,p=({image:a,title:e,alt:t})=>r.jsxs(m,{children:[r.jsx("img",{src:a,alt:t,loading:"lazy"}),r.jsx("h2",{children:e}),r.jsx(c,{children:"Pequeno | Médio | Grande"})]}),g=({cards:a})=>r.jsxs(n,{children:[r.jsxs(i,{children:[r.jsx(s,{children:"Entrega e montagem garantida!"}),r.jsx(l,{children:"Nossos Brinquedos"})]}),r.jsx(d,{children:a.map(e=>r.jsx(p,{image:e.image,title:e.title,alt:e.alt},e.id))})]});export{g as default};
