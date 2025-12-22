export function calcularIdade(dataNascimento) {
  if (!dataNascimento) return "";

  let nascimento;

  if (dataNascimento.includes("T")) {
    nascimento = new Date(dataNascimento);
  } else {
    const [ano, mes, dia] = dataNascimento.split("-").map(Number);
    nascimento = new Date(ano, mes - 1, dia);
  }

  if (isNaN(nascimento)) return "";

  const hoje = new Date();
  let idade = hoje.getFullYear() - nascimento.getFullYear();

  const niver =
    hoje.getMonth() > nascimento.getMonth() ||
    (hoje.getMonth() === nascimento.getMonth() &&
      hoje.getDate() >= nascimento.getDate());

  if (!niver) idade--;

  return idade;
}
