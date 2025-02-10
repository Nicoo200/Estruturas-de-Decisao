let senha = prompt("Por favor, digite uma senha: ");


// Verifica se a senha contém 8 caracteres
if(senha.length >=8){
}

// Verifica se a senha contém letras maiusculas e minusculas
if(/[A-Z]/.test(senha) && /[a-z]/.test(senha)){
}else{
    alert("Insira uma letra Maiuscula e outra Minuscula");
}

// Verifica se a senha contém números
if(/\d/.test(senha)){
}else{
    alert("A senha deve ter pelo menos um número");
}

// Verifica se a senha contém caracteres especiais
if (/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
    console.log("senha correta");
}else{
    alert("A senha deve ter pelo menos um caracter especial");
}

console.log(`sua senha é : ${senha}`);
