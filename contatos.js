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
      id: proximoId,       // Usa o ID
      nome: nome,
      telefone: telefone,
      email: email,
    };
    proximoId++;           // Incrementa o ID (isso é permitido aqui!)
    contatos.push(contato);  // Adiciona à lista (permitido aqui!)
    console.log(`Contato "${nome}" adicionado com sucesso!`);
  }
  
export function exibirMenu() {
  console.log(
    "=========MENU=========\n1-Adicionar Contato\n2-Listar Contatos\n3-Atualizar Contato\n4-Deletar Contato\n0-Sair do programa"
  );
  console.log("Insira a opção desejada.");
  let opcaoMenu = prompt("> ");
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
      console.log("Insira uma opção válida!\n");
      exibirMenu();
  }
}
exibirMenu();
