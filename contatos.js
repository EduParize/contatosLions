import PromptSync from "prompt-sync";
import { adicionarContato } from "./adicionarContato.js";
import { listarContatos } from "./listarContatos.js";
import { atualizarContato } from "./atualizarContato.js";
import { removerContato } from "./removerContato.js";
export const prompt = PromptSync({ sigint: true });
export let contatos = [];
export let proximoId = 1;

export function criarEAdicionarContato(nome, telefone, email) {
    const contato = {
      id: proximoId,      
      nome: nome,
      telefone: telefone,
      email: email,
    };
    proximoId++;          
    contatos.push(contato);  
    
    console.log(`Contato "${nome}" adicionado com sucesso!`); // SAÍDA DE DADOS:
  }
  
export function exibirMenu() {
  
  console.log(
    "=========MENU=========\n1-Adicionar Contato\n2-Listar Contatos\n3-Atualizar Contato\n4-Deletar Contato\n0-Sair do programa" // SAÍDA DE DADOS:
  );
   
  console.log("Insira a opção desejada."); // SAÍDA DE DADOS:
  let opcaoMenu = prompt("> ");  // ENTRADA DE DADOS:
  opcaoMenu = parseInt(opcaoMenu, 10);
  switch (opcaoMenu) {
    case 1:
      console.clear();
      adicionarContato();
      break;
    case 2:
      console.clear();
      listarContatos();
      break;
    case 3:
      console.clear();
      atualizarContato();
      break;
    case 4:
        console.clear()
      removerContato();
      break;
    case 0:
      process.exit();
    default:
     
      console.log("Insira uma opção válida!\n"); // SAÍDA DE DADOS:
      exibirMenu();
  }
}
exibirMenu();
