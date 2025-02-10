let numero = parseInt(prompt("Digite um numero: "));

const num1 = ["I"];
const num5 = ["V"];
const num10 = ["X"];


switch(numero){
    case 1:
        alert("O seu numero digitado em romano é: " + num1);
    break;
    
    case 5:
        alert("A sua cor digitada em romano é: " + num5);
    break;

    case 10:
        alert("A sua cor digitada em romano é: " + num10);
    break;

    default:
        alert("Ainda não conseguimos converter esse numero !");
    break;
}

