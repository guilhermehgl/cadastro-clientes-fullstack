# Frontend – Cadastro de Clientes

Aplicação frontend desenvolvida em React com Vite, responsável pela interface de cadastro, listagem e visualização de clientes, consumindo uma API REST.

O projeto foi estruturado com foco em componentização, organização de código e boas práticas, simulando um cenário real de aplicação profissional.

---

## Tecnologias Utilizadas

- React (com Hooks)
- Vite
- JavaScript (JSX)
- Axios
- CSS puro
- ESLint

---

## Pré-requisitos

- Node.js (v18 ou superior recomendado)
- Backend do projeto em execução

---

## Estrutura do Projeto
```
frontend/
├── src/
│   ├── components/
│   │   ├── ClientForm/
│   │   │   ├── ClientForm.jsx
│   │   │   └── ClientForm.css
│   │   ├── ClientTable/
│   │   │   ├── ClientTable.jsx
│   │   │   └── ClientTable.css
│   │   ├── ClientFind/
│   │   │   ├── ClientFind.jsx
│   │   │   └── ClientFind.css
│   │   └── Modal/
│   │       ├── Modal.jsx
│   │       └── Modal.css
│   ├── services/
│   │   └── api.js
│   ├── utils/
│   │   ├── calcularIdade.js
│   │   ├── cpf.js
│   │   ├── email.js
│   │   ├── nome.js
│   │   └── obrigatorio.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

---

## Configuração do Ambiente

Este projeto utiliza variáveis de ambiente.

Crie um arquivo ".env" na raiz do frontend com base no arquivo ".env.example" e preencha com seus próprios valores:

.env
VITE_API_URL=http://localhost:3000

## Instalação de dependencias 

Executar no terminal "npm install"

## Como rodar o projeto

Executar no terminal "npm run dev"
Aplicação será iniciada em: http://localhost:5173

## Funcionalidades

- Cadastro de clientes
- Validação de dados no frontend
- Listagem de clientes em tabela
- Pesquisa por nome
- Ordenação alfabética (A–Z / Z–A)
- Paginação
- Visualização responsiva (desktop e mobile)
- Modal para cadastro

## Organização e arquitetura

- App.jsx: componente raiz, responsável por:

    - controlar o estado global da aplicação
    - buscar dados da API
    - gerenciar abertura/fechamento do modal

- Components: cada responsabilidade isolada em um componente

- Utils: regras de negócio e validações reutilizáveis

- Services: comunicação com a API centralizada

- CSS por componente: facilita manutenção e leitura

Autor: Guilherme Guimarães
Projeto desenvolvido para fins de aprendizado e portfólio, e demonstração de boas práticas em React.

Obs: O frontend depende do backend para funcionamento completo. O projeto foi desenvolvido com foco em aprendizado e portfólio.