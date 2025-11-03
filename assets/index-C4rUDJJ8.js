import{d as s,g as le,l as N,r as n,j as e,F as ce,a as de,b as pe}from"./index-V-tyYJDk.js";const me=s.section`
  padding: 4rem 2rem;
  background-color: var(--color-background);

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,ue=s.div`
  text-align: center;
  margin-bottom: 2rem;
`;s.p`
  color: var(--color-yellow);
  font-size: clamp(1rem, 4vw, 1.2rem);
  font-family: var(--font-main);
  text-transform: none;
  letter-spacing: normal;
`;const ge=s.h2`
  color: var(--color-cyan);
  font-size: clamp(2rem, 6vw, 3rem);
  font-family: var(--font-main);
  font-weight: 700;
`,he=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto 0 auto;
`;var F={exports:{}},M,Y;function fe(){if(Y)return M;Y=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return M=r,M}var z,X;function xe(){if(X)return z;X=1;var r=fe();function p(){}function y(){}return y.resetWarningCache=p,z=function(){function c(C,a,l,u,t,h){if(h!==r){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}c.isRequired=c;function m(){return c}var x={array:c,bigint:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:m,element:c,elementType:c,instanceOf:m,node:c,objectOf:m,oneOf:m,oneOfType:m,shape:m,exact:m,checkPropTypes:y,resetWarningCache:p};return x.PropTypes=x,x},z}var V;function be(){return V||(V=1,F.exports=xe()()),F.exports}var ve=be();const i=le(ve),ye=s.div`
  background-color: #fff;
  border: 2px solid ${({$isMissingOption:r})=>r?"var(--color-red)":"#37b1f8"};
  border-radius: 30px;
  padding: 1rem;
  text-align: center;
  transition: all 0.25s ease;

  ${({$isSelected:r})=>r&&N`
      box-shadow: 0 8px 16px 0 #37b1f873;
    `}
`,Ce=s.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
`,je=s.div`
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: ${({$currentIndex:r})=>`translateX(-${r*100}%)`};
`,we=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  flex-shrink: 0;
`,Z=s.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  padding: 0.8rem;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease, opacity 0.2s ease;
  opacity: 0.7;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 1;
  }

  ${({direction:r})=>r==="prev"?N`
          left: 10px;
        `:N`
          right: 10px;
        `}
`,Re=s.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`,Se=s.button`
  background-color: ${({$isSelected:r})=>r?"var(--color-green)":"#f0f0f0"};
  color: ${({$isSelected:r})=>r?"#fff":"#333"};
  border: 1px solid ${({$isSelected:r})=>r?"var(--color-green)":"#ccc"};
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({$isSelected:r})=>r?"var(--color-green)":"#e0e0e0"};
    border-color: ${({$isSelected:r})=>r?"var(--color-green)":"#aaa"};
  }
`;s.p`
  font-size: 0.9rem;
  color: var(--color-cyan);
  margin-top: 0.5rem;
  text-transform: none;
  letter-spacing: normal;
`;const W=n.memo(({id:r,images:p,title:y,alt:c,options:m,isSelected:x,selectedOptions:C,onCardClick:a,onOptionClick:l})=>{const[u,t]=n.useState(0),[h,d]=n.useState(!1),b=n.useRef(null);n.useEffect(()=>(h?b.current=setInterval(()=>{t(g=>(g+1)%p.length)},3500):clearInterval(b.current),()=>clearInterval(b.current)),[h,p.length]);const j=(g,f)=>{g.stopPropagation(),l(r,f)},w=g=>{g.stopPropagation(),t(f=>(f+1)%p.length)},T=g=>{g.stopPropagation(),t(f=>(f-1+p.length)%p.length)};return e.jsxs(ye,{$isSelected:x,onClick:()=>a(r),onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[e.jsxs(Ce,{children:[e.jsx(je,{$currentIndex:u,children:p.map((g,f)=>e.jsx(we,{src:g,alt:`${c} ${f+1}`,loading:"lazy"},f))}),p.length>1&&e.jsxs(e.Fragment,{children:[e.jsx(Z,{direction:"prev",onClick:T,children:e.jsx(ce,{})}),e.jsx(Z,{direction:"next",onClick:w,children:e.jsx(de,{})})]})]}),e.jsx("h2",{children:y}),x&&e.jsx(Re,{children:m.map(g=>e.jsx(Se,{$isSelected:C.some(f=>f.variation===g.label),onClick:f=>j(f,g),children:g.label},g.label))})]})});W.displayName="Card";W.propTypes={id:i.string.isRequired,images:i.arrayOf(i.string).isRequired,title:i.string.isRequired,alt:i.string.isRequired,options:i.arrayOf(i.shape({label:i.string.isRequired})).isRequired,isSelected:i.bool.isRequired,selectedOptions:i.arrayOf(i.shape({variation:i.string.isRequired})).isRequired,onCardClick:i.func.isRequired,onOptionClick:i.func.isRequired};const ee=s.section`
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
`,Pe=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,$e=s.div`
  background-color: var(--color-green);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Ee=s.input`
  width: 50px;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 0.9rem;
`,ke=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,P=s.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,q=s.input`
  flex: 1;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid ${({$isInvalid:r})=>r?"var(--color-red)":"#ccc"};
  height: 40px;
  font-family: inherit;
  font-size: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`,re=s.textarea`
  flex: 1;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid ${({$isInvalid:r})=>r?"var(--color-red)":"#ccc"};
  min-height: 40px;
  height: auto;
  font-family: inherit;
  font-size: 1rem;
  overflow: hidden;
  resize: vertical;

  @media (max-width: 768px) {
    width: 100%;
  }
`,k=s.span`
  color: var(--color-red);
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: block;
`,Te=s.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`,oe=s.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background-color: ${({$clear:r})=>r?"transparent":"var(--color-green)"};
  border: 2px solid var(--color-green);
  border-radius: 30px;
  color: ${({$clear:r})=>r?"var(--color-green)":"#fff"};
  font-family: 'Montserrat', sans-serif;
  font-weight: 600; /* SemiBold */
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: ${({$clear:r})=>r?"var(--color-green)":"#218838"};
    border-color: ${({$clear:r})=>r?"var(--color-green)":"#1e7e34"};
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
`,qe=s.p`
  text-align: center;
  color: var(--color-text);
  font-size: 1.1rem;
  padding: 1rem;
  border: 1px dashed #ccc;
  border-radius: 8px;
  margin-top: 1rem;
`,Ie=s.div`
  background-color: var(--color-green);
  color: var(--color-white);
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 1rem;
  font-weight: 600;
`,ae=({selectedItems:r,onSend:p,onClear:y,onQuantityChange:c})=>{const[m,x]=n.useState(""),[C,a]=n.useState(""),[l,u]=n.useState(""),[t,h]=n.useState(""),[d,b]=n.useState(""),[j,w]=n.useState(""),[T,g]=n.useState(""),[f,A]=n.useState(!1),[te,H]=n.useState(!1),[I,_]=n.useState(""),[O,$]=n.useState(""),[L,G]=n.useState(""),[B,Q]=n.useState(""),[J,K]=n.useState(""),S=n.useRef(null);n.useEffect(()=>{const o=new Date;o.setHours(o.getHours()+1);const v=o.getFullYear(),E=(o.getMonth()+1).toString().padStart(2,"0"),R=o.getDate().toString().padStart(2,"0"),U=o.getHours().toString().padStart(2,"0"),ie=o.getMinutes().toString().padStart(2,"0");g(`${v}-${E}-${R}T${U}:${ie}`)},[]),n.useEffect(()=>{S.current&&(console.log("Resizing observations textarea",S.current.scrollHeight),S.current.style.height="0px",S.current.style.height=S.current.scrollHeight+"px !important")},[j]);const ne=async o=>{const v=o.target.value.replace(/\D/g,"");if(a(v),$(""),v.length===8)try{const R=await(await fetch(`https://viacep.com.br/ws/${v}/json/`)).json();if(R.erro)$("CEP não encontrado."),u("");else{const U=`${R.logradouro}, ${R.bairro}, ${R.localidade} - ${R.uf}`;u(U)}}catch{$("Erro ao buscar CEP."),u("")}},se=()=>{_(""),$(""),G(""),Q(""),K("");let o=!1;r.length===0&&(K("Por favor, selecione pelo menos um item."),o=!0);const v=new Date(m),E=new Date(T);m?v<E&&(_("A data e o horário devem ser pelo menos uma hora a partir de agora."),o=!0):(_("Por favor, informe a data e o horário."),o=!0),C||($("Por favor, informe o CEP."),o=!0),l||(G("Por favor, informe o local do evento."),o=!0),t||(Q("Por favor, informe o número."),o=!0),!o&&(A(!0),setTimeout(()=>{p({dateTime:m,cep:C,location:l,number:t,complement:d,observations:j}),A(!1),H(!0),setTimeout(()=>{H(!1)},3e3)},2e3))};return r.length===0?e.jsx(ee,{children:e.jsx(qe,{children:"Nenhum item selecionado. Clique em um card para começar a montar seu orçamento!"})}):e.jsxs(ee,{children:[J&&e.jsx(k,{children:J}),e.jsx(Pe,{children:r.map(o=>e.jsxs($e,{children:[o.name," - ",o.variation,e.jsx(Ee,{type:"number",min:"1",value:o.quantity,onChange:v=>c(o.id,parseInt(v.target.value))})]},o.id))}),e.jsxs(ke,{children:[e.jsxs(P,{children:[e.jsx(q,{type:"datetime-local",value:m,min:T,onChange:o=>x(o.target.value),$isInvalid:!!I}),I&&e.jsx(k,{children:I})]}),e.jsxs(P,{children:[e.jsx(q,{type:"text",placeholder:"CEP",value:C,onChange:ne,maxLength:"8",$isInvalid:!!O}),O&&e.jsx(k,{children:O})]}),e.jsxs(P,{children:[e.jsx(q,{type:"text",placeholder:"Número",value:t,onChange:o=>h(o.target.value),$isInvalid:!!B}),B&&e.jsx(k,{children:B})]}),e.jsx(P,{children:e.jsx(q,{type:"text",placeholder:"Complemento (opcional)",value:d,onChange:o=>b(o.target.value)})}),e.jsxs(P,{children:[e.jsx(re,{placeholder:"Local do evento",value:l,onChange:o=>u(o.target.value),$isInvalid:!!L,disabled:!0}),L&&e.jsx(k,{children:L})]}),e.jsx(P,{children:e.jsx(re,{ref:S,placeholder:"Observações",value:j,onChange:o=>w(o.target.value)})}),e.jsxs(Te,{children:[e.jsx(oe,{onClick:se,disabled:f,children:f?"Enviando...":e.jsxs(e.Fragment,{children:[e.jsx(pe,{}),"Enviar"]})}),e.jsx(oe,{$clear:!0,onClick:y,children:"Limpar"})]})]}),te&&e.jsx(Ie,{children:"Sua solicitação foi enviada! Redirecionando para o WhatsApp..."})]})};ae.propTypes={selectedItems:i.arrayOf(i.shape({id:i.string.isRequired,name:i.string.isRequired,variation:i.string,quantity:i.number.isRequired})).isRequired,onSend:i.func.isRequired,onClear:i.func.isRequired,onQuantityChange:i.func.isRequired};const D=[{id:"piscinas-e-barracas",name:"Piscinas e Barracas",images:[new URL("/monteiro-locacoes/assets/ball_pit-DhzHaIKw.jpg",import.meta.url).href,new URL("/monteiro-locacoes/assets/ball_tent-BasdM_9K.jpg",import.meta.url).href],alt:"Piscinas e Barracas",options:[{label:"Piscina - 1x1m"},{label:"Piscina - 2x2m"},{label:"Barraca - 5x1m"}]},{id:"pula-pula",name:"Pula-Pula",images:[new URL("/monteiro-locacoes/assets/bouncy_castle-ChuHBkFq.jpg",import.meta.url).href],alt:"Pula-Pula",options:[{label:"1,40m"},{label:"2,44m"},{label:"3,05m"},{label:"4,27m"}]},{id:"mesas-e-cadeiras",name:"Mesas + Cadeiras",images:[new URL("/monteiro-locacoes/assets/chairs-BSNbmXkz.png",import.meta.url).href],alt:"Mesas + Cadeiras",options:[{label:"8 a 5 Jogos"},{label:"36 a 50 Jogos"},{label:"51 a 100 Jogos"},{label:"Quantidade Específica"}]},{id:"escorregadores",name:"Escorregadores",images:[new URL("/monteiro-locacoes/assets/slide_blue-B-On3EPx.jpg",import.meta.url).href,new URL("/monteiro-locacoes/assets/slide_pink-BOExkgWs.jpg",import.meta.url).href,new URL("/monteiro-locacoes/assets/slide_yellow-Bd1w2a5f.jpg",import.meta.url).href],alt:"Escorregadores",options:[{label:"Escorregador + Gangorra"},{label:"Escorregador Rosa/Roxo"},{label:"Escorregador Amarelo/Azul"},{label:"Escorregador Azul/Vermelho"}]},{id:"inflaveis",name:"Infláveis",images:[new URL("/monteiro-locacoes/assets/bouncy_race-B-MdeE-b.jpg",import.meta.url).href,new URL("/monteiro-locacoes/assets/bouncy_slide-BXWCTBK_.png",import.meta.url).href,new URL("/monteiro-locacoes/assets/bouncy_soccer-B06nYjRu.jpg",import.meta.url).href,new URL("/monteiro-locacoes/assets/bouncy_war-CPqU4Lpv.png",import.meta.url).href],alt:"Infláveis",options:[{label:"Tobagã Pequeno"},{label:"Tobagã Médio"},{label:"Corrida Maluca"},{label:"Futebol de Sabão"},{label:"Guerra de Cotonete"}]},{id:"jogos-de-mesa",name:"Jogos de Mesa",images:[new URL("/monteiro-locacoes/assets/arcade-B3KPNdhU.jpg",import.meta.url).href,new URL("/monteiro-locacoes/assets/ping_pong_table-CpG85ZQ2.jpg",import.meta.url).href,new URL("/monteiro-locacoes/assets/pool_table-CJMPEwiE.jpg",import.meta.url).href],alt:"Jogos de Mesa",options:[{label:"Fliperama"},{label:"Mesa de Sinuca"},{label:"Mesa de Ping Pong"}]},{id:"carrinhos-e-barracas",name:"Carrinhos e Barracas",images:[new URL("/monteiro-locacoes/assets/popcorn_cotton_candy_cart-C3xtqTh1.jpg",import.meta.url).href,new URL("/monteiro-locacoes/assets/popsicle_cart-57ikGAmF.jpg",import.meta.url).href],alt:"Carrinhos e Barracas",options:[{label:"Algodão Doce"},{label:"Pipoca"},{label:"Picolé"}]},{id:"servicos",name:"Serviços",images:[new URL("/monteiro-locacoes/assets/face_painting-ClLn_OMm.jpg",import.meta.url).href],alt:"Serviços",options:[{label:"Pintura Facial"},{label:"Monitor(a) de Brinquedo"},{label:"Recreador(a)"}]},{id:"combo-festa",name:"Combo Festa",images:[new URL("/monteiro-locacoes/assets/party_combo-8pAk37gh.jpg",import.meta.url).href],alt:"Combo Festa",options:[{label:"Piscina + Cama Elástica (P)"},{label:"Piscina + Cama Elástica (M)"},{label:"Piscina + Cama Elástica (G)"}]}],Oe=()=>{const[r,p]=n.useState([]),y=n.useCallback(a=>{p(l=>{if(l.filter(t=>t.productId===a).length>0)return l.filter(t=>t.productId!==a);{const t=D.find(h=>h.id===a);if(t&&t.options.length>0){const h=t.options[0],d=`${a}-${h.label}`;return[...l,{id:d,productId:a,name:t.name,variation:h.label,quantity:1}]}}return l})},[]),c=n.useCallback((a,l)=>{p(u=>{const t=`${a}-${l.label}`;if(u.findIndex(d=>d.id===t)!==-1)return u.filter(d=>d.id!==t);{const d=D.find(b=>b.id===a);return[...u,{id:t,productId:a,name:d.name,variation:l.label,quantity:1}]}})},[]),m=n.useCallback((a,l)=>{p(u=>u.map(t=>t.id===a?{...t,quantity:l}:t))},[]),x=()=>{p([])},C=({dateTime:a,cep:l,location:u,number:t,complement:h,observations:d})=>{if(r.length===0){alert("Por favor, selecione pelo menos um item.");return}const b=`Olá! Quero orçamento para:

${r.map(w=>`${w.quantity}x ${w.name} - ${w.variation}`).join(`
`)}

Data e horário: ${a}
CEP: ${l}
Local do evento: ${u}, ${t} ${h?`- ${h}`:""}
Observações: ${d}`,j=`https://wa.me/5567984684460?text=${encodeURIComponent(b)}`;window.open(j,"_blank")};return e.jsx(e.Fragment,{children:e.jsxs(me,{children:[e.jsx(ue,{children:e.jsxs(ge,{children:["Nossos ",e.jsx("br",{})," serviços e brinquedos"]})}),e.jsx(he,{children:D.map(a=>e.jsx(W,{id:a.id,images:a.images,title:a.name,alt:a.alt,options:a.options,isSelected:r.some(l=>l.productId===a.id),selectedOptions:r.filter(l=>l.productId===a.id),onCardClick:y,onOptionClick:c},a.id))}),e.jsx(ae,{selectedItems:r,onSend:C,onClear:x,onQuantityChange:m})]})})};export{Oe as default};
