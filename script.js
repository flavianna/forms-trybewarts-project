const inpulHeaderEmail = document.getElementById("input-email-header");
const inputPassword = document.getElementById("input-senha");
const buttonLogin = document.getElementById("button-form");

function formularioValue() {
const inputEmailValor = inpulHeaderEmail.value;
const inputSenhaValor = inputPassword.value;
if (inputEmailValor === "tryber@teste.com" && inputSenhaValor === "123456") {
alert("Olá, Tryber!");
} else {
alert("Email ou senha inválidos.");
}
}
buttonLogin.addEventListener("click", formularioValue);