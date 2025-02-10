alert("Bem vindo(a)");

let nota = prompt("Digite a sua nota: \nNota: A \nNota: B\nNota: C\nNota: D\nNota: F");

switch(nota){
    case "A":
        alert("Parabéns, você é um(a) excelente aluno(a)");
    break;
    
    case "B":
        alert("Você é um(a) bom aluno(a)");
    break;

    case "C":
        alert("Você é um(a) regular aluno(a)");
    break;

    case "D":
        alert("Você é um(a) ruim aluno(a)");
    break;

    case "F":
        alert("Você é um(a) muito ruim aluno(a)");
    break;
}