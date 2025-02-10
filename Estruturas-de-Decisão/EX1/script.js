let peso = parseFloat(prompt("Por favor digite o seu peso"));
let altura = parseFloat(prompt("Por favor digite a sua altura"));
let idade = parseInt(prompt("Por favor digite a sua idade"));


let imc = peso / (altura * altura);
console.log(`${imc.toFixed(2)}`);

if(imc < 18.5) {
    alert("Você está abaixo do peso");
}else if(imc >= 18.5 && imc < 25) {
    if(idade <=18){
        alert("Você está Abaixo do peso para a sua idade");
    }else{
        alert("Você esta no peso ideal");
    }
}else if(imc >= 25 && imc < 30){
    if(idade >= 65){
        alert("O seu peso está dentro do normal para sua idade.");
    }else{
        alert("Você está com sobrepeso");
    }
}else if(imc >= 30 && imc < 35){
    alert("Você está Obeso (Obesidade grau 1)");
}else if(imc >= 35 && imc <40){
    alert("Você está Obeso (Obesidade grau 2)");
}else{
    alert("Você está Obeso (Obesidade grau 3)");
}