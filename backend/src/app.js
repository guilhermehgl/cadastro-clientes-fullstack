import express from "express";
import cors from "cors";

// Importa a conexão com o mongoDB
import connectDB from "./config/db.js";

// Importa as rotas da aplicação
import clienteRoutes from "./routes/clienteRoutes.js";

// Cria a instância do Express
const app = express();

// Permite acesso apenas das origens configuradas
const allowedOrigins = (process.env.CORS_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const corsOptions = {
  origin(origin, callback) {
    // Permite requests sem origin (curl, Postman, health checks)
    if (!origin) {
      return callback(null, true);
    }

    // Sem lista configurada, libera todas as origens (ambiente local)
    if (allowedOrigins.length === 0) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Origem não permitida pelo CORS"));
  }
};

app.use(cors(corsOptions));

// Permite receber JSON no body das requisições
app.use(express.json());

// Conecta ao banco de dados ao iniciar a aplicação
connectDB();

// Rota raiz para indicar que a API está ativa
app.get("/", (_req, res) => {
  res.json({
    message: "Backend está online"
  });
});

// Evita 404 de favicon ao abrir a API no navegador
app.get("/favicon.ico", (_req, res) => {
  res.status(204).end();
});

// Rota de status para validação rápida de saúde da API
app.get("/status", (_req, res) => {
  res.json({
    message: "Backend está online"
  });
});

// Define o prefixo das rotas
app.use("/clientes", clienteRoutes);

export default app;
