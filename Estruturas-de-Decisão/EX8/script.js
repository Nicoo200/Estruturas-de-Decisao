function gerarValor(){
    let numeroAleatorio =  Math.floor(Math.random() * 100) + 1;
    console.log("Número aleatório:", numeroAleatorio);
    alert("Voce tem apenas 7 chances de acerto");

    let tentativa = parseInt(prompt("Tente adivinhar o número entre 1 e 100: "));

    let tentativas = 7;

    for(let tentativaAtual = 1; tentativaAtual < tentativas; tentativaAtual++){
        let tentativa = parseInt(prompt(`(${tentativas - tentativaAtual + 1} chances restantes) Tente adivinhar o número entre 1 e 100:`));

        if(tentativa === numeroAleatorio){  
            alert("Parabéns você acertou!");
            return;
        } 

        let diferença = Math.abs(numeroAleatorio - tentativa);
        console.log("A diferença é de:"+ diferença);

        if(diferença <= 10){
            alert("Quente");
        }else if(diferença > 20){
            alert("Frio");
        }
       
    }
    alert("Você já digitou 7 vezes. O programa terminou!");
    alert("Você pederdeu !" + " O número era: " + numeroAleatorio);

}

