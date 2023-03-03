const nameCarFirst = window.prompt("Write the name of the first car: ") 
const velocityCarFirst = window.prompt(`Write the velocity of ${nameCarFirst}: `)

const nameCarTwo = window.prompt("Write tha name of the second car: ")
const velocityCarTwo = window.prompt(`Write the velocity of ${nameCarTwo}: `)

if(velocityCarFirst > velocityCarTwo){
    window.alert(`A velocidade do ${nameCarFirst}: ${velocityCarFirst}km/h é maior que a do ${nameCarTwo}: ${velocityCarTwo} km/h`)
} else if (velocityCarTwo > velocityCarFirst){
    window.alert(`A velocidade do ${nameCarTwo}: ${velocityCarTwo}km/h é maior que a do ${nameCarFirst}: ${velocityCarFirst} km/h`)
} else {
    window.alert("A velocidade dos dois são iguais.")
}