let qtdDin = parseInt(prompt("Olá, quanta grana você tem dísponivel? "))
let option
let valor


do{
    option = parseInt(prompt(`Você tem disponivel ${qtdDin}. \n 1 - Adicionar dinheiro \n 2 - Remover dinheiro \n 3 - Encerrar`))
    switch(option){
        case 1: 
            valor = parseInt(prompt("Quanto você deseja adicionar?"))
            qtdDin += valor
            break
        case 2:
            valor = parseInt(prompt("Qual o valor a sacar? "))
            qtdDin -= valor
            break
        case 3:
            alert("Você saiu")
    }

} while(option != 3)