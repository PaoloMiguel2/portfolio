const burg = document.getElementById("burger");
const mainMenu = document.getElementById("menu");

burg.addEventListener("click", () => {
  mainMenu.classList.toggle("hidden");
});