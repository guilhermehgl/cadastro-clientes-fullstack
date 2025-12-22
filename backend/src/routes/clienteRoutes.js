import { Router } from "express";

// Importa as funções do controller
import {
  criarCliente,
  listarClientes
} from "../controllers/clientController.js";

const router = Router();

// POST /clientes
router.post("/", criarCliente);

// GET /clientes
router.get("/", listarClientes);

export default router;
