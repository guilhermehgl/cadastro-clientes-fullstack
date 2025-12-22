# Full Stack - Cadastro de Clientes

Aplicação Full Stack para cadastro, listagem e visualização de clientes, desenvolvida com React no frontend e Node.js + Express + MongoDB no backend.

O projeto foi estruturado seguindo boas práticas de organização, componentização e separação de responsabilidades, simulando um cenário real de aplicação profissional.

---

## Visão Geral

- Frontend: Interface para cadastro e consulta de clientes
- Backend: API REST responsável por persistência e validações
- Banco de Dados: MongoDB

---

## Tecnologiias utilizadas

- Frontend
    - React
    - Vite
    - JavaScript
    - Axios
    - CSS
    - ESLint

- Backend
    - Node.js
    - Express
    - MongoDB
    - Mongoose
    - CORS
    - Dotenv

---

## Estrutura do Projeto
```
Cadastro_Clientes/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── server.js
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── README.md
│
└── README.md
```
---

## Pré-requisitos

- Node.js (v18 ou superior recomendado)
- MongoDB

--- 

## Como rodar o projeto

No terminal:

"cd backend"
"npm start"

Em outro terminal:

"cd frontend"
"npm run dev"

Verificar README de cada pasta para mais informações.

## Funcionalidades

- Cadastro de clientes
- Validação de dados backend e frontend
- Listagem de clientes em tabela
- Pesquisa por nome
- Ordenação alfabética (A–Z / Z–A)
- Paginação
- Visualização responsiva (desktop e mobile)
- Modal para cadastro

## Padrões e Boas Práticas

- Separação clara entre frontend e backend
- Componentização no React
- Regras de negócio isoladas em utils
- Comunicação com API centralizada
- Uso de variáveis de ambiente
- Código comentado organizado e legível

## Observações

- Projeto desenvolvido para fins educacionais e demonstração de boas práticas em desenvolvimento Full Stack.
- O frontend depende do backend para funcionamento completo
- As validações são duplicadas propositalmente (UX + segurança)
- Projeto desenvolvido com foco em aprendizado e portfólio profissional

## Autoria
- Guilherme Henrique Guimarães Lima