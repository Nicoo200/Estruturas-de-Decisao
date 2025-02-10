alert("Em qual classe de voo você deseja ir ?");

alert("Economica");

alert("Executiva");

alert("Primeira classe");


const classe = prompt("Digite a classe desejada").toLowerCase();
let numeroPassageiros;
let numeroAssento;

if(classe === "economica"){
    numeroPassageiros = 150;
    alert("A classe Economica comporta 150 passageiros");
    numeroAssento = parseInt(prompt("Digite o numero do assento desejado: "));
    
    if(numeroAssento === 52 || numeroAssento === 53  || numeroAssento === 133 || numeroAssento === 134){
        alert("Desculpa porém esses assentos estão ocupados");
        alert("Você ainda pode escolher: " + (4 - numeroPassageiros) + " assentos");
    }
    else if(numeroAssento > 0 && numeroAssento <=150){
        alert("Parabéns ! Você está no assento: " + numeroAssento);
    }
    else{
        alert("O assento: " + numeroAssento + " não existe !");
    }

}else if (classe === "executiva"){
    numeroPassageiros = 50;
    alert("A classe Economica comporta 50 passageiros");
    numeroAssento = parseInt(prompt("Digite o numero do assento desejado: "));
    
    if(numeroAssento === 21 || numeroAssento === 22 || numeroAssento === 45 || numeroAssento === 46){
    alert("Desculpa porém esses assentos estão ocupados");
    alert("Você ainda pode escolher: " + (4 - numeroPassageiros) + " assentos");
    }
    else if(numeroAssento > 0 && numeroAssento <=50){
        alert("Parabéns ! Você está no assento: " + numeroAssento);
    }else{
        alert("O assento: " + numeroAssento + " não existe !");
    }

}else if(classe === "primeira"){
    numeroPassageiros = 20;
    alert("A primeira classe comporta apenas 20 passageiros");

    numeroAssento = parseInt(prompt("Digite o numero do assento desejado: "));
    if(numeroAssento === 1 || numeroAssento === 2 || numeroAssento === 15 || numeroAssento === 16){
        alert("Desculpe assentos ocupados");
        alert("Você ainda pode escolher: " + (4 - numeroPassageiros) + "assenetos");
    }
    else if(numeroAssento > 0 && numeroAssento <=20){
        alert("Parabéns ! Você está no assento: " + numeroAssento);
    }
}else{
    alert("Digite a classe correta !");
}


