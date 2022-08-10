// textarea
const yourStory = document.getElementById("yourStory");
const yourStory2 = document.getElementById("yourStory2");
// both textarea
const allTextAreas = [yourStory, yourStory2];
// icons container
const iconsBg = document.getElementById("iconsBg");
// icons
const left = document.getElementById("left");
const right = document.getElementById("right");
const camera = document.getElementById("camera");
// buttons
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
// both
const bothBtns = [btn, btn2];
// warning message
const warningPara = document.getElementById("warningPara");
// label
const titleLabel = document.getElementById("titleLabel");
// title input
const title = document.getElementById("title");
// label
const authorLabel = document.getElementById("authorLabel");
// input field
const yourName = document.getElementById("yourName");

/********************************************************************* title */
// gets width of browser screen
function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

// removes icons
title.addEventListener("click", () => {
  iconsBg.style.display = "none";
  left.style.display = "none";
  right.style.display = "none";
  camera.style.display = "none";
});

// stops label showing on smaller screens
title.addEventListener("keydown", () => {
  if (getWidth() >= 992) {
    // label
    titleLabel.style.display = "inline";
  }
});

/********************************************************************* yourName / author */
yourName.addEventListener("click", () => {
  // icons
  iconsBg.style.display = "none";
  left.style.display = "none";
  right.style.display = "none";
  camera.style.display = "none";
});

yourName.addEventListener("keydown", () => {
  // stops label showing on smaller screens
  if (getWidth() >= 992) {
    // label
    authorLabel.style.display = "inline";
  }
});

/********************************************************************* icons */
// shows icons when textarea clicked
for (let i = 0; i < allTextAreas.length; i++) {
  allTextAreas[i].addEventListener("click", () => {
    iconsBg.style.display = "inline";
    left.style.display = "inline";
    right.style.display = "inline";
    camera.style.display = "inline";
  });
}

/********************************************************************* yourStory */
// allows textarea to expand auto when typing
function textAreaAdjust(element) {
  element.style.height = "1px";
  element.style.height = 25 + element.scrollHeight + "px";
}

/********************************************************************* publish btn */
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
