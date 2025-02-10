let nota1 = parseInt(prompt("Digite a primeira nota: "));
let nota2 = parseInt(prompt("Digite a segunda nota: "));
let nota3 = parseInt(prompt("Digite a terceira nota: "));

const mediaPonderada = (nota1 * 1 + nota2 * 2 + nota3 * 3) / 6;
console.log(`${mediaPonderada.toFixed(2)}`);

if(mediaPonderada >=9){
    if(nota1 === 0 || nota2 === 0 || nota3 === 0){
        alert("Desclasificado");
    }else{
        alert("Exelente");
    }
}
else if(mediaPonderada <9 && mediaPonderada <=7 ){
    if(nota1 === 0 || nota2 === 0 || nota3 === 0){
        alert("Desclasificado");
    }else{
    alert("Bom");
    }
}
else if(mediaPonderada <7 && mediaPonderada <=5){
    if(nota1 === 0 || nota2 === 0 || nota3 == 0){
        alert("Desclasificado");
    }else{
    alert("Regular");
    }
}
else if(mediaPonderada < 5){
    if(nota1 === 0 || nota2 === 0 || nota3 === 0){
        alert("Desclasificado");
    }else{
    alert("Ruim");
    }
}