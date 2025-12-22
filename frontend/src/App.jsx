import { useEffect, useState } from "react";
import { api } from "./services/api";
import ClientForm from "./components/ClientForm/ClientForm";
import ClientTable from "./components/ClientTable/ClientTable";
import Modal from "./components/Modal/Modal"; 
import "./App.css"

function App() {
  // Estado que guarda a lista de clientes
  const [clientes, setClientes] = useState([]);
  // Controle de abertura do modal
  const [modalAberto, setModalAberto] = useState(false);

  // Função para buscar clientes do backend
  async function carregarClientes() {
    const res = await api.get("/clientes");
    setClientes(res.data);
  }

  // Carrega os clientes assim que o componente monta
  useEffect(() => {
    carregarClientes();
  }, []);

  return (
    <div>
      <div className="superior">
        <h1>Cadastro de Clientes</h1>

        {/* Botão que abre o modal com o formulário */}
        <button className="button-cadastrar"
          onClick={() => setModalAberto(true)}
        >
          Cadastrar novo cliente
        </button>
      </div>

      {/* Exibe a tabela com os clientes */}
      <ClientTable clientes={clientes} />

      {/* Modal com o formulário de cadastro */}
      <Modal
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
      >
        <ClientForm
          atualizar={carregarClientes} // Atualiza a lista após cadastro
          onClose={() => setModalAberto(false)} // Fecha modal ao concluir
        />
      </Modal>
    </div>
  );
}

export default App;
