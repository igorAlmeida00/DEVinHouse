//Crie uma função que recebe um array de números e retorna a 
//quantidade de números pares e a quantidade de números ímpares.
//Em seguida imprima na tela uma string informando a quantidade 
//de valores informados, os ímpares e os pares
//(ex: A quantidade informada foi _, a de valores pares foi _, e 
//a de valores ímpares foi )

const calculaQuantidadeDeParesEImpares = function(array) {
  let quantidadeDePares = 0
  let quantidadeDeImpares = 0
  for (elemento of array) {
    if (elemento % 2 === 0) {
      quantidadeDePares++
    }
    else if (elemento % 2 === 1) {
      quantidadeDeImpares++
    }
  }
  return { quantidadeDePares, quantidadeDeImpares }
}

const imprimeQuantidadeDeItensEParesEImpares = function(array) {
  const { quantidadeDePares, quantidadeDeImpares } = calculaQuantidadeDeParesEImpares(array)
  console.log(`A quantidade informada foi ${array.length}, a de valores pares foi ${quantidadeDePares}, e a de valores ímpares foi ${quantidadeDeImpares}`)
}