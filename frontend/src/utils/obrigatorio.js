const nomesAmigaveis = {
  nome: "Nome",
  email: "Email",
  dataNascimento: "Data de nascimento",
  cpf: "CPF"
};

export function validarCampos(campos) {
  for (const [campo, valor] of Object.entries(campos)) {
    if (!valor || valor.toString().trim() === "") {
      const nomeCampo = nomesAmigaveis[campo] || campo;
      return `O campo ${nomeCampo} é obrigatório.`;
    }
  }
  return "";
}
