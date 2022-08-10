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
  yourStory.placeholder = "Place your photo(s) here";
});

left.addEventListener("click", () => {
  yourStory.placeholder =
    "Paste a YouTube, Vimeo or Twitter link, and press Enter";
});

right.addEventListener("click", () => {
  yourStory.placeholder =
    "Paste a YouTube, Vimeo or Twitter link, and press Enter";
});

camera.addEventListener("click", () => {
  yourStory2.placeholder = "Place your photo(s) here";
});

left.addEventListener("click", () => {
  yourStory2.placeholder =
    "Paste a YouTube, Vimeo or Twitter link, and press Enter";
});

right.addEventListener("click", () => {
  yourStory2.placeholder =
    "Paste a YouTube, Vimeo or Twitter link, and press Enter";
});
