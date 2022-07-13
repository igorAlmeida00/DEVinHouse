//Funcao nomeada que recebe array
// imprime cada elemento
//quantidade de elementos

function imprimeElementos(lista){
  for(item of lista) {
    console.log(item);
  }
}

function retornaElementos(lista) {
  let quantidade = "Quantidade de elementos: " + lista.length;
  return quantidade;
}

function programaElementos(lista = []) {
  imprimeElementos(lista);
  retornaElementos(lista)
}

programaElementos(["Banana", "Pera", "TV", "Agua"]);