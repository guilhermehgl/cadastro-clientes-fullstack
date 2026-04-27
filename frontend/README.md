# Frontend - Cadastro de Clientes

Aplicação React responsável pela interface do sistema, consumo da API e experiência do usuário no fluxo de cadastro/listagem de clientes.

## Stack

- React 19
- Vite
- Axios
- JavaScript (ESM/JSX)
- CSS
- ESLint

## Responsabilidades do Frontend

- Renderização da interface principal
- Abertura/fechamento de modal de cadastro
- Envio de dados para a API (`POST /clientes`)
- Busca de clientes (`GET /clientes`)
- Busca local por nome, ordenação e paginação
- Exibição de mensagens de erro vindas do backend

## Estrutura Técnica

```plaintext
frontend/
├── src/
│   ├── components/
│   │   ├── ClientForm/
│   │   ├── ClientTable/
│   │   └── Modal/
│   ├── services/
│   │   └── api.js
│   ├── utils/
│   │   ├── cpf.js
│   │   ├── email.js
│   │   ├── nome.js
│   │   ├── obrigatorio.js
│   │   └── calcularIdade.js
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── package.json
└── README.md
```

## Fluxo da Aplicação

1. `App.jsx` carrega clientes via `api.get("/clientes")`
2. `ClientTable` recebe os dados e aplica busca/ordenação/paginação
3. `ClientForm` valida e envia dados via `api.post("/clientes")`
4. Após sucesso, o formulário chama atualização da lista

## Variáveis de Ambiente

Crie `frontend/.env`:

```env
VITE_API_URL=http://localhost:3000
```

## Executar Localmente

### Requisitos

- Node.js 18+
- npm 9+
- Backend do projeto em execução

### Comandos

```bash
npm install
npm run dev
```

Aplicação: `http://localhost:5173`

## Scripts Disponíveis

- `npm run dev`: ambiente de desenvolvimento
- `npm run build`: build de produção
- `npm run preview`: pré-visualização do build
- `npm run lint`: análise estática com ESLint

## Integração com Backend

- Base URL configurada em `src/services/api.js`
- Timeout padrão de `10s`
- Erros de API são tratados no formulário com mensagens amigáveis

## Pontos de Evolução

- Testes de interface (React Testing Library)
- Estados de loading/erro globais
- Melhor tratamento de falhas de rede na listagem inicial

## Autor

**Guilherme Henrique Guimarães Lima**

- GitHub: [@guilhermehgl](https://github.com/guilhermehgl)
