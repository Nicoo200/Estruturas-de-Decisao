const saldo = 1000;

alert("Quais das operações você deseja realizar ?");

alert("1 - Sacar");

alert("2 - Depositar");

alert("3 - Ver Saldo");

const opcao = parseInt(prompt("Escolha uma opção : "));
let valor;

if(opcao === 1){
    valor = parseFloat(prompt("Qula valor deseja sacar ?"));
    if(valor <=1000){
        alert("Saque realizado com sucesso");
        alert(`Agora seu saldo é de: ${1000 - valor}`);
    }else{
        alert("Saldo insulficiente ");
    }
}else if(opcao === 2){
    valor = parseFloat(prompt("Qual o valor que você deseja depositar ?"));
    alert("Deposito realizado com sucesso !");
    alert(`Seu saldo agora é de: ${1000 + valor}`);
}else if(opcao === 3){
    alert(`O seu saldo atual é de: ${saldo}`)
}else{
    alert("Opção invalida");
}