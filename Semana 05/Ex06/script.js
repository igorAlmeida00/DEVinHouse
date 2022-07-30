let numeroInformado = Number(prompt("Informe um numero e retorno tabuada:"));

const imprimirTabuada = (numero) => {
    return numeroInformado  * numero;
}

const gerarTabuada = (num, callBack) => {
    for (index = 0; index <= 10; index++) {
        const resultado = callBack([index]);
        console.log(`${num} x ${index} = ${resultado}`);
    }
}

gerarTabuada(numeroInformado, imprimirTabuada);