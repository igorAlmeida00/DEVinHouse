/*Crie 2 funções, ambas recebem um número e retorna true ou false:
- a primeira verifica se é par;
- a segunda verifica se é ímpar.

Em seguida crie uma função que recebe como parâmetros: 
um array de números e uma função callback.
Essa função principal deverá ser capaz de filtrar os 
números e retornar um array de números filtrados 
(independente de qual seja a função callback).

Dica: o filtro poderá ser de números ímpares ou pares. */

const verificarPar = function(numero) {
  if(numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const verificarImpar = function(numero) {
  if(numero % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

const filtraNumeros = function(numeros, condicaoFiltro) {
  let numerosFiltrados = [];
  numeros.forEach(function(numero) {
    if(condicaoFiltro(numero)) {
      numerosFiltrados.push(numero);
    }
  })
  return numerosFiltrados;
}
