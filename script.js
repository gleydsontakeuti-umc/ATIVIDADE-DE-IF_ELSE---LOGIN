function verificarLogin() {
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;
  let erro = document.getElementById("erro");

 
  let usuarioCorreto = "Gleydson"; 
  let senhaCorreta = "Takeuti123"; 

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    window.location.href = "bemvindo.html"; // redireciona
  } else {
    erro.innerHTML = "Usuário ou senha incorretos!";
    erro.style.color = "red";
  }
}
