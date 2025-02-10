let unidade = parseInt(prompt("Digite a sua unidade em Km"));

alert("Voce quer converte isso para: ");

alert("opção 1: Milhas");
alert("opção 2: Metros");
alert("opção 3: pés");

let opcao = parseInt(prompt("Escolha uma das opções (1,2,3)"));


switch(opcao){
    case 1:
        let resultado1 = unidade * 0.621371;
        alert(resultado1);
    break;

    case 2:
        let resultado2 = unidade * 1000;
        alert(resultado2);

    break;

    case 3:
        let resultado3 = unidade * 3280.84;
        alert(resultado3);
    break;

    default:
        alert("Opção inválida");
}