export function mascararCPF(valor) {
  return valor
    .replace(/\D/g, "")              // remove tudo que não é número
    .slice(0, 11)                    // limita a 11 dígitos
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

export function validarCPF(cpf) {
  const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

  if (!regexCPF.test(cpf)) {
    return "CPF inválido. Use o formato 000.000.000-00.";
  }

  return "";
}
