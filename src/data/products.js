import ballPit from '../assets/ball_pit.jpg';
import ballTent from '../assets/ball_tent.jpg';
import bouncyCastle from '../assets/bouncy_castle.jpg';
import bouncyRace from '../assets/bouncy_race.jpg';
import bouncySlide from '../assets/bouncy_slide.png';
import bouncySoccer from '../assets/bouncy_soccer.jpg';
import bouncyWar from '../assets/bouncy_war.png';
import chairs from '../assets/chairs.png';
import facePainting from '../assets/face_painting.jpg';
import partyCombo from '../assets/party_combo.jpg';
import slideBlue from '../assets/slide_blue.jpg';
import slidePink from '../assets/slide_pink.jpg';
import slideYellow from '../assets/slide_yellow.jpg';
import arcade from '../assets/arcade.jpg';
import pingPongTable from '../assets/ping_pong_table.jpg';
import poolTable from '../assets/pool_table.jpg';
import popcornCottonCandyCart from '../assets/popcorn_cotton_candy_cart.jpg';
import popsicleCart from '../assets/popsicle_cart.jpg';

export const items = [
  {
    id: 'piscinas-e-barracas',
    name: 'Piscinas e Barracas',
    images: [ballPit, ballTent],
    alt: 'Piscinas e Barracas',
    options: [
      { label: 'Piscina - 1x1m' },
      { label: 'Piscina - 2x2m' },
      { label: 'Barraca - 5x1m' },
    ],
  },
  {
    id: 'pula-pula',
    name: 'Pula-Pula',
    images: [bouncyCastle],
    alt: 'Pula-Pula',
    options: [{ label: '1,40m' }, { label: '2,44m' }, { label: '3,05m' }, { label: '4,27m' }],
  },
  {
    id: 'mesas-e-cadeiras',
    name: 'Mesas + Cadeiras',
    images: [chairs],
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
    images: [slideBlue, slidePink, slideYellow],
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
    images: [bouncyRace, bouncySlide, bouncySoccer, bouncyWar],
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
    images: [arcade, pingPongTable, poolTable],
    alt: 'Jogos de Mesa',
    options: [{ label: 'Fliperama' }, { label: 'Mesa de Sinuca' }, { label: 'Mesa de Ping Pong' }],
  },
  {
    id: 'carrinhos-e-barracas',
    name: 'Carrinhos e Barracas',
    images: [popcornCottonCandyCart, popsicleCart],
    alt: 'Carrinhos e Barracas',
    options: [{ label: 'Algodão Doce' }, { label: 'Pipoca' }, { label: 'Picolé' }],
  },
  {
    id: 'servicos',
    name: 'Serviços',
    images: [facePainting],
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
    images: [partyCombo],
    alt: 'Combo Festa',
    options: [
      { label: 'Piscina + Cama Elástica (P)' },
      { label: 'Piscina + Cama Elástica (M)' },
      { label: 'Piscina + Cama Elástica (G)' },
    ],
  },
];
