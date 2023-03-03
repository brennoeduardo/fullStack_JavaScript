const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Bem-vindo ao cadastro de Imoveis! \n" +
        "Total de Imoveis: " + imoveis.length +
        "\n\n Escolha uma opcao: \n 1. Novo Imoveis\n 2. Lista Imoveis \n 3. Sair")

    switch (opcao) {
        case "1":
            const imovel = {}
            imovel.proprietario = prompt("Informe o nome do proprietario do imovel: ")
            imovel.quartos = prompt("Informe a quantidade de quartos: ")
            imovel.banheiros = prompt("Informe a quantidade de banheiros: ")
            imovel.garagem = prompt("O imovel possui garagem? (Sim/Nao)")

            const confirmacao = confirm(
                "Deseja salvar este imovel? \n" +
                "\n Proprietario: " + imovel.proprietario +
                "\n Quartos: " + imovel.quartos +
                "\n Banheiros: " + imovel.banheiros +
                "\n Garagem: " + imovel.garagem
            )

            if (confirmacao) {
                imoveis.push(imovel)
            }

            break
        case "2":
            for (i = 0; i < imoveis.length; i++) {
                alert(
                    "Imovel " + (i + 1) +
                    "\n Proprietario:" + imoveis[i].proprietario +
                    "\n Quartos: " + imoveis[i].quartos +
                    "\n Banheiros: " + imoveis[i].banheiros +
                    "\n Possui garagem: " + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert("Encerrando...")
            break;
        default:
            alert("Opção inválida!")
    }
} while (opcao !== 3)

