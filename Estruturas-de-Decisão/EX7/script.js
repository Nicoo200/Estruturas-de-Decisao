let capitalInicial = parseFloat(prompt("Digite a sua capital inicial (Salario inicial)"));
let taxaAnual = parseFloat(prompt("Digite a taxa anual de juros"));
let tempo = parseInt(prompt("Digite o tempo em anos"));
let freqCapitalizacao = parseInt(prompt("Digite a frequência de capitalização (1 anual, 2 para mensal, 3 diaria)"));

let numero;
if(freqCapitalizacao === 1) {
    numero = 1; // Anual
}else if (freqCapitalizacao === 2) {
    numero = 12; // Mensal
}else if (freqCapitalizacao === 3) {
    numero = 365; // Diária
}else{
    alert("Frequência inválida!");
}

taxaAnual = taxaAnual / 100;  // Convertendo para formato decimal

let montanteFinal = capitalInicial * Math.pow((1 + taxaAnual / numero), numero * tempo);
alert("Montante final após " + tempo + " anos: R$ " + montanteFinal.toFixed(2));

let lucro =  montanteFinal - capitalInicial;
alert("O seu lucro foi de: " + lucro.toFixed(2) + " R$");


// let opcao = prompt("Quer saber o seu lucro a cada 6 meses (Sim/Não) ?").toLowerCase();
// if(opcao === "sim"){
//     let tempoTotalSemestres = tempoTotalAnos * 2; 
//     let tempoSemestral = 0.5; // 6 meses equivalem a 0.5 anos

//     for (let i = 1; i <= tempoTotalSemestres; i++) {
//         let montanteFinal = capitalInicial * Math.pow((1 + taxaAnual / numero), numero * tempoSemestral * i);
//         let lucro = montante - capitalInicial;
    
//         alert(`Após ${i * 6} meses (${i / 2} anos), o lucro é: R$ ${lucro.toFixed(2)}`);
//     }
// }else{
//     alert("Obrigado por usar o nosso simulador de investimento!");
// }

