//Exercício 08 da lista
class Serie {
  nome;
  anolancamento;
  qttTemporada;

  constructor(nome, anolancamento, qttTemporada) {
    this.nome = nome;
    this.anolancamento = anolancamento;
    this.qttTemporada = qttTemporada;
  }
}

let anoMaisAntiga, nomeAntigo;

for (let i = 0; i <= 2; i++) {
  let nome = prompt("Digite o nome da série:");
  let anolancamento = parseInt(prompt("Digite o ano de lançamento da série:"));
  let qttTemporada = parseInt(
    prompt("Digite a quantidade de temporadas da série:")
  );

  const serie = new Serie(nome, anolancamento, qttTemporada);
  if (i == 0) {
    anoMaisAntiga = serie.anolancamento;
    nomeAntigo = serie.nome;
  } else {
    if (serie.anolancamento < anoMaisAntiga) {
      anoMaisAntiga = serie.anolancamento;
      nomeAntigo = serie.nome;
    }
  }
}

let tagH1 = document.getElementById("h1");
tagH1.innerHTML += nomeAntigo;