// Função para gerar a escolha aleatória
function gerarEscolhaAleatoria() {
    const opcoes = ["pedra", "papel", "tesoura"];
    const indiceAleatorio = Math.floor(Math.random() * opcoes.length);
    return opcoes[indiceAleatorio];
}

let computador = gerarEscolhaAleatoria();

let jogada = prompt("Digite uma jogada (pedra, papel, tesoura)").toLowerCase(); 

switch(jogada) {
    case "pedra":
    case "papel":
    case "tesoura":
        console.log("Computador escolheu: " + computador);  // Exibe a escolha do computador
        if(jogada === computador) {
            alert("Empate! Você e o computador escolheram a mesma opção.");
        } else if(
            (jogada === "pedra" && computador === "tesoura") || 
            (jogada === "papel" && computador === "pedra") || 
            (jogada === "tesoura" && computador === "papel")
        ) {
            alert("Boa! Você ganhou.");
        } else {
           alert("Perdeu, O computador ganhou.");
        }
    break;

    default:
        alert("Por favor, digite apenas uma das três opções: pedra, papel ou tesoura.");
    break;
}
