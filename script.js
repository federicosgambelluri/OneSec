// Dopo 3.5 secondi mostra la domanda
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("question").classList.remove("hidden");
}, 3500);

function goToInstagram() {
  // Tenta di aprire l'app Instagram
  window.location.href = "instagram://app";
}

function chiudi() {
  // Tentativo di chiusura: funziona solo in finestre aperte via JS
  window.close();

  // In alternativa, mostra un messaggio
  alert("Chiudi la pagina per uscire.");
}
