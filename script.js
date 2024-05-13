document.getElementById("simButton").addEventListener("click", function() {
  var mensagem = document.createElement("div");
  mensagem.textContent = "Você é a melhor mãe do mundo e eu te amo muito!";
  mensagem.style.fontSize = "24px";
  mensagem.style.fontWeight = "bold";
  mensagem.style.color = "green";
  mensagem.style.marginTop = "20px";
  document.body.appendChild(mensagem);

  var video = document.createElement("video");
  video.src = "Roberto Carlos - Como é Grande o Meu Amor por Você (Áudio Oficial) (1080p).mp4";
  video.autoplay = true;
  video.loop = true; // Para repetir o vídeo após o término
  video.muted = false; // Garante que o áudio seja reproduzido
  video.style.width = "30%"; // Define a largura do vídeo
  video.style.height = "30%"; // Define a altura do vídeo
  video.style.position = "fixed";
  video.style.left = "50%"; // Centraliza horizontalmente
  video.style.top = "50%"; // Centraliza verticalmente
  video.style.transform = "translate(-50%, -50%)"; // Ajusta horizontal e verticalmente
  document.body.appendChild(video);
});
document.getElementById("naoButton").addEventListener("click", function() {
  var naoButton = document.getElementById("naoButton");
  var container = document.querySelector(".container");
  var containerRect = container.getBoundingClientRect();
  var buttonRect = naoButton.getBoundingClientRect();
  var newX = Math.random() * (containerRect.width - buttonRect.width);
  var newY = Math.random() * (containerRect.height - buttonRect.height);
  
  naoButton.style.position = "absolute";
  naoButton.style.left = newX + "px";
  naoButton.style.top = newY + "px";
});