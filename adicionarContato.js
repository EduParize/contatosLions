import { prompt, contatos, exibirMenu, proximoId,criarEAdicionarContato } from "./contatos.js";

export function adicionarContato() {
  console.log("Insira o nome do contato que deseja adicionar: ");
  let nomeContato = prompt("> ");

  console.log(
    `Insira o numero de telefone do contato ${nomeContato} que deseja cadastrar: (apenas numeros) `
  );
  let telefoneContato = prompt("> ");

  const telefoneFormatado = `(${telefoneContato.substring(0,2)})${telefoneContato.substring(2,7)}-${telefoneContato.substring(7)}`
  console.log(
    `Insira o email do contato ${nomeContato} que deseja cadastrar: `
  );
  let emailContato = prompt("> ");

  console.clear();
  if (isNaN(telefoneContato) || telefoneContato.length != 11) {
    console.log("Informacoes invalidas, insira novamente!");
    adicionarContato();
  } else {
    criarEAdicionarContato(nomeContato, telefoneFormatado, emailContato)
    exibirMenu();
  }
}
