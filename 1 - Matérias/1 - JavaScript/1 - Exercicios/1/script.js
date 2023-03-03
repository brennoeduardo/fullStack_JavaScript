const firstName = prompt("Nome")
const lastName = prompt("Sobrenome: ")
const study = prompt("Qual o seu campo de estudo? ")
const yearBirth = prompt("Qual seu ano de nascimento?")
const ageCalculator = 2022 - yearBirth

window.alert(`Olá ${firstName + " " + lastName}, o seu campo de estudo é: ${study} e sua idade é: ${ageCalculator}`)