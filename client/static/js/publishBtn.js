/********************************************************************* publish btn */
for (let i = 0; i < bothBtns.length; i++) {
  // btn click functions
  bothBtns[i].addEventListener("click", (event) => {
    event.preventDefault();

    // removes icons
    iconsBg.style.display = "none";
    left.style.display = "none";
    right.style.display = "none";
    camera.style.display = "none";

    // displays red message for smaller screens
    if (getWidth() < 992) {
      // input handling
      if (title.value.length > 40) {
        warningPara.textContent = "Title is too big";
      } else if (title.value.length === 0) {
        warningPara.textContent = "Title cannot be empty";
      } else if (yourName.value.length > 40) {
        warningPara.textContent = "Author is too big";
      } else if (yourName.value.length === 0) {
        warningPara.textContent = "Author cannot be empty";
      } else if (yourStory.value.length > 40) {
        warningPara.textContent = "Your story is too big";
      } else if (yourStory.value.length === 0) {
        warningPara.textContent = "Your story cannot be empty";
      } else {
        warningPara.textContent = "";
        btn.textContent = "EDIT";
      }
    }

    // displays red message for larger screens
    if (getWidth() >= 992) {
      // input handling
      if (title.value.length > 40) {
        warningPara.textContent = "Title is too big";
      } else if (title.value.length === 0) {
        warningPara.textContent = "Title cannot be empty";
      } else if (yourName.value.length > 40) {
        warningPara.textContent = "Author is too big";
      } else if (yourName.value.length === 0) {
        warningPara.textContent = "Author cannot be empty";
      } else if (yourStory2.value.length > 40) {
        warningPara.textContent = "Your story is too big";
      } else if (yourStory2.value.length === 0) {
        warningPara.textContent = "Your story cannot be empty";
      } else {
        warningPara.textContent = "";
        btn2.textContent = "EDIT";
        titleLabel.style.display = "none";
        title.style.borderColor = "#fffafa";
        authorLabel.style.display = "none";
        yourName.style.borderColor = "#fffafa";
        timeStamp.style.display = "block";
      }
    }
  });
}
