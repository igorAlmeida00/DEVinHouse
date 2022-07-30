let arrayAlunos = [
  {
      nome: "Carlos",
      media: 10
  },
  {
      nome: "Julia",
      media: 8
  },
  {
      nome: "Rayane",
      media: 6
  },
  {
      nome: "Arthur",
      media: 5
  }
]

arrayAlunos.forEach(function(item, indice){
  if(item.media >= 7){
    document.write(`Parabens aprovado:${item.nome}, sua nota:${item.media}.`)
  } else{
    document.write(`Segue alunos em recuperacao:${item.nome}, sua nota: ${item.media}.`)
  }
});