let turistName = window.prompt("What is your name?")

let citys = ""
let contagem = 0
let visitCity = window.prompt("Have you ever visited a city? (Yes/No)")

while(visitCity === "Yes"){
    let city = window.prompt("Which city did you visit?")
    citys += " - " + city + "\n"
    contagem ++
    visitCity = prompt("Did you visit any other cities? (Yes/No)")
}

alert(`Your name is ${turistName}, you visited: \n ${citys}`)