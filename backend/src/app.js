import express from "express";
import cors from "cors";

// Importa a conexão com o mongoDB
import connectDB from "./config/db.js";

// Importa as rotas da aplicação
import clienteRoutes from "./routes/clienteRoutes.js";

// Cria a instância do Express
const app = express();

// Permite que o frontend acesse a API
app.use(cors());

// Permite receber JSON no body das requisições
app.use(express.json());

// Conecta ao banco de dados ao iniciar a aplicação
connectDB();

// Define o prefixo das rotas
app.use("/clientes", clienteRoutes);

export default app;
