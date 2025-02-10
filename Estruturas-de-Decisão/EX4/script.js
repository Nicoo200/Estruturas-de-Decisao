let valor1 = parseInt(prompt("Digite o primeiro valor do triangulo: "));
let valor2 = parseInt(prompt("Digite o segundo valor do triangulo: "));
let valor3 = parseInt(prompt("Digite o terceiro valor do triangulo: "));

const conta = valor1 + valor2;

if(conta > valor3){
    if(valor1 === valor2 && valor2 === valor3){
        alert("O triangulo é equilátero");
        alert(`O valor do seu triangulo é:  ${conta}`);
    }
    else if(valor1 === valor2 && valor2 !== valor3){
        alert("O triangulo é isósceles");
        alert(`O valor do seu triangulo é:  ${conta}`);
    }
    else if(valor1 !== valor2 && valor2 !== valor3){
        alert("O triangulo é escaleno");
        alert(`O valor do seu triangulo é:  ${conta}`);
    }
}else{
    alert(`Isso não é um triangulo  valor:  ${conta}`);
}