let opcao = ''

do{ 
    opcao = prompt("Escolha um calculo:" + 
    "\n 1 - Area do Triangulo" + 
    "\n 2 - Area do Retangulo" +
    "\n 3 - Area do Quadrado" + 
    "\n 4 - Area do Trapezio" + 
    "\n 5 - Area do Circulo" + 
    "\n 6 - Sair")

    switch (opcao) {
        case "1":
            function calcAreaTri(){ 
                const base = prompt("Digite a base: ")
                const altura = prompt("Digite a altura: ")
                const result = (base * altura) / 2 
                alert("O resultado é: " + result)
            }
            calcAreaTri()
            break;
        case "2":
            function calcAreaRet(){ 
                const base = prompt("Digite a base: ")
                const altura = prompt("Digite a altura: ")
                const result = (base * altura)
                alert("O resultado é: " + result)
            }
            calcAreaRet()
            
            break;
        case "3":
            function calcAreaQuad(){ 
                const lado = prompt("Digite o lado: ")
                const result = lado * lado
                alert("O resultado é: " + result)
            }
            calcAreaQuad()
            break;
        case "4":
            function calcAreaTrap(){           
            const baseMaior = parseFloat(prompt("Digite a base maior: "))
            const baseMenor = parseFloat(prompt("Digite a base menor: "))
            const altura = prompt("Informe altura do trapezio: ")
            const result = (baseMaior + baseMenor) * altura / 2  }

            break;
        case "5":
            function calcAreaCirculo(){
                const raio = prompt("Informe o raio do circulo: ")
                return (3,14 * raio * raio)
            }
            break;
        case "6":
            alert("Encerrando")
            break
        default:
            alert("Por gentileza, digite uma opção válida.")
    }

} while(opcao !== 6)