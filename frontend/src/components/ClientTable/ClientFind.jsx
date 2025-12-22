import "./clientFind.css";

// Componente de pesquisa e ordenação de clientes
export default function ClientFind({
  busca,           // Valor atual do input de busca
  setBusca,        // Função para atualizar a busca
  ordem,           // Ordem atual (asc ou desc)
  setOrdem,        // Função para alternar a ordem
  setPaginaAtual   // Função para resetar página ao filtrar/ordenar
}) {
  // Atualiza a busca e reseta a página para a primeira
  function handleBuscaChange(e) {
    setBusca(e.target.value);
    setPaginaAtual(1);
  }

  // Alterna entre ordem crescente e decrescente
  function toggleOrdem() {
    setOrdem(prev => (prev === "asc" ? "desc" : "asc"));
    setPaginaAtual(1); // Sempre volta para a primeira página
  }

  return (
    <div className="client-find">
      {/* Campo de busca */}
      <input
        type="text"
        placeholder="Pesquisar por nome..."
        value={busca}
        onChange={handleBuscaChange}
        aria-label="Pesquisar cliente pelo nome"
      />

      {/* Botão para alternar ordem alfabética */}
      <button type="button" onClick={toggleOrdem}>
        {ordem === "asc" ? "A–Z" : "Z–A"}
      </button>
    </div>
  );
}
