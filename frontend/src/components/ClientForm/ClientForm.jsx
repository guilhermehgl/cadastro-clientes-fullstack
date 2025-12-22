import { useState } from "react";
import { api } from "../../services/api";
import { validarNome } from "../../utils/nome";
import { validarEmail } from "../../utils/email";
import { mascararCPF, validarCPF } from "../../utils/cpf";
import { validarCampos } from "../../utils/obrigatorio";
import "./clientForm.css";

export default function ClientForm({ atualizar, onClose }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setErro("");

    // 🔹 Validação de campos obrigatórios
    const erroCampos = validarCampos({
      nome,
      email,
      dataNascimento,
      cpf
    });

    if (erroCampos) return setErro(erroCampos);

    // 🔹 Validações específicas
    const validacoes = [
      validarNome(nome),
      validarEmail(email),
      validarCPF(cpf)
    ];

    const erroValidacao = validacoes.find(Boolean);
    if (erroValidacao) return setErro(erroValidacao);

    try {
      setLoading(true);

      await api.post("/clientes", {
        nome,
        email,
        dataNascimento,
        cpf
      });

      // 🔹 Limpa formulário
      setNome("");
      setEmail("");
      setDataNascimento("");
      setCpf("");

      atualizar();
      if (onClose) onClose();
    } catch (error) {
      setErro("Erro ao cadastrar cliente. Tente novamente.");
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
          onChange={e => setCpf(mascararCPF(e.target.value))}
        />

        {erro && <span className="erro">{erro}</span>}

        <button className="but1" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}
