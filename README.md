# Monteiro Locações Landing Page

A landing page moderna e responsiva para a Monteiro Locações, construída com React e Styled-Components, focada em performance, acessibilidade e uma experiência de usuário agradável.

## 🚀 Funcionalidades

- **Design Moderno e Responsivo**: Adapta-se perfeitamente a qualquer tamanho de tela (desktop, tablet, mobile).
- **Animações de Scroll**: Efeitos de surgimento suave para as seções ao rolar a página, utilizando `framer-motion`.
- **Otimização SEO**: Títulos, meta-descrições e `alt` tags para melhor ranqueamento em motores de busca.
- **Acessibilidade**: Implementação de `aria-labels` e semântica HTML para uma navegação inclusiva.
- **Tratamento de Erros**: `ErrorBoundary` para capturar e exibir mensagens amigáveis em caso de falhas inesperadas.
- **Lazy Loading**: Carregamento sob demanda de componentes e imagens para otimizar a performance inicial.
- **Qualidade de Código**: Configuração de ESLint e Prettier para manter o código limpo, consistente e livre de erros.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Styled-Components**: Para estilização de componentes com CSS-in-JS.
- **Framer Motion**: Biblioteca para animações fluidas e declarativas.
- **React Intersection Observer**: Para detectar a visibilidade de elementos na viewport.
- **React Icons**: Biblioteca de ícones populares.
- **Vite**: Ferramenta de build rápido para projetos web.
- **ESLint**: Linter para identificar e reportar padrões problemáticos no código.
- **Prettier**: Formatador de código para manter a consistência.

## 🎨 Paleta de Cores

- Fundo principal: `#f5f5f5`
- Fundo escuro (seção de agendamento): `#002a3a`
- Rodapé: `#000000`
- Azul-ciano (destaques, botões e títulos): `#00bfff`
- Amarelo (slogan): `#ffcc00`
- Branco: `#ffffff`
- Texto cinza-escuro: `#333333`

## ✍️ Fontes Utilizadas

- **Títulos de Destaque**: `Bungee Inline`
- **Textos Corridos e Subtítulos**: `Sansita`

## 🚀 Como Começar

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) (que inclui o npm) instalado em sua máquina.

### Instalação

1.  Clone este repositório:
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd monteiro-locacoes
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```

### Rodando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

### Construindo para Produção

Para gerar a versão otimizada para produção:

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

### Linting e Formatação

Para verificar a qualidade do código:

```bash
npm run lint
```

Para formatar o código automaticamente:

```bash
npm run format
```

## 📂 Estrutura do Projeto

```
monteiro-locacoes/
├── public/
├── src/
│   ├── assets/             # Imagens e outros recursos estáticos
│   ├── components/         # Componentes React reutilizáveis
│   │   ├── AgendarSection/
│   │   ├── Card/
│   │   ├── ErrorBoundary/
│   │   ├── Footer/
│   │   ├── HeroSection/
│   │   ├── Produtos/
│   │   └── ScrollAnimation/
│   ├── styles/             # Estilos globais
│   ├── App.jsx             # Componente principal da aplicação
│   └── main.jsx            # Ponto de entrada da aplicação
├── .eslintrc.cjs           # Configuração do ESLint
├── .prettierrc.cjs         # Configuração do Prettier
├── index.html              # Arquivo HTML principal
├── package.json            # Dependências e scripts do projeto
└── vite.config.js          # Configuração do Vite
```

## 🚀 Implantação

Após executar `npm run build`, a pasta `dist/` conterá todos os arquivos estáticos necessários para implantar seu site em qualquer serviço de hospedagem (ex: Netlify, Vercel, GitHub Pages).