// Funcao nao nomeada, que recebe numero e devolda string

let parImpar = function(numero){
  let resultado;

  if(numero % 2 == 0) {
    resultado = "Par";
  } else if(numero % 2 == 1) {
    resultado = "Impar";
  } else{
    resultado = "Invalido";
  }

  return resultado;
}