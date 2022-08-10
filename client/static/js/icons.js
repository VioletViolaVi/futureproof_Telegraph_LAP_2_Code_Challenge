// textarea
const yourStory = document.getElementById("yourStory");
const yourStory2 = document.getElementById("yourStory2");
// both
const allTextAreas = [yourStory, yourStory2];

// icons container
const iconsBg = document.getElementById("iconsBg");
// icons
const left = document.getElementById("left");
const right = document.getElementById("right");
const camera = document.getElementById("camera");

for (let i = 0; i < allTextAreas.length; i++) {
  allTextAreas[i].addEventListener("click", () => {
    iconsBg.style.display = "inline";
    left.style.display = "inline";
    right.style.display = "inline";
    camera.style.display = "inline";
  });
}
