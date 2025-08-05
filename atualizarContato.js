import { prompt, contatos, exibirMenu } from "./contatos.js";

export function atualizarContato() {
    if(contatos.length==0){
        console.log("Nenhum contato para atualizar!")
        exibirMenu()
    }
  contatos.forEach((contato) => {
    console.log(`ID: ${contato.id}, Nome: ${contato.nome},`);
    console.log("--------------------------");
  });
  console.log("Qual contato deseja atualizar: (ID)");
  let idAtualizar = prompt("> ");
  idAtualizar = parseInt(idAtualizar);
  const contatoEscolhido = contatos.find(contato => contato.id === idAtualizar);

  if (!contatoEscolhido) {
    console.log("Escolha um ID valido!");
    atualizarContato();
  } else {
    console.log(`Editando ${contatoEscolhido.nome}`)
    console.log("Insira o novo nome que deseja cadastrar: ");
    let newNome = prompt("> ");

    console.log("Insira o novo telefone que deseja cadastrar: ");
    let newTelefone = prompt("> ");
    const telefoneFormatado2 = `(${newTelefone.substring(0,2)})${newTelefone.substring(2,7)}-${newTelefone.substring(7)}`
    console.log("Insira o novo email que deseja cadastrar: ");
    let newEmail = prompt("> ");

    if (isNaN(newTelefone) || newTelefone.length != 11) {
        console.clear()
      console.log("Informacoes invalidas, insira novamente!");
      atualizarContato();
    } else {
        console.clear()
      contatoEscolhido.nome = newNome;
      contatoEscolhido.telefone = telefoneFormatado2;
      contatoEscolhido.email = newEmail;

      console.log(`Contato atualizado para ${newNome}`);
      exibirMenu();
    }
  }
}
