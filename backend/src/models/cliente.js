import mongoose from "mongoose";

// Schema define a estrutura e regras dos dados
const ClienteSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      minlength: 3
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    dataNascimento: {
      type: Date
    },
    cpf: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    // Cria automaticamente createdAt e updatedAt
    timestamps: true
  }
);

export default mongoose.model("Cliente", ClienteSchema);
