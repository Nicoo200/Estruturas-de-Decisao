let opcao;
let Nome = null;
let Idade = 0;
let Cidade = null;

do {

    alert("Bem vindo(a)");
    // Exibe o menu para o usuário
    opcao = parseInt(prompt("Digite a opção desejada: \n1. Inserir Dados\n2. Atualizar Dados\n3. Excluir Dados\n4. Exibir Dados\n5. Sair"));

    switch (opcao) {
        case 1:
            Nome = prompt("Digite o nome: ");
            Idade = parseInt(prompt("Digite a idade: "));
            Cidade = prompt("Digite a cidade: ");
            alert(`Nome: ${Nome}\nIdade: ${Idade}\nCidade: ${Cidade}`);
        
        break;

        case 2:
            Nome = prompt("Digite o nome: ");
            Idade = parseInt(prompt("Digite a idade: "));
            Cidade = prompt("Digite a cidade: ");
            alert(`Os seus dados atualizados são: \nNome: ${Nome}\nIdade: ${Idade}\nCidade: ${Cidade}`);
            break;

        case 3:
            // Excluindo os dados
            Nome = null;
            Idade = 0;
            Cidade = null;
            alert("Dados excluídos com sucesso!");
            break;

        case 4:
            if (Nome && Idade && Cidade) {
                alert("Dados:\nNome: " + Nome + "\nIdade: " + Idade + "\nCidade: " + Cidade);
            } else {
                alert("Nenhum dado registrado.");
            }
            break;

        case 5:
            alert("Obrigado por utilizar o sistema!");
            break;

        default:
            alert("Opção inválida");
            break;
    }
} while (opcao !== 5);  // A execução do menu continuará até o usuário escolher a opção 5 para sair
