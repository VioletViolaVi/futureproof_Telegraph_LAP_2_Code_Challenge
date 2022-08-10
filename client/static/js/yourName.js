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
    authorLabel.style.display = "inline";
    yourName.style.borderLeft = "0.1rem solid grey";
  } else {
    authorLabel.style.display = "none";
  }
});
