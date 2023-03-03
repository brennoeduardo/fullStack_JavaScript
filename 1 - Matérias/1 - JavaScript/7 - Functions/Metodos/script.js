let pessoa = { 
    nome: "Brenno",
    idade: 26,
    dizerOla(nome = "Mundo") { 
        console.log("Ola " + nome )
    }
}

console.log(pessoa)

console.log(pessoa.nome)
pessoa.dizerOla(pessoa.nome)