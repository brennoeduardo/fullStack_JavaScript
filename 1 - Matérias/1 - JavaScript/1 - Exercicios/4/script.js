const character = window.prompt("Qual o nome do personagem?")
const attackPower = window.prompt(`Qual o poder de ataque de ${character}?`)

const characterTwo = window.prompt("Qual o nome do segundo personagem?")
const attackPowerTwo = window.prompt(`Qual o poder de ataque do ${characterTwo}?`)
const defenseTwo = window.prompt(`Qual o poder de defesa do ${characterTwo}`)
let lifeTwo = window.prompt(`Qual os pontos de vida do ${characterTwo}`)
const schield = window.prompt("Ele possui escudo?")


if(attackPower > defenseTwo && schield === "Não"){
    damageDone = attackPower - defenseTwo
} else if(attackPower > defenseTwo && schield === "Sim"){
    damageDone = (attackPower - defenseTwo) / 2
}

lifeTwo -= damageDone

window.alert(`${character} causou ${damageDone} pontos de dano em ${characterTwo}`)
window.alert(`${character} - Poder de ataque: ${attackPower}
${characterTwo} - Pontos de vida: ${lifeTwo} - Poder de defesa: ${defenseTwo} - Possui escudo: ${schield}
`)
