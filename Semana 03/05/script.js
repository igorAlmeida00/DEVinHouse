const textos = ["PRIMEIRO ", " SEGUNDO ", " TERCEIRO ", " QUARTO "];

function adicionaTextos(listaDeTextos) {
  const divTextos = document.getElementById("textos")
  for (texto of listaDeTextos) {
    const add = document.createElement("span")
    add.innerText = texto
    add.style.color = "black"
    add.style.background = "yellow"
    add.style.fontSize = "5rem";
    divTextos.appendChild(add)
  }
}

 adicionaTextos(textos)

