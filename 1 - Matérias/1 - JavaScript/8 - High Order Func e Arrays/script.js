const personagens = [ 
    {nivel: 42, nome: "Thrall", raca: "Orc", class: "Xama"},
    {nivel: 28, nome: "Garrosh", raca: "Orc", class: "Guerreiro"},
    {nivel: 35, nome: "Varok", raca: "Orc", class: "Guerreiro"},
    {nivel: 35, nome: "Uther", raca: "Humano", class: "Paladino"},
    {nivel: 26, nome: "Jaina", raca: "Humano", class: "Maga"},
    {nivel: 29, nome: "Tyrande", raca: "Elfo Noturno", class: "Sacerdotica"},
    {nivel: 29, nome: "Muradin", raca: "Anáo", class: "Guerreiro"}
]

// Map

//const nomes = []
//
//for(let i = 0; i < personagens.length; i++){
//    nomes.push(personagens[i].nome)
//}

//Map
const nomes = personagens.map(function (personagem){
    return personagem.nome

    
})

//console.log(nomes)


const controladoria = [ 
    {nome: "Brenno", função: "Assistente Financeiro", area: "Financeiro"},
    {nome: "Fernando", função: "Analista de Controladoria", area: "Gerencial"},
    {nome: "Daiane", função: "Analista de RH", area: "Departamento Pessoal"}
]

const area = controladoria.map(function(controler){ 
    return controler.nome
})

//console.log(area)

//Filter

//const orcs = []
//
//for (let i = 0; i < personagens.length; i++) {
//    if (personagens[i].raca === "Orc") {
//        orcs.push(personagens[i])
//    }
//}


const orcs = personagens.filter(function(personagem){
    return personagem.raca === "Orc"
})

//console.log(orcs)

//Reduce 

const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel
}, 0)

//console.log(nivelTotal)


const racas = personagens.reduce(function(valorAcumulado, personagem){
    if (valorAcumulado[personagem.raca]){
        valorAcumulado[personagem.raca].push(personagem)
    } else{
        valorAcumulado[personagem.raca] = [personagem]
    }

    return valorAcumulado
}, {})

console.log(racas)