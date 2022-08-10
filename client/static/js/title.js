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
    titleLabel.style.display = "inline";
  } else {
    titleLabel.display = "none";
  }
});
