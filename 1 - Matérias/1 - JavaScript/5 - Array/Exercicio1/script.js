let pacientList = []
let option = ""

do {
    let pacient = ''
    for(let i = 0; i < pacientList.length; i++){
        pacient += (i + 1) + '° - ' + pacientList[i] + '\n'
    }

    option = prompt(
        'Pacientes: \n' + pacient + "\nEscolha uma ação: \n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
    )

    switch(option){ 
        case "1": 
            const newPacient = prompt("Qual paciente deseja inserir?")
            pacientList.push(newPacient)
            break
        case "2":
            const searchPacient = pacientList.shift()
            if(pacientList.length > 0){
                alert(searchPacient + "foi removido da fila.")
            } else{
                alert("Não há pacientes na fila")
            }
            break
        case "3": 
            alert("Encerrando...")
            break
        default: 
            alert("Opcao invalida")
    }
} while (option !== 3);