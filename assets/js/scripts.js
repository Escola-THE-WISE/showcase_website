//////////////////////////////////////////////////////////////// Função olhinho
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const toggleIcon = document.getElementById("toggleIcon");
  
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleIcon.src = "/img/close-icon.png"; // Ícone alternativo para esconder senha
    } else {
      passwordField.type = "password";
      toggleIcon.src = "/img/open-icon.png"; // Ícone para mostrar senha
    }
  }
  
//////////////////////////////////////////////////////////////// Função mensagem de erro
function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var alertBox = document.getElementById("alert-box");

    // Limpa qualquer mensagem anterior
    alertBox.style.display = "none";

    if (username === "") {
        // Exibe mensagem para login incorreto
        alertBox.innerHTML = "Parece que seu login não foi digitado corretamente... Confira e digite novamente";
        alertBox.style.display = "block";
        return false; // Impede o envio do formulário
    }

    if (password === "") {
        // Exibe mensagem para senha incorreta
        alertBox.innerHTML = "Parece que sua senha não foi digitada corretamente... Confira e digite novamente";
        alertBox.style.display = "block";
        return false; // Impede o envio do formulário
    }

    // Se ambos forem preenchidos corretamente, pode enviar o formulário
    return true;
}

//////////////////////////////////////////////////////////////// Função para conferir o funcionamento da mensagem de erro
function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var alertBox = document.getElementById("alert-box");

    // Limpa qualquer mensagem anterior
    alertBox.style.display = "none";

    // Definindo os dados corretos para login e senha
    var correctUsername = "user12345";
    var correctPassword = "123456";

    if (username !== correctUsername) {
        // Exibe mensagem para login incorreto
        alertBox.innerHTML = "Parece que seu <b>login</b> não foi digitado corretamente... Confira e tente novamente";
        alertBox.style.display = "block";
        return false; // Impede o envio do formulário
    }

    if (password !== correctPassword) {
        // Exibe mensagem para senha incorreta
        alertBox.innerHTML = "Parece que sua <b>senha</b> não foi digitada corretamente... Confira e tente novamente";
        alertBox.style.display = "block";
        return false; // Impede o envio do formulário
    }

    // Se ambos forem preenchidos corretamente, pode enviar o formulário
    alertBox.innerHTML = "Login realizado com sucesso!";
    alertBox.style.display = "block";
    return false; // Impede envio para você ver a mensagem de sucesso sem redirecionamento
}