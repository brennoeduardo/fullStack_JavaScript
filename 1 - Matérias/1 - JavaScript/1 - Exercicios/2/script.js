let firstNum = parseFloat(prompt("Primeiro número: "))
let twoNum = parseFloat(prompt("Segundo número: "))

let sum = firstNum + twoNum
let subtraction = firstNum - twoNum 
let times = firstNum * twoNum
let division = firstNum / twoNum

window.alert(`
A soma de ${firstNum} + ${twoNum} é = ${sum}
A subtração de ${firstNum} - ${twoNum} é = ${subtraction}
A multriplicação de ${firstNum} * ${twoNum} é = ${times}
A divisão de ${firstNum} / ${twoNum} é =${division}
`)
