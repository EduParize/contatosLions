import {
  prompt,
  contatos,
  exibirMenu,
  proximoId,
  criarEAdicionarContato,
} from "./contatos.js";

export function adicionarContato() {
  console.log("Insira o nome do contato que deseja adicionar: "); // SAÍDA DE DADOS:
  let nomeContato = prompt("> "); // ENTRADA DE DADOS:

  console.log(
    `Insira o numero de telefone do contato ${nomeContato} que deseja cadastrar: (apenas numeros) ` // SAÍDA DE DADOS:
  );
  let telefoneContato = prompt("> "); // ENTRADA DE DADOS:

  const telefoneFormatado = `(${telefoneContato.substring(
    0,
    2
  )})${telefoneContato.substring(2, 7)}-${telefoneContato.substring(7)}`;

  console.log(
    `Insira o email do contato ${nomeContato} que deseja cadastrar: ` // SAÍDA DE DADOS:
  );
  let emailContato = prompt("> "); // ENTRADA DE DADOS:

  console.clear();
  if (isNaN(telefoneContato) || telefoneContato.length != 11) {
    console.log("Informacoes invalidas, insira novamente!"); // SAÍDA DE DADOS:
    adicionarContato();
  } else {
    criarEAdicionarContato(nomeContato, telefoneFormatado, emailContato);
    exibirMenu();
  }
}
