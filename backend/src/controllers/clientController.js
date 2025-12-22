import Cliente from "../models/cliente.js";

// Cria um novo cliente
export async function criarCliente(req, res) {
  try {
    // Cria o cliente com os dados enviados no body
    const cliente = await Cliente.create(req.body);

    // Retorna o cliente criado
    res.status(201).json(cliente);
  } catch (error) {
    // Erros de validação ou duplicidade
    res.status(400).json({
      error: error.message
    });
  }
}

// Lista todos os clientes cadastrados
export async function listarClientes(req, res) {
  try {
    const clientes = await Cliente.find();

    res.json(clientes);
  } catch (error) {
    // Erro inesperado no servidor
    res.status(500).json({
      error: error.message
    });
  }
}
