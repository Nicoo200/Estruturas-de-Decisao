alert("Qual forma geometrica você deseja ?");

alert("1 - Triangulo");
alert("2 - quadrilátero");
alert("3 - pentágono");
alert("4 - hexágono");

let opcao = parseInt(prompt("Qual a sua escolha ?"));

switch(opcao){
    case 1:
        let lado1 = parseFloat(prompt("Qual o valor do primeiro lado ?"));
        let lado2 = parseFloat(prompt("Qual o valor do segundo lado ?"));
        let lado3 = parseFloat(prompt("Qual o valor do terceiro lado ?"));
        alert("O valor de primeiro lado é: " + lado1 + " cm" + "segundo lado" + lado2 + "cm " + "terceiro lado" + lado3 + "cm");
    break;

    case 2: 
        let ladoX = parseFloat(prompt("Qual o valor do primeiro lado ?"));
        let ladoY = parseFloat(prompt("Qual o valor do segundo lado ?"));
        let ladoW = parseFloat(prompt("Qual o valor do terceiro lado ?"));
        let ladoZ = parseFloat(prompt("Qual o valor do quarto lado ?"));
        alert("O valor de primeiro lado é: " + ladoX + " cm" + "segundo lado" + ladoY + "cm " + "terceiro lado" + ladoW + "cm" + "quarto lado" + ladoZ + "cm");
    break;

    case 3:
        let ladoA = parseFloat(prompt("Qual o valor do primeiro lado ?"));
        let ladoB = parseFloat(prompt("Qual o valor do segundo lado ?"));
        let ladoC = parseFloat(prompt("Qual o valor do terceiro lado ?"));
        let ladoD = parseFloat(prompt("Qual o valor do quarto lado ?"));
        let ladoE = parseFloat(prompt("Qual o valor do quinto lado ?"));
        alert("O valor de primeiro lado é: " + ladoA + " cm" + "segundo lado" + ladoB + "cm " + "terceiro lado" + ladoC + "cm" + "quarto lado" + ladoD + "cm" + "quinto lado" + ladoE + "cm");
    break;

    case 4:
        let ladoF = parseFloat(prompt("Qual o valor do primeiro lado ?"));
        let ladoG = parseFloat(prompt("Qual o valor do segundo lado ?"));
        let ladoH = parseFloat(prompt("Qual o valor do terceiro lado ?"));
        let ladoI = parseFloat(prompt("Qual o valor do quarto lado ?"));
        let ladoJ = parseFloat(prompt("Qual o valor do quinto lado ?"));
        let ladoK = parseFloat(prompt("Qual o valor do sexto lado ?"));
        alert("O valor de primeiro lado é: " + ladoF + " cm" + "segundo lado" + ladoG + " cm " + "terceiro lado" + ladoH + " cm" + "quarto lado" + ladoI + " cm" +"quinto lado" + ladoJ + " cm" + "sexto lado" + ladoK + " cm");
    break;
}