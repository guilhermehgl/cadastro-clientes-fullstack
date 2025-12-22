import { useState } from "react";
import { calcularIdade } from "../../utils/calcularIdade";
import ClientFind from "./ClientFind";
import "./clientTable.css";

// Componente da tabela de clientes com busca, ordenação e paginação
export default function ClientTable({ clientes }) {
  const [busca, setBusca] = useState("");            // Filtro de busca por nome
  const [ordem, setOrdem] = useState("asc");         // Ordem alfabética
  const [itensPorPagina, setItensPorPagina] = useState(10); // Quantidade de itens por página
  const [paginaAtual, setPaginaAtual] = useState(1); // Controle da página atual

  // Filtra clientes pelo nome
  function filtrarClientes() {
    return clientes.filter(cliente =>
      cliente.nome.toLowerCase().includes(busca.toLowerCase())
    );
  }

  // Ordena clientes sem alterar o array original
  function ordenarClientes(lista) {
    return [...lista].sort((a, b) =>
      ordem === "asc"
        ? a.nome.localeCompare(b.nome)
        : b.nome.localeCompare(a.nome)
    );
  }

  // Aplica filtro + ordenação
  const clientesProcessados = ordenarClientes(filtrarClientes());

  // Cálculo da paginação
  const totalPaginas = Math.ceil(clientesProcessados.length / itensPorPagina);
  const inicio = (paginaAtual - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;
  const clientesPaginados = clientesProcessados.slice(inicio, fim);

  return (
    <div className="tabela-container">
      {/* Componente de busca e ordenação */}
      <ClientFind
        busca={busca}
        setBusca={setBusca}
        ordem={ordem}
        setOrdem={setOrdem}
        setPaginaAtual={setPaginaAtual}
      />

      {/* Controle de quantidade de itens por página */}
      <div className="tabela-controles">
        <label>
          Mostrar
          <select
            value={itensPorPagina}
            onChange={e => {
              setItensPorPagina(Number(e.target.value));
              setPaginaAtual(1); // Sempre resetar para a primeira página
            }}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </label>
      </div>

      {/* Tabela desktop */}
      <table className="tabela-clientes">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
          {clientesPaginados.map(cliente => (
            <tr key={cliente._id}>
              <td>{cliente.nome}</td>
              <td>{cliente.email}</td>
              <td>{calcularIdade(cliente.dataNascimento) || "-"}</td>
              <td>{cliente.cpf}</td>
            </tr>
          ))}

          {clientesPaginados.length === 0 && (
            <tr>
              <td colSpan="4" className="sem-registros">
                Nenhum cliente encontrado
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Lista mobile */}
      <div className="lista-mobile">
        {clientesPaginados.map(cliente => (
          <div className="card-cliente" key={cliente._id}>
            <p><strong>Nome:</strong> {cliente.nome}</p>
            <p><strong>Email:</strong> {cliente.email}</p>
            <p><strong>Idade:</strong> {calcularIdade(cliente.dataNascimento)}</p>
            <p><strong>CPF:</strong> {cliente.cpf}</p>
          </div>
        ))}

        {clientesPaginados.length === 0 && (
          <p className="sem-registros">Nenhum cliente encontrado</p>
        )}
      </div>

      {/* Paginação */}
      <div className="paginacao">
        <button
          disabled={paginaAtual === 1}
          onClick={() => setPaginaAtual(p => p - 1)}
        >
          ◀ Anterior
        </button>

        <span>
          Página {paginaAtual} de {totalPaginas}
        </span>

        <button
          disabled={paginaAtual === totalPaginas}
          onClick={() => setPaginaAtual(p => p + 1)}
        >
          Próxima ▶
        </button>
      </div>
    </div>
  );
}
