import Cliente from "../models/cliente.js";

// Cria um novo cliente
export async function criarCliente(req, res) {
  try {
    // Cria o cliente com os dados enviados no body
    const cliente = await Cliente.create(req.body);

    // Retorna o cliente criado
    res.status(201).json(cliente);
  } catch (error) {
    // Log para facilitar diagnóstico em produção (Render logs)
    console.error("Erro ao criar cliente:", {
      message: error.message,
      code: error.code,
      keyValue: error.keyValue,
      errors: error.errors
    });

    // Erro de duplicidade (email/cpf únicos)
    if (error.code === 11000) {
      const campoDuplicado = Object.keys(error.keyValue || {})[0];
      return res.status(400).json({
        error: `Já existe cliente com este ${campoDuplicado}.`
      });
    }

    // Erro de validação do Mongoose
    if (error.name === "ValidationError") {
      const primeiraMensagem = Object.values(error.errors || {})[0]?.message;
      return res.status(400).json({
        error: primeiraMensagem || "Dados inválidos para cadastro."
      });
    }

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
