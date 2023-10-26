window.onload = function () {
  const notifica = document.getElementById("notify");
  var boxContent = document.createElement("div");
  notifica.appendChild(boxContent);
  boxContent.classList.add("box-content");
  boxContent.textContent = "Alistar-se totalmente ficticio, ela não tem repercussões reais ou legais, pois se trata de uma atividade simbólica ou de entretenimento dentro desse ambiente específico.";
  var imageExcluir = document.createElement("img");
  imageExcluir.src = "../Imagens/excluir.png";
  imageExcluir.style.width = "20px";
  imageExcluir.style.height = "20px";
  imageExcluir.addEventListener("click", close);
  notifica.appendChild(imageExcluir);
  imageExcluir.style.cursor = "pointer";
  setTimeout(close, 5000);
  function close() {
    notifica.remove();
  }
};
