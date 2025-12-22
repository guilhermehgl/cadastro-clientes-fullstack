export function validarEmail(email) {
  if (!email.includes("@") || !email.includes(".com")) {
    return "Email inválido. Use um formato válido (ex: nome@email.com).";
  }

  return "";
}