// label
const titleLabel = document.getElementById("titleLabel");
// title input
const title = document.getElementById("title");

title.addEventListener("click", () => {
  // icons
  iconsBg.style.display = "none";
  left.style.display = "none";
  right.style.display = "none";
  camera.style.display = "none";
});

title.addEventListener("keydown", () => {
  // label
  titleLabel.style.display = "inline";
});
