let form = document.querySelector("form");
let container = document.querySelector(".container");
let card = document.querySelector(".card");

console.log(card);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  container.classList.add("hide");
  card.classList.remove("hide");
});
