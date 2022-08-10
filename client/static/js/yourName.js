// label
const authorLabel = document.getElementById("authorLabel");
// input field
const yourName = document.getElementById("yourName");

yourName.addEventListener("click", () => {
  // icons
  iconsBg.style.display = "none";
  left.style.display = "none";
  right.style.display = "none";
  camera.style.display = "none";
});

yourName.addEventListener("keydown", () => {
  // label
  authorLabel.style.display = "inline";
  authorLabel.style.transition = "all 42s";
});

yourName.addEventListener("keydown", () => {
  if (getWidth() >= 992) {
    // label
    authorLabel.style.display = "inline";
  }
});
