import { contatos, exibirMenu, prompt } from "./contatos.js";

export function removerContato(){

    if(contatos.length==0){
       
        console.log("Nenhum contato para remover") // SAÍDA DE DADOS:
        exibirMenu()
    }
    contatos.forEach((contato) => {
       
        console.log(`ID: ${contato.id}, Nome: ${contato.nome},`); // SAÍDA DE DADOS:
        console.log("--------------------------"); // SAÍDA DE DADOS:
      });
      
      console.log("Qual contato deseja remover ou 0 para voltar: (ID)"); // SAÍDA DE DADOS:
      let idRemover = prompt("> ");  // ENTRADA DE DADOS:
      idRemover = parseInt(idRemover);
      if(idRemover==0){
        console.clear()
        exibirMenu()
      }
      const indexDoContato = contatos.findIndex(contato => contato.id === idRemover);
      if (indexDoContato === -1) {
        console.clear();
         
        console.log("ID inválido! Nenhum contato encontrado com este ID."); // SAÍDA DE DADOS:
        removerContato();
      } else {
        const nomeRemovido = contatos[indexDoContato].nome;
        contatos.splice(indexDoContato,1)
        console.clear()
         
        console.log(`"${nomeRemovido}" removido com sucesso"`) // SAÍDA DE DADOS:
        exibirMenu()
      }
}