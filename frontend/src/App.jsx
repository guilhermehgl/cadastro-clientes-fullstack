import { useEffect, useState } from "react";
import { api } from "./services/api";
import ClientForm from "./components/ClientForm/ClientForm";
import ClientTable from "./components/ClientTable/ClientTable";
import Modal from "./components/Modal/Modal"; 
import "./App.css"

function App() {
  const [clientes, setClientes] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);

  async function carregarClientes() {
    const res = await api.get("/clientes");
    setClientes(res.data);
  }

  useEffect(() => {
    carregarClientes();
  }, []);

  return (
    <div>

     <div className="superior">
       <h1>Cadastro de Clientes</h1>

      {/* BOTÃO PARA ABRIR O FORMULÁRIO */}
      <button className="button-cadastrar"
        onClick={() => setModalAberto(true)}
      >
       Cadastrar novo cliente
      </button>
     </div>

      {/* TABELA */}
      <ClientTable clientes={clientes} />

      {/* MODAL COM FORMULÁRIO */}
      <Modal
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
      >
        <ClientForm
          atualizar={carregarClientes}
          onClose={() => setModalAberto(false)}
        />
      </Modal>
    </div>
  );
}

export default App;
