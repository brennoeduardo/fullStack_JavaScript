const meters = prompt("Digite uma medida em metros para converter: ")
const chooseMeasure = prompt("Escolha a opção que deseja converter: \n 1-Milímetro(mm) \n 2-Centímetro(cm) \n 3-Decímetro(dm) \n 4-Hectômetro(hm) \n 5-Quilômetro(km)")
 

const millimeter = meters * 1000;
const centimeter = meters * 100;
const decimeter = meters * 10;
const hectometer = meters / 100;
const kilometer = meters / 1000;

switch(chooseMeasure){
    case "1":
        alert(millimeter)
        break
    case "2":
        alert(centimeter)
        break
    case "3":
        alert(decimeter)
        break
    case "4":
        alert(hectometer)
        break
    case "5":
        alert(kilometer)
        break
    default:
        alert('Não há informações.')

}