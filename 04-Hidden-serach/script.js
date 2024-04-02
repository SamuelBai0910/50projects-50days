const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => update());

function update() {
  input.classList.toggle("close");
  input.focus();
}
