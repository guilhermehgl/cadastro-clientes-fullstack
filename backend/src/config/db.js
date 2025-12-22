import mongoose from "mongoose";

// Função responsável por conectar no MongoDB
export default function connectDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB conectado com sucesso");
    })
    .catch((error) => {
      console.error("Erro ao conectar no MongoDB:", error.message);
    });
}
