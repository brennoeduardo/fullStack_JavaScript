const num = prompt('Escolha um numero para realizar a tabuada: ')

let  resultado = ''
for (let contador = 1; contador <= 20; contador++) {
    resultado += ' -> ' + num  + ' * ' + contador + ' = ' + (num * contador) + '\n'
}

alert('Resultado da tabudada de ' + num + ':\n\n' + resultado)
