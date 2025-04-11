// Dopo 4 secondi, mostra il contenuto principale
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");
}, 4000);
