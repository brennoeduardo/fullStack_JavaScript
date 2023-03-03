function calcularMedia(a, b){ 
    const media = (a + b) / 2
    return media
}


console.log(calcularMedia(8, 2))

function criarProduto(nome, preco, estoque = 1){ 
    const produto = { 
        nome, 
        preco,
        estoque
    }
    return produto 
}

//console.log(criarProduto("Notebook Dell", "R$ 2,989"))

function areaRetangular(base, altura){
    return base * altura
}

//console.log(areaRetangular(3, 3))

function cumprimento(nome = "mundo"){
    console.log("Ola " + nome + "!")
}
cumprimento()

const result = "Javascript".length + 2 * 8
console.log(result)