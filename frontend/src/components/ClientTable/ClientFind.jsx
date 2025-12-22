import "./clientFind.css";

export default function ClientFind({
  busca,
  setBusca,
  ordem,
  setOrdem,
  setPaginaAtual
}) {
  function handleBuscaChange(e) {
    setBusca(e.target.value);
    setPaginaAtual(1);
  }

  function toggleOrdem() {
    setOrdem(prev => (prev === "asc" ? "desc" : "asc"));
    setPaginaAtual(1);
  }

  return (
    <div className="client-find">
      <input
        type="text"
        placeholder="Pesquisar por nome..."
        value={busca}
        onChange={handleBuscaChange}
        aria-label="Pesquisar cliente pelo nome"
      />

      <button type="button" onClick={toggleOrdem}>
        {ordem === "asc" ? "A–Z" : "Z–A"}
      </button>
    </div>
  );
}
