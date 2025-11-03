import{d as l,g as ne,l as G,r as s,j as r,F as se,a as ie,b as le}from"./index-B3r96xtZ.js";const ce=l.section`
  padding: 4rem 2rem;
  background-color: var(--color-background);

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`,de=l.div`
  text-align: center;
  margin-bottom: 2rem;
`,pe=l.h2`
  color: var(--color-cyan);
  font-size: clamp(2rem, 6vw, 3rem);
  font-family: var(--font-main);
  font-weight: 700;
`,me=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto 0 auto;
`;var N={exports:{}},W,U;function ue(){if(U)return W;U=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return W=e,W}var A,Y;function ge(){if(Y)return A;Y=1;var e=ue();function p(){}function u(){}return u.resetWarningCache=p,A=function(){function n(v,a,i,c,o,f){if(f!==e){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}n.isRequired=n;function m(){return n}var x={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:m,element:n,elementType:n,instanceOf:m,node:n,objectOf:m,oneOf:m,oneOfType:m,shape:m,exact:m,checkPropTypes:u,resetWarningCache:p};return x.PropTypes=x,x},A}var K;function be(){return K||(K=1,N.exports=ge()()),N.exports}var he=be();const t=ne(he),fe=l.div`
  background-color: #fff;
  border: 2px solid ${({$isMissingOption:e})=>e?"var(--color-red)":"#37b1f8"};
  border-radius: 30px;
  padding: 1rem;
  text-align: center;
  transition: all 0.25s ease;

  h2 {
    color: var(--color-cyan);
  }

  ${({$isSelected:e})=>e&&G`
      box-shadow: 0 8px 16px 0 #37b1f873;
    `}
`,xe=l.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
`,ve=l.div`
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: ${({$currentIndex:e})=>`translateX(-${e*100}%)`};
`,ye=l.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  flex-shrink: 0;
`,X=l.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 0.8rem;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.2s ease,
    opacity 0.2s ease;
  opacity: 0.9;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    opacity: 1;
  }

  ${({direction:e})=>e==="prev"?G`
          left: 10px;
        `:G`
          right: 10px;
        `}
`,Ce=l.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`,je=l.button`
  background-color: ${({$isSelected:e})=>e?"var(--color-cyan)":"#f0f0f0"};
  color: ${({$isSelected:e})=>e?"#fff":"#333"};
  border: 1px solid ${({$isSelected:e})=>e?"var(--color-cyan)":"#ccc"};
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({$isSelected:e})=>e?"var(--color-cyan)":"#e0e0e0"};
    border-color: ${({$isSelected:e})=>e?"var(--color-cyan)":"#aaa"};
  }
`,Se=(e,p=3500)=>{const[u,n]=s.useState(0),[m,x]=s.useState(!1),v=s.useRef(null);return s.useEffect(()=>(m?v.current=setInterval(()=>{n(c=>(c+1)%e)},p):clearInterval(v.current),()=>clearInterval(v.current)),[m,e,p]),{currentImageIndex:u,handleNextImage:c=>{c.stopPropagation(),n(o=>(o+1)%e)},handlePrevImage:c=>{c.stopPropagation(),n(o=>(o-1+e)%e)},setIsHovered:x}},L=s.memo(({id:e,images:p,title:u,alt:n,options:m,isSelected:x,selectedOptions:v,onCardClick:a,onOptionClick:i})=>{const{currentImageIndex:c,handleNextImage:o,handlePrevImage:f,setIsHovered:d}=Se(p.length),C=(b,g)=>{b.stopPropagation(),i(e,g)};return r.jsxs(fe,{$isSelected:x,onClick:()=>a(e),onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),role:"button",tabIndex:"0","aria-label":`Selecionar ${u}`,children:[r.jsxs(xe,{children:[r.jsx(ve,{$currentIndex:c,children:p.map((b,g)=>r.jsx(ye,{src:b,alt:`${n} ${g+1}`,loading:"lazy"},g))}),p.length>1&&r.jsxs(r.Fragment,{children:[r.jsx(X,{direction:"prev",onClick:f,"aria-label":"Imagem anterior",children:r.jsx(se,{})}),r.jsx(X,{direction:"next",onClick:o,"aria-label":"Próxima imagem",children:r.jsx(ie,{})})]})]}),r.jsx("h2",{children:u}),x&&r.jsx(Ce,{role:"group","aria-label":`Opções para ${u}`,children:m.map(b=>r.jsx(je,{$isSelected:v.some(g=>g.variation===b.label),onClick:g=>C(g,b),"aria-pressed":v.some(g=>g.variation===b.label),"aria-label":b.label,children:b.label},b.label))})]})});L.displayName="Card";L.propTypes={id:t.string.isRequired,images:t.arrayOf(t.string).isRequired,title:t.string.isRequired,alt:t.string.isRequired,options:t.arrayOf(t.shape({label:t.string.isRequired})).isRequired,isSelected:t.bool.isRequired,selectedOptions:t.arrayOf(t.shape({variation:t.string.isRequired})).isRequired,onCardClick:t.func.isRequired,onOptionClick:t.func.isRequired};const V=l.section`
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
`,we=l.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,Pe=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,R=l.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,M=l.input`
  flex: 1;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid ${({$isInvalid:e})=>e?"var(--color-red)":"#ccc"};
  height: 40px;
  font-family: inherit;
  font-size: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`,Z=l.textarea`
  flex: 1;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid ${({$isInvalid:e})=>e?"var(--color-red)":"#ccc"};
  min-height: 40px;
  height: auto;
  font-family: inherit;
  font-size: 1rem;
  overflow: hidden;
  resize: vertical;

  @media (max-width: 768px) {
    width: 100%;
  }
`,q=l.span`
  color: var(--color-red);
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: block;
`,$e=l.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`,ee=l.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background-color: ${({$clear:e})=>e?"transparent":"var(--color-green)"};
  border: 2px solid ${({$clear:e})=>e?"var(--color-yellow)":"var(--color-green)"};
  border-radius: 30px;
  color: ${({$clear:e})=>e?"var(--color-yellow)":"#fff"};
  font-family: 'Montserrat', sans-serif;
  font-weight: 600; /* SemiBold */
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: ${({$clear:e})=>e?"var(--color-yellow)":"#218838"};
    border-color: ${({$clear:e})=>e?"var(--color-yellow)":"#1e7e34"};
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
`,Ee=l.p`
  text-align: center;
  color: var(--color-text);
  font-size: 1.1rem;
  padding: 1rem;
  border: 1px dashed #ccc;
  border-radius: 8px;
  margin-top: 1rem;
`,Te=l.div`
  background-color: var(--color-green);
  color: var(--color-white);
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 1rem;
  font-weight: 600;
`,Re=l.div`
  background-color: var(--color-cyan);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ke=l.input`
  width: 50px;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 0.9rem;
`,re=({item:e,onQuantityChange:p})=>r.jsxs(Re,{children:[e.name," - ",e.variation,r.jsx(ke,{type:"number",min:"1",value:e.quantity,onChange:u=>p(e.id,parseInt(u.target.value))})]});re.propTypes={item:t.shape({id:t.string.isRequired,name:t.string.isRequired,variation:t.string,quantity:t.number.isRequired}).isRequired,onQuantityChange:t.func.isRequired};const Ie=(e,p)=>{const[u,n]=s.useState(""),[m,x]=s.useState(""),[v,a]=s.useState(""),[i,c]=s.useState(""),[o,f]=s.useState(""),[d,C]=s.useState(""),[b,g]=s.useState(""),[O,_]=s.useState(!1),[w,S]=s.useState(!1),[P,j]=s.useState(""),[B,$]=s.useState(""),[D,F]=s.useState(""),[y,Q]=s.useState(""),[oe,J]=s.useState(""),k=s.useRef(null);return s.useEffect(()=>{const h=new Date;h.setHours(h.getHours()+1);const E=h.getFullYear(),I=(h.getMonth()+1).toString().padStart(2,"0"),T=h.getDate().toString().padStart(2,"0"),z=h.getHours().toString().padStart(2,"0"),te=h.getMinutes().toString().padStart(2,"0");g(`${E}-${I}-${T}T${z}:${te}`)},[]),s.useEffect(()=>{k.current&&(k.current.style.height="0px",k.current.style.height=k.current.scrollHeight+"px !important")},[d]),{dateTime:u,setDateTime:n,cep:m,setCep:x,location:v,setLocation:a,number:i,setNumber:c,complement:o,setComplement:f,observations:d,setObservations:C,minDateTime:b,isSending:O,showConfirmation:w,dateTimeError:P,cepError:B,locationError:D,numberError:y,itemsError:oe,observationsRef:k,handleCepChange:async h=>{const E=h.target.value.replace(/\D/g,"");if(x(E),$(""),E.length===8)try{const T=await(await fetch(`https://viacep.com.br/ws/${E}/json/`)).json();if(T.erro)$("CEP não encontrado."),a("");else{const z=`${T.logradouro}, ${T.bairro}, ${T.localidade} - ${T.uf}`;a(z)}}catch{$("Erro ao buscar CEP."),a("")}},handleSend:()=>{j(""),$(""),F(""),Q(""),J("");let h=!1;e.length===0&&(J("Por favor, selecione pelo menos um item."),h=!0);const E=new Date(u),I=new Date(b);u?E<I&&(j("A data e o horário devem ser pelo menos uma hora a partir de agora."),h=!0):(j("Por favor, informe a data e o horário."),h=!0),m||($("Por favor, informe o CEP."),h=!0),v||(F("Por favor, informe o local do evento."),h=!0),i||(Q("Por favor, informe o número."),h=!0),!h&&(_(!0),setTimeout(()=>{p({dateTime:u,cep:m,location:v,number:i,complement:o,observations:d}),_(!1),S(!0),setTimeout(()=>{S(!1)},3e3)},2e3))}}},ae=({selectedItems:e,onSend:p,onClear:u,onQuantityChange:n})=>{const{dateTime:m,setDateTime:x,cep:v,location:a,setLocation:i,number:c,setNumber:o,complement:f,setComplement:d,observations:C,setObservations:b,minDateTime:g,isSending:O,showConfirmation:_,dateTimeError:w,cepError:S,locationError:P,numberError:j,itemsError:B,observationsRef:$,handleCepChange:D,handleSend:F}=Ie(e,p);return e.length===0?r.jsx(V,{role:"region","aria-live":"polite",children:r.jsx(Ee,{children:"Nenhum item selecionado. Clique em um card e faça sua alocação!"})}):r.jsxs(V,{role:"region","aria-live":"polite",children:[B&&r.jsx(q,{id:"items-error",children:B}),r.jsx(we,{role:"list","aria-labelledby":"items-error",children:e.map(y=>r.jsx(re,{item:y,onQuantityChange:n},y.id))}),r.jsxs(Pe,{"aria-labelledby":"form-title",children:[r.jsx("h2",{id:"form-title",style:{display:"none"},children:"Detalhes do Orçamento"}),r.jsxs(R,{children:[r.jsx(M,{type:"datetime-local",value:m,min:g,onChange:y=>x(y.target.value),$isInvalid:!!w,"aria-invalid":!!w,"aria-describedby":w?"datetime-error":void 0}),w&&r.jsx(q,{id:"datetime-error",children:w})]}),r.jsxs(R,{children:[r.jsx(M,{type:"text",placeholder:"CEP",value:v,onChange:D,maxLength:"8",$isInvalid:!!S,"aria-invalid":!!S,"aria-describedby":S?"cep-error":void 0}),S&&r.jsx(q,{id:"cep-error",children:S})]}),r.jsxs(R,{children:[r.jsx(M,{type:"text",placeholder:"Número",value:c,onChange:y=>o(y.target.value),$isInvalid:!!j,"aria-invalid":!!j,"aria-describedby":j?"number-error":void 0}),j&&r.jsx(q,{id:"number-error",children:j})]}),r.jsx(R,{children:r.jsx(M,{type:"text",placeholder:"Complemento (opcional)",value:f,onChange:y=>d(y.target.value),"aria-label":"Complemento"})}),r.jsxs(R,{children:[r.jsx(Z,{placeholder:"Local do evento",value:a,onChange:y=>i(y.target.value),$isInvalid:!!P,"aria-invalid":!!P,"aria-describedby":P?"location-error":void 0,disabled:!0}),P&&r.jsx(q,{id:"location-error",children:P})]}),r.jsx(R,{children:r.jsx(Z,{ref:$,placeholder:"Observações",value:C,onChange:y=>b(y.target.value),"aria-label":"Observações"})}),r.jsxs($e,{children:[r.jsx(ee,{onClick:F,disabled:O,"aria-label":"Enviar orçamento via WhatsApp",children:O?"Enviando...":r.jsxs(r.Fragment,{children:[r.jsx(le,{}),"Enviar"]})}),r.jsx(ee,{$clear:!0,onClick:()=>{window.confirm("Tem certeza que deseja limpar todos os itens selecionados?")&&u()},"aria-label":"Limpar seleção",children:"Limpar"})]})]}),_&&r.jsx(Te,{role:"status","aria-live":"assertive",children:"Sua solicitação foi enviada! Redirecionando para o WhatsApp..."})]})};ae.propTypes={selectedItems:t.arrayOf(t.shape({id:t.string.isRequired,name:t.string.isRequired,variation:t.string,quantity:t.number.isRequired})).isRequired,onSend:t.func.isRequired,onClear:t.func.isRequired,onQuantityChange:t.func.isRequired};const qe="/monteiro-locacoes/assets/ball_pit-DhzHaIKw.jpg",Oe="/monteiro-locacoes/assets/ball_tent-BasdM_9K.jpg",_e="/monteiro-locacoes/assets/bouncy_castle-ChuHBkFq.jpg",Be="/monteiro-locacoes/assets/bouncy_race-B-MdeE-b.jpg",Fe="/monteiro-locacoes/assets/bouncy_slide-BXWCTBK_.png",Me="/monteiro-locacoes/assets/bouncy_soccer-B06nYjRu.jpg",De="/monteiro-locacoes/assets/bouncy_war-CPqU4Lpv.png",ze="/monteiro-locacoes/assets/chairs-BSNbmXkz.png",Ne="/monteiro-locacoes/assets/face_painting-ClLn_OMm.jpg",We="/monteiro-locacoes/assets/party_combo-8pAk37gh.jpg",Ae="/monteiro-locacoes/assets/slide_blue-B-On3EPx.jpg",He="/monteiro-locacoes/assets/slide_pink-BOExkgWs.jpg",Ge="/monteiro-locacoes/assets/slide_yellow-Bd1w2a5f.jpg",Le="/monteiro-locacoes/assets/arcade-B3KPNdhU.jpg",Qe="/monteiro-locacoes/assets/ping_pong_table-CpG85ZQ2.jpg",Je="/monteiro-locacoes/assets/pool_table-CJMPEwiE.jpg",Ue="/monteiro-locacoes/assets/popcorn_cotton_candy_cart-C3xtqTh1.jpg",Ye="/monteiro-locacoes/assets/popsicle_cart-57ikGAmF.jpg",H=[{id:"piscinas-e-barracas",name:"Piscinas e Barracas",images:[qe,Oe],alt:"Piscinas e Barracas",options:[{label:"Piscina - 1x1m"},{label:"Piscina - 2x2m"},{label:"Barraca - 5x1m"}]},{id:"pula-pula",name:"Pula-Pula",images:[_e],alt:"Pula-Pula",options:[{label:"1,40m"},{label:"2,44m"},{label:"3,05m"},{label:"4,27m"}]},{id:"mesas-e-cadeiras",name:"Mesas + Cadeiras",images:[ze],alt:"Mesas + Cadeiras",options:[{label:"8 a 5 Jogos"},{label:"36 a 50 Jogos"},{label:"51 a 100 Jogos"},{label:"Quantidade Específica"}]},{id:"escorregadores",name:"Escorregadores",images:[Ae,He,Ge],alt:"Escorregadores",options:[{label:"Escorregador + Gangorra"},{label:"Escorregador Rosa/Roxo"},{label:"Escorregador Amarelo/Azul"},{label:"Escorregador Azul/Vermelho"}]},{id:"inflaveis",name:"Infláveis",images:[Be,Fe,Me,De],alt:"Infláveis",options:[{label:"Tobagã Pequeno"},{label:"Tobagã Médio"},{label:"Tobogã Grande"},{label:"Corrida Maluca"},{label:"Futebol de Sabão"},{label:"Guerra de Cotonete"},{label:"Splash Slide"},{label:"Touro Mecânico"}]},{id:"jogos-de-mesa",name:"Jogos de Mesa",images:[Le,Qe,Je],alt:"Jogos de Mesa",options:[{label:"Fliperama"},{label:"Mesa de Sinuca"},{label:"Mesa de Ping Pong"},{label:"Pebolim"},{label:"Air Hockey"}]},{id:"carrinhos-e-barracas",name:"Carrinhos e Barracas",images:[Ue,Ye],alt:"Carrinhos e Barracas",options:[{label:"Algodão Doce"},{label:"Pipoca"},{label:"Picolé"}]},{id:"servicos",name:"Serviços",images:[Ne],alt:"Serviços",options:[{label:"Pintura Facial"},{label:"Monitor(a) de Brinquedo"},{label:"Recreador(a)"}]},{id:"combo-festa",name:"Combo Festa",images:[We],alt:"Combo Festa",options:[{label:"Barraca 5x1+ Escorregador + Gangorra"},{label:"Piscina 1x1+ Escorregador + Gangorra"},{label:"Pula Pula 2,44m + Escorregador + Gangorra"},{label:"Pula Pula - Piscina 1x1 + 10 Jogos de mesa"}]}],Ze=()=>{const[e,p]=s.useState([]),u=s.useCallback(a=>{p(i=>{if(i.filter(o=>o.productId===a).length>0)return i.filter(o=>o.productId!==a);{const o=H.find(f=>f.id===a);if(o&&o.options.length>0){const f=o.options[0],d=`${a}-${f.label}`;return[...i,{id:d,productId:a,name:o.name,variation:f.label,quantity:1}]}}return i})},[]),n=s.useCallback((a,i)=>{p(c=>{const o=`${a}-${i.label}`;if(c.findIndex(d=>d.id===o)!==-1)return c.filter(d=>d.id!==o);{const d=H.find(C=>C.id===a);return[...c,{id:o,productId:a,name:d.name,variation:i.label,quantity:1}]}})},[]),m=s.useCallback((a,i)=>{p(c=>c.map(o=>o.id===a?{...o,quantity:i}:o))},[]),x=()=>{p([])},v=({dateTime:a,cep:i,location:c,number:o,complement:f,observations:d})=>{if(e.length===0){alert("Por favor, selecione pelo menos um item.");return}const C=`Olá! Quero orçamento para:

${e.map(g=>`${g.quantity}x ${g.name} - ${g.variation}`).join(`
`)}

Data e horário: ${a}
CEP: ${i}
Local do evento: ${c}, ${o} ${f?`- ${f}`:""}
Observações: ${d}`,b=`https://wa.me/5567984684460?text=${encodeURIComponent(C)}`;window.open(b,"_blank")};return r.jsx(r.Fragment,{children:r.jsxs(ce,{children:[r.jsx(de,{children:r.jsx(pe,{children:" Nossos serviços"})}),r.jsx(me,{children:H.map(a=>r.jsx(L,{id:a.id,images:a.images,title:a.name,alt:a.alt,options:a.options,isSelected:e.some(i=>i.productId===a.id),selectedOptions:e.filter(i=>i.productId===a.id),onCardClick:u,onOptionClick:n},a.id))}),r.jsx(ae,{selectedItems:e,onSend:v,onClear:x,onQuantityChange:m})]})})};export{Ze as default};
