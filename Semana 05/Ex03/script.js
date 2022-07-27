/*Crie uma arrow function que recebe um array de 
números e calcula a média deles */

const array = [10, 70, 60, 30];
let somaArray = 0, resultadoMedia;

const mediaArray = (array = []) => {
  array.forEach(function (item) {
    somaArray += item;
    resultadoMedia = somaArray / array.length;
  });
  return resultadoMedia;
};
console.log(mediaArray(array));
