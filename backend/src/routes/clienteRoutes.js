import { Router } from "express";

// Importa as funções do controller
import { criarCliente } from "../controllers/clientController.js";

const router = Router();

// POST /clientes
router.post("/", criarCliente);

// GET /clientes bloqueado para não expor dados cadastrados
router.get("/", (_req, res) => {
  res.status(403).json({
    error: "Listagem de clientes desativada"
  });
});

export default router;
