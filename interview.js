const myDiv = document.getElementById("myDiv");
const button = document.getElementById("preinterview_getback");
const newContent = document.querySelector(".new-content");
const preintw = document.querySelector(".preintw");
const durintw = document.querySelector(".durintw");
const postintw = document.querySelector(".postintw");

let preintwClicked = false;

myDiv.addEventListener("click", function() {
  preintwClicked = !preintwClicked;
  
  if (preintwClicked) {
    // Clicked preintw, show new-content, hide others
    newContent.style.display = "block";
    preintw.style.display = "none";
    durintw.style.display = "none";
    postintw.style.display = "none";
  } else {
    // Clicked preintw again, hide new-content, show others
    newContent.style.display = "none";
    preintw.style.display = "block";
    durintw.style.display = "block";
    postintw.style.display = "block";
  }
});

button.addEventListener("click", function() {
  // Clicked the button, hide new-content, show all
  newContent.style.display = "none";
  preintw.style.display = "block";
  durintw.style.display = "block";
  postintw.style.display = "block";
});