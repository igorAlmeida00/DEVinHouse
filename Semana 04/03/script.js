class Pessoa{
  nome;
  idade;
  cpf;
  anoAniversario;

  podeDirigir(){
    if(this.idade >= 18){
      return true;
    } else{
      return false;
    }
  }
}

const igor = new Pessoa();
igor.nome = "Igor";
igor.idade = 24;
igor.cpf = "111 111 111 11";
igor.anoAniversario = 1998;

console.log(igor.podeDirigir());