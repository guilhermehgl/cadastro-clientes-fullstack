export function validarNome(nome) {
  const partes = nome.trim().split(/\s+/);

  if (partes.length < 2) {
    return "Informe nome e sobrenome.";
  }

  const invalido = partes.some(p => p.length < 2);

  if (invalido) {
    return "Cada nome deve ter no mínimo 2 caracteres.";
  }

  return "";
}
