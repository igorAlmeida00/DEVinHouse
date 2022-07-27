/* Crie uma arrow function que recebe um array de números 
e retorne um array contendo apenas números positivos*/

let array = [1, 5, -15, -4, -2, 18];

const positivo = array => array.filter(array => array > 0);
console.log(positivo(array));