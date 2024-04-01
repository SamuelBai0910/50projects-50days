const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  updateNext();
  updateBtn();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  updatePrev();
  updateBtn();
});

function updateNext() {
  const actives = document.querySelectorAll(".active");

  if (actives.length <= circles.length) {
    circles[currentActive - 1].classList.add("active");
  }
  progress.style.width = (actives.length / (circles.length - 1)) * 100 + "%";
}

function updatePrev() {
  const actives = document.querySelectorAll(".active");

  if (actives.length <= circles.length) {
    circles[currentActive].classList.remove("active");
  }
  progress.style.width =
    ((currentActive - 1) / (circles.length - 1)) * 100 + "%";
}

function updateBtn() {
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
