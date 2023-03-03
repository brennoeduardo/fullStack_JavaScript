function somar(a, b){
    return a + b
}

let operation = somar
console.log(operation(4, 5))

operation = function(a, b){
    return a - b
}

console.log(operation(5, 4))
const nome = function (nome){
    console.log("Olá, " + nome)
}
nome("Brenno" + "!")