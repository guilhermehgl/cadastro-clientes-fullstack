# Backend - Cadastro de Clientes

API REST em Node.js/Express para criação e listagem de clientes, com persistência em MongoDB via Mongoose.

## Stack

- Node.js
- Express 5
- MongoDB Atlas
- Mongoose
- CORS
- Dotenv

## Responsabilidades da API

- Receber e validar requisições JSON
- Persistir clientes no MongoDB
- Garantir unicidade de `email` e `cpf`
- Retornar mensagens de erro claras para consumo do frontend
- Controlar origens permitidas via CORS

## Estrutura Técnica

```plaintext
backend/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── clientController.js
│   ├── models/
│   │   └── cliente.js
│   ├── routes/
│   │   └── clienteRoutes.js
│   ├── app.js
│   └── server.js
├── .env.example
├── package.json
└── README.md
```

## Modelo de Dados (`Cliente`)

Campos principais:

- `nome`: obrigatório, mínimo de 3 caracteres
- `email`: obrigatório e único
- `dataNascimento`: data
- `cpf`: obrigatório e único
- `timestamps`: `createdAt` e `updatedAt`

## Variáveis de Ambiente

Crie `backend/.env`:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/clientesdb
CORS_ORIGINS=http://localhost:5173,https://cadastro-clientes-fullstack.vercel.app,https://*.vercel.app
```

### Sobre `CORS_ORIGINS`

- Lista separada por vírgula
- Suporta wildcard (ex.: `https://*.vercel.app`)
- Requests sem `Origin` (Postman/curl/health checks) são permitidas

## Executar Localmente

### Requisitos

- Node.js 18+
- npm 9+
- MongoDB local ou Atlas configurado

### Comandos

```bash
npm install
npm start
```

API em: `http://localhost:3000`

## Endpoints

Base local: `http://localhost:3000`

| Método | Rota | Descrição | Retorno |
|---|---|---|---|
| `GET` | `/` | status simples da API | `200` |
| `GET` | `/status` | health check | `200` |
| `GET` | `/clientes` | lista clientes | `200` |
| `POST` | `/clientes` | cria cliente | `201`, `400` |

### Exemplo `POST /clientes`

```json
{
  "nome": "Joao Silva",
  "email": "joao@email.com",
  "dataNascimento": "1995-08-10",
  "cpf": "123.456.789-00"
}
```

## Tratamento de Erros

- `400` para erro de validação do Mongoose
- `400` para duplicidade (`code 11000`) com mensagem específica de campo
- `500` para falhas inesperadas na listagem

## Scripts Disponíveis

- `npm start`: inicia servidor em produção/local

## Pontos de Evolução

- Adicionar camada de serviços para regras de negócio
- Implementar testes de integração (Supertest)
- Documentar API com Swagger/OpenAPI

## Autor

**Guilherme Henrique Guimarães Lima**

- GitHub: [@guilhermehgl](https://github.com/guilhermehgl)
