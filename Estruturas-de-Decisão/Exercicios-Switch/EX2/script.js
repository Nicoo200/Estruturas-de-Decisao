let numero1 = parseFloat(prompt("Digite o primeiro numero: "));
let numero2 = parseFloat(prompt("Digite o segundo numero: "));

alert("Escolha qual operação deseja realizar: ");

alert("1 - Soma");
alert("2 - Subtração");
alert("3 - Multiplicação");
alert("4 - Divisão");
alert("5 - Porcentagem");
alert ("6 - Raiz Quadrada");
alert("7 - Potenciação");

let opcao = parseInt(prompt("Digite a opção: "));


switch(opcao){
    case 1:
        let resulatdo1  = numero1 + numero2;
        alert("O resultado da soma é: " + resulatdo1);
    break;

    case 2:
        let resulatdo2  = numero1 - numero2;
        alert("O resultado da subtração é: " + resulatdo2);
    break;

    case 3:
        let resulatdo3  = numero1 * numero2;
        alert("O resultado da multiplicação é: " + resulatdo3);
    break;    

    case 4:
        let resulatdo4  = numero1 / numero2;
        alert("O resultado da divisão é: " + resulatdo4);
    break;    

    case 5:
        let resulatdo5  = (numero1 * 100) / numero2;
        alert("O resultado da porcentagem é: " + resulatdo5);
    break;

    case 6:
        let resulatdo6  = Math.sqrt(numero1 , numero2);
        alert("O resultado da raiz quadrada é: " + resulatdo6);
    break;

    case 7:
        let resulatdo7  = Math.pow(numero1 , numero2);
        alert("O resultado da potenciação é: " + resulatdo7);
    break;

    default:
        alert("Opção inválida");
}