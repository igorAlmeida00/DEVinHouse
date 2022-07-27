/*Utilize o if ternário para construir uma função que recebe o número 
do dias e retorna se pertence a primeira ou a segunda quinzena*/

let quinzena = numero => numero >= 1 && numero <= 15 ? "Primeira Quinzena" : "Segunda Quinzena";

console.log(quinzena(30));