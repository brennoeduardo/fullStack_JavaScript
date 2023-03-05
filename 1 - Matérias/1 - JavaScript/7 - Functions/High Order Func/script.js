function calcular(a, b, operacao){
    console.log("Realizando uma operacao: ")
    const resultado = operacao(a, b)
    return resultado
}

function somar(x, y){
    console.log("Realizando uma soma: ")
    return x + y
}

console.log(calcular(2, 2, somar))


function darNomes(nome, sobrenome, junçao){
    const certidao = junçao(nome, sobrenome)
    return certidao
}

function junctionName(nome1, sobrenome2){ 
    return nome1 + sobrenome2
}

console.log(darNomes("Brenno ", "Eduardo", somar))

