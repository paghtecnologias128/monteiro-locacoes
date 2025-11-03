import ballTent from '../assets/ball_tent.png';
import chairs from '../assets/chairs.png';
import partyCombo from '../assets/party_combo.png';
import facePainting from '../assets/face_painting.png';
import ballPit from '../assets/ball_pit.png';
import bouncyCastle from '../assets/bouncy_castle.png';

export const items = [
  {
    id: 'piscinas-e-barracas',
    name: 'Piscinas e Barracas',
    image: ballPit,
    alt: 'Piscinas e Barracas',
    options: [{ label: '1x1m' }, { label: '2x2m' }, { label: '5x1m' }],
  },
  {
    id: 'pula-pula',
    name: 'Pula-Pula',
    image: bouncyCastle,
    alt: 'Pula-Pula',
    options: [{ label: '1,40m' }, { label: '2,44m' }, { label: '3,05m' }, { label: '4,27m' }],
  },
  {
    id: 'mesas-e-cadeiras',
    name: 'Mesas + Cadeiras',
    image: chairs,
    alt: 'Mesas + Cadeiras',
    options: [
      { label: '8 a 5 Jogos' },
      { label: '36 a 50 Jogos' },
      { label: '51 a 100 Jogos' },
      { label: 'Quantidade Específica' },
    ],
  },
  {
    id: 'escorregadores',
    name: 'Escorregadores',
    image: partyCombo,
    alt: 'Escorregadores',
    options: [
      { label: 'Escorregador + Gangorra' },
      { label: 'Escorregador Rosa/Roxo' },
      { label: 'Escorregador Amarelo/Azul' },
      { label: 'Escorregador Azul/Vermelho' },
    ],
  },
  {
    id: 'inflaveis',
    name: 'Infláveis',
    image: partyCombo,
    alt: 'Infláveis',
    options: [
      { label: 'Tobagã Pequeno' },
      { label: 'Tobagã Médio' },
      { label: 'Corrida Maluca' },
      { label: 'Futebol de Sabão' },
      { label: 'Guerra de Cotonete' },
    ],
  },
  {
    id: 'jogos-de-mesa',
    name: 'Jogos de Mesa',
    image: bouncyCastle,
    alt: 'Jogos de Mesa',
    options: [{ label: 'Fliperama' }, { label: 'Mesa de Sinuca' }, { label: 'Mesa de Ping Pong' }],
  },
  {
    id: 'carrinhos-e-barracas',
    name: 'Carrinhos e Barracas',
    image: ballTent,
    alt: 'Carrinhos e Barracas',
    options: [{ label: 'Algodão Doce' }, { label: 'Pipoca' }, { label: 'Picolé' }],
  },
  {
    id: 'servicos',
    name: 'Serviços',
    image: facePainting,
    alt: 'Serviços',
    options: [
      { label: 'Pintura Facial' },
      { label: 'Monitor(a) de Brinquedo' },
      { label: 'Recreador(a)' },
    ],
  },
  {
    id: 'combo-festa',
    name: 'Combo Festa',
    image: partyCombo,
    alt: 'Combo Festa',
    options: [
      { label: 'Piscina + Cama Elástica (P)' },
      { label: 'Piscina + Cama Elástica (M)' },
      { label: 'Piscina + Cama Elástica (G)' },
    ],
  },
];
