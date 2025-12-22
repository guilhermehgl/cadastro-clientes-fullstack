import "dotenv/config";
import app from "./app.js";

// Porta do backend
const PORT = process.env.PORT || 3000;

// Iniciar servidor HTTP
app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});
