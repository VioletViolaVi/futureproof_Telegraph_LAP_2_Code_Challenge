// buttons
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
// both
const bothBtns = [btn, btn2];
// warning message
const warningPara = document.getElementById("warningPara");

for (let i = 0; i < bothBtns.length; i++) {
  // btn click functions
  bothBtns[i].addEventListener("click", () => {
    // removes icons
    iconsBg.style.display = "none";
    left.style.display = "none";
    right.style.display = "none";
    camera.style.display = "none";

    // displays red message
    if (title.value === "") {
      title.addClass(".warning::-webkit-input-placeholder");
      warningPara.style.display = "inline";
    }
  });
}
