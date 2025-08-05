import { contatos, exibirMenu, prompt } from "./contatos.js";

export function listarContatos() {
    if(contatos.length<=0){
      
        console.log("Nenhum contato registrado!") // SAÍDA DE DADOS:
        exibirMenu()
    }
  contatos.forEach((contato) => {
     
    console.log(`ID: ${contato.id}, Nome: ${contato.nome}, Telefone: // SAÍDA DE DADOS:
${contato.telefone}, Email: ${contato.email}`);
 
    console.log("--------------------------"); // SAÍDA DE DADOS:
  });
  exibirMenu();
}
