import { useState } from "react";
import ClientForm from "./components/ClientForm/ClientForm";
import ClientTable from "./components/ClientTable/ClientTable";
import Modal from "./components/Modal/Modal";
import "./App.css"

function App() {
  // Estado que guarda a lista de clientes
  const clientes = [];
  // Controle de abertura do modal
  const [modalAberto, setModalAberto] = useState(false);

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
          onClose={() => setModalAberto(false)} // Fecha modal ao concluir
        />
      </Modal>
    </div>
  );
}

export default App;
