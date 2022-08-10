/********************************************************************* yourStory */
// allows textarea to expand auto when typing
function textAreaAdjust(element) {
  element.style.height = "1px";
  element.style.height = 25 + element.scrollHeight + "px";
}
