import { useState } from "react";
import { api } from "../../services/api";
import { validarNome } from "../../utils/nome";
import { validarEmail } from "../../utils/email";
import { mascararCPF, validarCPF } from "../../utils/cpf";
import { validarCampos } from "../../utils/obrigatorio";
import "./clientForm.css";

// Componente do formulário de cliente
export default function ClientForm({ atualizar, onClose }) {
  // Estados do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [erro, setErro] = useState("");       // Para mensagens de erro
  const [loading, setLoading] = useState(false); // Indica se está enviando dados

  // Função chamada ao enviar o formulário
  async function handleSubmit(e) {
    e.preventDefault();
    setErro("");

    // Verifica se todos os campos obrigatórios foram preenchidos
    const erroCampos = validarCampos({ nome, email, dataNascimento, cpf });
    if (erroCampos) return setErro(erroCampos);

    // Valida campos individualmente (nome, email e CPF)
    const validacoes = [validarNome(nome), validarEmail(email), validarCPF(cpf)];
    const erroValidacao = validacoes.find(Boolean);
    if (erroValidacao) return setErro(erroValidacao);

    try {
      setLoading(true);

      // Envia dados para o backend
      await api.post("/clientes", { nome, email, dataNascimento, cpf });

      // Limpa os campos após envio
      setNome("");
      setEmail("");
      setDataNascimento("");
      setCpf("");

      if (atualizar) await atualizar(); // Atualiza a lista de clientes
      if (onClose) onClose(); // Fecha o modal se fornecido
    } catch (error) {
      const mensagemBackend = error?.response?.data?.error;
      setErro(mensagemBackend || "Erro ao cadastrar cliente. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="formulario-geral">
      <form className="formulario" onSubmit={handleSubmit}>
        <label>Nome Completo:</label>
        <input
          className="nome"
          placeholder="Nome completo"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />

        <label>Email:</label>
        <input
          className="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label>Data de nascimento:</label>
        <input
          className="date"
          type="date"
          value={dataNascimento}
          onChange={e => setDataNascimento(e.target.value)}
        />

        <label>CPF:</label>
        <input
          className="cpf"
          placeholder="CPF"
          value={cpf}
          onChange={e => setCpf(mascararCPF(e.target.value))} // Aplica máscara automaticamente
        />

        {/* Exibe erro caso exista */}
        {erro && <span className="erro">{erro}</span>}

        {/* Botão desabilitado enquanto estiver enviando */}
        <button className="but1" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}
