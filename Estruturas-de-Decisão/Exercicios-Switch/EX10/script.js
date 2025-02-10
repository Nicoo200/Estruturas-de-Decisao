function calcularImposto(valor, tipo) {
    let imposto = 0;

    switch(tipo) {
        case "A":
            imposto = valor * 0.10; // 10% de imposto para tipo A
            break;
        case "B":
            imposto = valor * 0.15; // 15% de imposto para tipo B
            break;
        case "C":
            imposto = valor * 0.20; // 20% de imposto para tipo C
            break;
        default:
            console.log("Tipo de produto inválido. Por favor, escolha A, B ou C.");
            return;
    }

    return imposto;
}

let tipoProduto = prompt("Digite o tipo do produto (A, B ou C):").toUpperCase(); // .toUpperCase() para garantir que a entrada seja maiúscula
let valorProduto = parseFloat(prompt("Digite o valor do produto:"));

if (isNaN(valorProduto)) {
    console.log("Valor inválido. Por favor, digite um número válido.");
} else {
    // Calcular o imposto
    let imposto = calcularImposto(valorProduto, tipoProduto);

    if (imposto !== undefined) {
        console.log(`O imposto sobre o produto de tipo ${tipoProduto} é: R$ ${imposto.toFixed(2)}`);
    }
}
