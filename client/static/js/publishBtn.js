// buttons
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");

// both
const bothBtns = [btn, btn2];

for (let i = 0; i < bothBtns.length; i++) {
  bothBtns[i].addEventListener("click", () => {
    iconsBg.style.display = "none";
    left.style.display = "none";
    right.style.display = "none";
    camera.style.display = "none";
  });
}
