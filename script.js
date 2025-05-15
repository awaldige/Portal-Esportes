// script.js
function enviarFormulario(event) {
  event.preventDefault();
  const mensagem = document.getElementById('mensagem');
  mensagem.textContent = 'Mensagem enviada com sucesso!';
  mensagem.style.color = 'green';

  // Limpa os campos do formulário
  event.target.reset();
}
function enviarFormulario(event) { 
  event.preventDefault();
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = "Mensagem enviada com sucesso!";
  mensagem.style.color = "green";
}


