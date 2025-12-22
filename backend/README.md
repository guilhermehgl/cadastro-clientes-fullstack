# Backend – Cadastro de Clientes

API REST desenvolvida em Node.js com Express e MongoDB para cadastro e listagem de clientes.

O projeto foi estruturado seguindo boas práticas de organização e separação de responsabilidades, visando escalabilidade e manutenção.

---

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- CORS
- Dotenv

---

## Pré-requisitos

- Node.js (v18 ou superior recomendado)
- MongoDB rodando localmente ou em cloud (MongoDB Atlas)

## Estrutura do Projeto

```plaintext
backend/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── clientController.js
│   ├── models/
│   │   └── Cliente.js
│   ├── routes/
│   │   └── clienteRoutes.js
│   ├── app.js
│   └── server.js
├── .env.example
├── package.json
└── README.md
```

---

## Configuração do Ambiente

Este projeto utiliza variáveis de ambiente.

Crie um arquivo ".env" na raiz do backend com base no arquivo ".env.example" e preencha com seus próprios valores:

.env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/clientesdb

## Instalação de dependencias 

Executar no terminal "npm install"

## Como rodar o projeto

Executar no terminal "npm start"
Servidor será iniciado em: http://localhost:3000

## Endpoints da API

- Criar cliente
POST /clientes

{
  "nome": "João Silva",
  "email": "joao@email.com",
  "dataNascimento": "1995-08-10",
  "cpf": "12345678900"
}

- Listar clientes
GET /clientes

Retorna todos os clientes cadastrados.

## Validações 

As validações principais são feitas no backend para garantir integridade dos dados:

- Nome obrigatório
- Email obrigatório e único
- CPF obrigatório e único
- Estrutura validada via Mongoose

## Observações 

- Projeto desenvolvido para fins de aprendizado e portfólio, com foco em boas práticas de desenvolvimento backend.
- Este projeto foi estruturado pensando em ambiente profissional, seguindo padrões utilizados no mercado para APIs REST com Node.js.

## Autoria 
- Guilherme Henrique Guimarães Lima