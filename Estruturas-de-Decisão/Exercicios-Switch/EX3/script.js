let dia = parseInt(prompt("Digite o dia"));
let mes = parseInt(prompt("Digite o mês"));
let ano = parseInt(prompt("Digite o ano"));

let anoBissexto = (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0);


switch(mes){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        alert("Voce tem " + 31 + " dias no mês");
    break;
    
    case 4: case 6: case 9: case 11:
        alert("Voce tem " + 30 + " dias no mês");
    break;

    case 2:
        if(anoBissexto == true){
            alert("Voce tem " + 29 + " dias no mês");
        }else{
            alert("Voce tem " + 28 + " dias no mês");
        }
    break;

    default:
        alert("Mês inválido");
    break;
}

