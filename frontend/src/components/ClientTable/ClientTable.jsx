import { useState } from "react";
import { calcularIdade } from "../../utils/calcularIdade";
import ClientFind from "./ClientFind";
import "./clientTable.css";

export default function ClientTable({ clientes }) {
  const [busca, setBusca] = useState("");
  const [ordem, setOrdem] = useState("asc");
  const [itensPorPagina, setItensPorPagina] = useState(10);
  const [paginaAtual, setPaginaAtual] = useState(1);

  // 🔎 FILTRO
  function filtrarClientes() {
    return clientes.filter(cliente =>
      cliente.nome.toLowerCase().includes(busca.toLowerCase())
    );
  }

  // 🔃 ORDENAÇÃO (sem mutar o array original)
  function ordenarClientes(lista) {
    return [...lista].sort((a, b) =>
      ordem === "asc"
        ? a.nome.localeCompare(b.nome)
        : b.nome.localeCompare(a.nome)
    );
  }

  // 🔎 + 🔃
  const clientesProcessados = ordenarClientes(filtrarClientes());

  // 📄 PAGINAÇÃO
  const totalPaginas = Math.ceil(
    clientesProcessados.length / itensPorPagina
  );

  const inicio = (paginaAtual - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;

  const clientesPaginados = clientesProcessados.slice(inicio, fim);

  return (
    <div className="tabela-container">
      {/* BUSCA + ORDEM */}
      <ClientFind
        busca={busca}
        setBusca={setBusca}
        ordem={ordem}
        setOrdem={setOrdem}
        setPaginaAtual={setPaginaAtual}
      />

      {/* CONTROLE DE QUANTIDADE */}
      <div className="tabela-controles">
        <label>
          Mostrar
          <select
            value={itensPorPagina}
            onChange={e => {
              setItensPorPagina(Number(e.target.value));
              setPaginaAtual(1);
            }}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </label>
      </div>

      {/* TABELA */}
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

      {/* LISTA (MOBILE) */}
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

      {/* PAGINAÇÃO */}
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
