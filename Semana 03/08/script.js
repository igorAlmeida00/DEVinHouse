/*Crie um site com os seguintes requisitos:

um campo de texto (input) onde o usuário irá digitar uma mensagem

três botões:

um botão “adicionar”, que no momento do clique insira a mensagem na tela

um botão “salvar mensagem”, que no momento do clique salve as informações no localStorage
opcional: se o texto estiver vazio (length), deve mostrar uma mensagem ao usuário solicitando a inserção de algum texto.

um botão “mostrar mensagem”, que após o recarregamento da página, no momento do clique busque a mensagem no localStorage e exiba na tela
opcional: se não houver mensagem cadastrada no localStorage, deve mostrará na tela: “não há ítens salvos”*/

function adicionaMensagem(){
  const input = document.getElementById("input-mensagem")
  const valorDoInput = input.value

  const mensagem = document.getElementById("aparece-mensagem")
  mensagem.innerHTML = valorDoInput
}

function salvaMensagem(){
  const input = document.getElementById("input-mensagem")
  const valorDoInput = input.value
  const mensagem = document.getElementById("aparece-mensagem")
  const valorDaMensagem = mensagem.innerHTML

  if (valorDoInput.length === 0 && valorDaMensagem.length === 0) {
    alert("Por favor, informe uma mensagem")
  }
  else {
    localStorage.setItem("mensagem", valorDoInput)
    alert("Mensagem salva com sucesso")
  }
}

function mostraMensagem() {
  const mensagemDoLocalStorage = localStorage.getItem("mensagem")
  const divApareceMensagem = document.getElementById("aparece-mensagem")
  if (mensagemDoLocalStorage === null) {
    divApareceMensagem.innerHTML = "Não há mensagem salva"
  }
  else {
    divApareceMensagem.innerHTML = mensagemDoLocalStorage
  }
}