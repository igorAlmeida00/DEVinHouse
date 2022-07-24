//Exercício 04 da lista
let alunos = ["Gio", "Gustavo", "Julia", "Adriano", "Alex", "Sandro"];

let button = document.getElementById("button");

button.addEventListener("click", function () {
  let valor = document.getElementById("valor").value;

  excluirItem(valor);
});

function excluirItem(item) {
  let indice = alunos.indexOf(item);
  if (indice != -1) {
    alunos.splice(indice, 1);
  }

  console.log(alunos);
}