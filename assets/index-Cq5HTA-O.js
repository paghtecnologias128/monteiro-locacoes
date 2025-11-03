import{d as s,g as le,l as L,r as n,j as e,F as ce,a as de,b as pe}from"./index-CxFhkLJm.js";const me=s.section`
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
`;var z={exports:{}},D,K;function fe(){if(K)return D;K=1;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return D=o,D}var N,X;function xe(){if(X)return N;X=1;var o=fe();function p(){}function y(){}return y.resetWarningCache=p,N=function(){function c(C,a,l,u,t,h){if(h!==o){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}c.isRequired=c;function m(){return c}var x={array:c,bigint:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:m,element:c,elementType:c,instanceOf:m,node:c,objectOf:m,oneOf:m,oneOfType:m,shape:m,exact:m,checkPropTypes:y,resetWarningCache:p};return x.PropTypes=x,x},N}var V;function be(){return V||(V=1,z.exports=xe()()),z.exports}var ve=be();const i=le(ve),ye=s.div`
  background-color: #fff;
  border: 2px solid ${({$isMissingOption:o})=>o?"var(--color-red)":"#37b1f8"};
  border-radius: 30px;
  padding: 1rem;
  text-align: center;
  transition: all 0.25s ease;

  ${({$isSelected:o})=>o&&L`
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
  transform: ${({$currentIndex:o})=>`translateX(-${o*100}%)`};
`,Se=s.img`
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

  ${({direction:o})=>o==="prev"?L`
          left: 10px;
        `:L`
          right: 10px;
        `}
`,we=s.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`,Pe=s.button`
  background-color: ${({$isSelected:o})=>o?"var(--color-green)":"#f0f0f0"};
  color: ${({$isSelected:o})=>o?"#fff":"#333"};
  border: 1px solid ${({$isSelected:o})=>o?"var(--color-green)":"#ccc"};
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({$isSelected:o})=>o?"var(--color-green)":"#e0e0e0"};
    border-color: ${({$isSelected:o})=>o?"var(--color-green)":"#aaa"};
  }
`;s.p`
  font-size: 0.9rem;
  color: var(--color-cyan);
  margin-top: 0.5rem;
  text-transform: none;
  letter-spacing: normal;
`;const A=n.memo(({id:o,images:p,title:y,alt:c,options:m,isSelected:x,selectedOptions:C,onCardClick:a,onOptionClick:l})=>{const[u,t]=n.useState(0),[h,d]=n.useState(!1),b=n.useRef(null);n.useEffect(()=>(h?b.current=setInterval(()=>{t(g=>(g+1)%p.length)},3500):clearInterval(b.current),()=>clearInterval(b.current)),[h,p.length]);const j=(g,f)=>{g.stopPropagation(),l(o,f)},S=g=>{g.stopPropagation(),t(f=>(f+1)%p.length)},T=g=>{g.stopPropagation(),t(f=>(f-1+p.length)%p.length)};return e.jsxs(ye,{$isSelected:x,onClick:()=>a(o),onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[e.jsxs(Ce,{children:[e.jsx(je,{$currentIndex:u,children:p.map((g,f)=>e.jsx(Se,{src:g,alt:`${c} ${f+1}`,loading:"lazy"},f))}),p.length>1&&e.jsxs(e.Fragment,{children:[e.jsx(Z,{direction:"prev",onClick:T,children:e.jsx(ce,{})}),e.jsx(Z,{direction:"next",onClick:S,children:e.jsx(de,{})})]})]}),e.jsx("h2",{children:y}),x&&e.jsx(we,{children:m.map(g=>e.jsx(Pe,{$isSelected:C.some(f=>f.variation===g.label),onClick:f=>j(f,g),children:g.label},g.label))})]})});A.displayName="Card";A.propTypes={id:i.string.isRequired,images:i.arrayOf(i.string).isRequired,title:i.string.isRequired,alt:i.string.isRequired,options:i.arrayOf(i.shape({label:i.string.isRequired})).isRequired,isSelected:i.bool.isRequired,selectedOptions:i.arrayOf(i.shape({variation:i.string.isRequired})).isRequired,onCardClick:i.func.isRequired,onOptionClick:i.func.isRequired};const ee=s.section`
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
`,$e=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,Ee=s.div`
  background-color: var(--color-green);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ke=s.input`
  width: 50px;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 0.9rem;
`,Re=s.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,$=s.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,q=s.input`
  flex: 1;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid ${({$isInvalid:o})=>o?"var(--color-red)":"#ccc"};
  height: 40px;
  font-family: inherit;
  font-size: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`,oe=s.textarea`
  flex: 1;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid ${({$isInvalid:o})=>o?"var(--color-red)":"#ccc"};
  min-height: 40px;
  height: auto;
  font-family: inherit;
  font-size: 1rem;
  overflow: hidden;
  resize: vertical;

  @media (max-width: 768px) {
    width: 100%;
  }
`,R=s.span`
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
`,re=s.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background-color: ${({$clear:o})=>o?"transparent":"var(--color-green)"};
  border: 2px solid var(--color-green);
  border-radius: 30px;
  color: ${({$clear:o})=>o?"var(--color-green)":"#fff"};
  font-family: 'Montserrat', sans-serif;
  font-weight: 600; /* SemiBold */
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: ${({$clear:o})=>o?"var(--color-green)":"#218838"};
    border-color: ${({$clear:o})=>o?"var(--color-green)":"#1e7e34"};
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
`,ae=({selectedItems:o,onSend:p,onClear:y,onQuantityChange:c})=>{const[m,x]=n.useState(""),[C,a]=n.useState(""),[l,u]=n.useState(""),[t,h]=n.useState(""),[d,b]=n.useState(""),[j,S]=n.useState(""),[T,g]=n.useState(""),[f,H]=n.useState(!1),[te,G]=n.useState(!1),[I,_]=n.useState(""),[O,E]=n.useState(""),[B,Q]=n.useState(""),[F,J]=n.useState(""),[U,Y]=n.useState(""),P=n.useRef(null);n.useEffect(()=>{const r=new Date;r.setHours(r.getHours()+1);const v=r.getFullYear(),k=(r.getMonth()+1).toString().padStart(2,"0"),w=r.getDate().toString().padStart(2,"0"),M=r.getHours().toString().padStart(2,"0"),ie=r.getMinutes().toString().padStart(2,"0");g(`${v}-${k}-${w}T${M}:${ie}`)},[]),n.useEffect(()=>{P.current&&(console.log("Resizing observations textarea",P.current.scrollHeight),P.current.style.height="0px",P.current.style.height=P.current.scrollHeight+"px !important")},[j]);const ne=async r=>{const v=r.target.value.replace(/\D/g,"");if(a(v),E(""),v.length===8)try{const w=await(await fetch(`https://viacep.com.br/ws/${v}/json/`)).json();if(w.erro)E("CEP não encontrado."),u("");else{const M=`${w.logradouro}, ${w.bairro}, ${w.localidade} - ${w.uf}`;u(M)}}catch{E("Erro ao buscar CEP."),u("")}},se=()=>{_(""),E(""),Q(""),J(""),Y("");let r=!1;o.length===0&&(Y("Por favor, selecione pelo menos um item."),r=!0);const v=new Date(m),k=new Date(T);m?v<k&&(_("A data e o horário devem ser pelo menos uma hora a partir de agora."),r=!0):(_("Por favor, informe a data e o horário."),r=!0),C||(E("Por favor, informe o CEP."),r=!0),l||(Q("Por favor, informe o local do evento."),r=!0),t||(J("Por favor, informe o número."),r=!0),!r&&(H(!0),setTimeout(()=>{p({dateTime:m,cep:C,location:l,number:t,complement:d,observations:j}),H(!1),G(!0),setTimeout(()=>{G(!1)},3e3)},2e3))};return o.length===0?e.jsx(ee,{children:e.jsx(qe,{children:"Nenhum item selecionado. Clique em um card para começar a montar seu orçamento!"})}):e.jsxs(ee,{children:[U&&e.jsx(R,{children:U}),e.jsx($e,{children:o.map(r=>e.jsxs(Ee,{children:[r.name," - ",r.variation,e.jsx(ke,{type:"number",min:"1",value:r.quantity,onChange:v=>c(r.id,parseInt(v.target.value))})]},r.id))}),e.jsxs(Re,{children:[e.jsxs($,{children:[e.jsx(q,{type:"datetime-local",value:m,min:T,onChange:r=>x(r.target.value),$isInvalid:!!I}),I&&e.jsx(R,{children:I})]}),e.jsxs($,{children:[e.jsx(q,{type:"text",placeholder:"CEP",value:C,onChange:ne,maxLength:"8",$isInvalid:!!O}),O&&e.jsx(R,{children:O})]}),e.jsxs($,{children:[e.jsx(q,{type:"text",placeholder:"Número",value:t,onChange:r=>h(r.target.value),$isInvalid:!!F}),F&&e.jsx(R,{children:F})]}),e.jsx($,{children:e.jsx(q,{type:"text",placeholder:"Complemento (opcional)",value:d,onChange:r=>b(r.target.value)})}),e.jsxs($,{children:[e.jsx(oe,{placeholder:"Local do evento",value:l,onChange:r=>u(r.target.value),$isInvalid:!!B,disabled:!0}),B&&e.jsx(R,{children:B})]}),e.jsx($,{children:e.jsx(oe,{ref:P,placeholder:"Observações",value:j,onChange:r=>S(r.target.value)})}),e.jsxs(Te,{children:[e.jsx(re,{onClick:se,disabled:f,children:f?"Enviando...":e.jsxs(e.Fragment,{children:[e.jsx(pe,{}),"Enviar"]})}),e.jsx(re,{$clear:!0,onClick:y,children:"Limpar"})]})]}),te&&e.jsx(Ie,{children:"Sua solicitação foi enviada! Redirecionando para o WhatsApp..."})]})};ae.propTypes={selectedItems:i.arrayOf(i.shape({id:i.string.isRequired,name:i.string.isRequired,variation:i.string,quantity:i.number.isRequired})).isRequired,onSend:i.func.isRequired,onClear:i.func.isRequired,onQuantityChange:i.func.isRequired};const _e="/monteiro-locacoes/assets/ball_pit-DhzHaIKw.jpg",Oe="/monteiro-locacoes/assets/ball_tent-BasdM_9K.jpg",Be="/monteiro-locacoes/assets/bouncy_castle-ChuHBkFq.jpg",Fe="/monteiro-locacoes/assets/bouncy_race-B-MdeE-b.jpg",Me="/monteiro-locacoes/assets/bouncy_slide-BXWCTBK_.png",ze="/monteiro-locacoes/assets/bouncy_soccer-B06nYjRu.jpg",De="/monteiro-locacoes/assets/bouncy_war-CPqU4Lpv.png",Ne="/monteiro-locacoes/assets/chairs-BSNbmXkz.png",We="/monteiro-locacoes/assets/face_painting-ClLn_OMm.jpg",Le="/monteiro-locacoes/assets/party_combo-8pAk37gh.jpg",Ae="/monteiro-locacoes/assets/slide_blue-B-On3EPx.jpg",He="/monteiro-locacoes/assets/slide_pink-BOExkgWs.jpg",Ge="/monteiro-locacoes/assets/slide_yellow-Bd1w2a5f.jpg",Qe="/monteiro-locacoes/assets/arcade-B3KPNdhU.jpg",Je="/monteiro-locacoes/assets/ping_pong_table-CpG85ZQ2.jpg",Ue="/monteiro-locacoes/assets/pool_table-CJMPEwiE.jpg",Ye="/monteiro-locacoes/assets/popcorn_cotton_candy_cart-C3xtqTh1.jpg",Ke="/monteiro-locacoes/assets/popsicle_cart-57ikGAmF.jpg",W=[{id:"piscinas-e-barracas",name:"Piscinas e Barracas",images:[_e,Oe],alt:"Piscinas e Barracas",options:[{label:"Piscina - 1x1m"},{label:"Piscina - 2x2m"},{label:"Barraca - 5x1m"}]},{id:"pula-pula",name:"Pula-Pula",images:[Be],alt:"Pula-Pula",options:[{label:"1,40m"},{label:"2,44m"},{label:"3,05m"},{label:"4,27m"}]},{id:"mesas-e-cadeiras",name:"Mesas + Cadeiras",images:[Ne],alt:"Mesas + Cadeiras",options:[{label:"8 a 5 Jogos"},{label:"36 a 50 Jogos"},{label:"51 a 100 Jogos"},{label:"Quantidade Específica"}]},{id:"escorregadores",name:"Escorregadores",images:[Ae,He,Ge],alt:"Escorregadores",options:[{label:"Escorregador + Gangorra"},{label:"Escorregador Rosa/Roxo"},{label:"Escorregador Amarelo/Azul"},{label:"Escorregador Azul/Vermelho"}]},{id:"inflaveis",name:"Infláveis",images:[Fe,Me,ze,De],alt:"Infláveis",options:[{label:"Tobagã Pequeno"},{label:"Tobagã Médio"},{label:"Corrida Maluca"},{label:"Futebol de Sabão"},{label:"Guerra de Cotonete"}]},{id:"jogos-de-mesa",name:"Jogos de Mesa",images:[Qe,Je,Ue],alt:"Jogos de Mesa",options:[{label:"Fliperama"},{label:"Mesa de Sinuca"},{label:"Mesa de Ping Pong"}]},{id:"carrinhos-e-barracas",name:"Carrinhos e Barracas",images:[Ye,Ke],alt:"Carrinhos e Barracas",options:[{label:"Algodão Doce"},{label:"Pipoca"},{label:"Picolé"}]},{id:"servicos",name:"Serviços",images:[We],alt:"Serviços",options:[{label:"Pintura Facial"},{label:"Monitor(a) de Brinquedo"},{label:"Recreador(a)"}]},{id:"combo-festa",name:"Combo Festa",images:[Le],alt:"Combo Festa",options:[{label:"Piscina + Cama Elástica (P)"},{label:"Piscina + Cama Elástica (M)"},{label:"Piscina + Cama Elástica (G)"}]}],Ve=()=>{const[o,p]=n.useState([]),y=n.useCallback(a=>{p(l=>{if(l.filter(t=>t.productId===a).length>0)return l.filter(t=>t.productId!==a);{const t=W.find(h=>h.id===a);if(t&&t.options.length>0){const h=t.options[0],d=`${a}-${h.label}`;return[...l,{id:d,productId:a,name:t.name,variation:h.label,quantity:1}]}}return l})},[]),c=n.useCallback((a,l)=>{p(u=>{const t=`${a}-${l.label}`;if(u.findIndex(d=>d.id===t)!==-1)return u.filter(d=>d.id!==t);{const d=W.find(b=>b.id===a);return[...u,{id:t,productId:a,name:d.name,variation:l.label,quantity:1}]}})},[]),m=n.useCallback((a,l)=>{p(u=>u.map(t=>t.id===a?{...t,quantity:l}:t))},[]),x=()=>{p([])},C=({dateTime:a,cep:l,location:u,number:t,complement:h,observations:d})=>{if(o.length===0){alert("Por favor, selecione pelo menos um item.");return}const b=`Olá! Quero orçamento para:

${o.map(S=>`${S.quantity}x ${S.name} - ${S.variation}`).join(`
`)}

Data e horário: ${a}
CEP: ${l}
Local do evento: ${u}, ${t} ${h?`- ${h}`:""}
Observações: ${d}`,j=`https://wa.me/5567984684460?text=${encodeURIComponent(b)}`;window.open(j,"_blank")};return e.jsx(e.Fragment,{children:e.jsxs(me,{children:[e.jsx(ue,{children:e.jsxs(ge,{children:["Nossos ",e.jsx("br",{})," serviços e brinquedos"]})}),e.jsx(he,{children:W.map(a=>e.jsx(A,{id:a.id,images:a.images,title:a.name,alt:a.alt,options:a.options,isSelected:o.some(l=>l.productId===a.id),selectedOptions:o.filter(l=>l.productId===a.id),onCardClick:y,onOptionClick:c},a.id))}),e.jsx(ae,{selectedItems:o,onSend:C,onClear:x,onQuantityChange:m})]})})};export{Ve as default};
