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

camera.addEventListener("click", () => {
  yourStory.value = "";
  yourStory.placeholder = "Place your photo(s) here";
});

left.addEventListener("click", () => {
  yourStory.value = "";
  yourStory.placeholder =
    "Paste a YouTube, Vimeo or Twitter link, and press Enter";
});

right.addEventListener("click", () => {
  yourStory.value = "";
  yourStory.placeholder =
    "Paste a YouTube, Vimeo or Twitter link, and press Enter";
});

camera.addEventListener("click", () => {
  yourStory2.value = "";
  yourStory2.placeholder = "Place your photo(s) here";
});

left.addEventListener("click", () => {
  yourStory2.value = "";
  yourStory2.placeholder =
    "Paste a YouTube, Vimeo or Twitter link, and press Enter";
});

right.addEventListener("click", () => {
  yourStory2.value = "";
  yourStory2.placeholder =
    "Paste a YouTube, Vimeo or Twitter link, and press Enter";
});
