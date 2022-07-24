//Faça um site com uma lista de itens (por exemplo, de brinquedos), que tenha:
//um campo de input do item um botão para criar um item na lista

function criaBrinquedo(){
  const input = document.getElementById("input-brinquedo")
  const valorDoInput = input.value

  const brinquedo = document.createElement("li")
  brinquedo.innerText = valorDoInput

  const listaDeBrinquedos = document.getElementById("lista-brinquedos")
  listaDeBrinquedos.appendChild(brinquedo)
}