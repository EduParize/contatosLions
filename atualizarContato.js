import { prompt, contatos, exibirMenu } from "./contatos.js";

export function atualizarContato() {
    if(contatos.length==0){
      
        console.log("Nenhum contato para atualizar!") // SAÍDA DE DADOS:
        exibirMenu()
    }
  contatos.forEach((contato) => {
     
    console.log(`ID: ${contato.id}, Nome: ${contato.nome},`); // SAÍDA DE DADOS:
    console.log("--------------------------"); // SAÍDA DE DADOS:
  });
   
  console.log("Qual contato deseja atualizar: (ID)"); // SAÍDA DE DADOS:

  let idAtualizar = prompt("> "); // ENTRADA DE DADOS:
  idAtualizar = parseInt(idAtualizar);
  const contatoEscolhido = contatos.find(contato => contato.id === idAtualizar);

  if (!contatoEscolhido) {
     
    console.log("Escolha um ID valido!"); // SAÍDA DE DADOS:
    atualizarContato();
  } else {
     
    console.log(`Editando ${contatoEscolhido.nome}`) // SAÍDA DE DADOS:
    console.log("Insira o novo nome que deseja cadastrar: "); // SAÍDA DE DADOS:
    
    let newNome = prompt("> ");  // ENTRADA DE DADOS:
 
    console.log("Insira o novo telefone que deseja cadastrar: "); // SAÍDA DE DADOS:
   
    let newTelefone = prompt("> ");   // ENTRADA DE DADOS:
    const telefoneFormatado2 = `(${newTelefone.substring(0,2)})${newTelefone.substring(2,7)}-${newTelefone.substring(7)}`
     
    console.log("Insira o novo email que deseja cadastrar: "); // SAÍDA DE DADOS:

    let newEmail = prompt("> ");   // ENTRADA DE DADOS:

    if (isNaN(newTelefone) || newTelefone.length != 11) {
        console.clear()
         
      console.log("Informacoes invalidas, insira novamente!"); // SAÍDA DE DADOS:
      atualizarContato();
    } else {
        console.clear()
      contatoEscolhido.nome = newNome;
      contatoEscolhido.telefone = telefoneFormatado2;
      contatoEscolhido.email = newEmail;
 
      console.log(`Contato atualizado para ${newNome}`); // SAÍDA DE DADOS:
      exibirMenu();
    }
  }
}
