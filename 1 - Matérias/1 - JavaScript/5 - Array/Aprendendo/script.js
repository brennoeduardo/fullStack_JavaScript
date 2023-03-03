//const listaDeCompras = []
//console.log(listaDeCompras)

//listaDeCompras[0] = 'Arroz'
//listaDeCompras[1] = 'Feijão'
//listaDeCompras[2] = 7
//listaDeCompras[5] = 'Batata'


//console.log(listaDeCompras[1])


const arr = ['Frodo', 'Paulo', 'Roberta', 'Merry', 'Pippin']
let tamanho = arr.push('Brenno')

console.log(arr)
arr.pop()
console.log(arr)
arr.unshift('Eduardo')
console.log(arr)


const inclui = arr.includes('Frodo')
console.log(inclui)
if(inclui === true){
    console.log('Verdadeiro')
}

const habb = arr.slice(0, 2)
const outros = arr.slice(-4)
const ver = [`Lero lero `]
console.log(habb)
console.log(outros)



const sociedade = habb.concat(ver, 'Boromiro', 'Cariani')
console.log(sociedade)

const indice = arr.indexOf('Roberta')
console.log(indice)
const removeElement = sociedade.splice(indice, 1, 'Muzy')
console.log(removeElement)
console.log(sociedade)


for (let indice = 0; indice < sociedade.length; indice++){
    const elemento = sociedade[indice]
    console.log(elemento, 'está na posição', indice)
}