/*Ex05 - Crie um código javascript que irá juntar os dois arrays 
abaixo e coloque esse array concatenado em outra variável:
let array1 = [1,3,4,5,3,7];
let array2 = [1,2,6,4,8,5];
Após fazer a junção remova os itens que se repetem usando
o .includes ou o .filter
Após isso ordene por ordem crescente.*/


let array1 = [1,3,4,5,3,7];
let array2 = [1,2,6,4,8,5];

let lista = array1.concat(array2);

lista.sort();

let verificar = lista.filter(function(atual, seguinte) {
  return lista.indexOf(atual) === seguinte
});

console.log(verificar);

