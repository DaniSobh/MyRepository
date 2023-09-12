const myDiv = document.getElementById("myDiv");
const button = document.getElementById("preinterview_getback");
const newContent = document.querySelector(".new-content");
const preintw = document.querySelector(".preintw");
const durintw = document.querySelector(".durintw");
const postintw = document.querySelector(".postintw");
const newContent2 = document.querySelector(".new-content2");
const button2 = document.querySelector(".durintwbtn");
const footer = document.querySelector(".footer");
const newContent3 = document.querySelector(".new-content3");
const button3 = document.querySelector(".postintwbtn");

let preintwClicked = false;
let durintwClicked = false;
let postintwClicked = false;

myDiv.addEventListener("click", function() {
  preintwClicked = !preintwClicked;
  
  if (preintwClicked) {
    // Clicked preintw, show new-content, hide others
    footer.style.bottom="-470%";
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


// DURING INTERVIEW

durintw.addEventListener("click", function() {
  durintwClicked = !durintwClicked;
  
  if (durintwClicked) {
    // Clicked preintw, show new-content, hide others
    footer.style.bottom = "-530%";
    newContent2.style.display = "flex";
    preintw.style.display = "none";
    durintw.style.display = "none";
    postintw.style.display = "none";
    window.scrollTo({
                top: 0,
                behavior: "smooth"  
            });
  } else {
    // Clicked preintw again, hide new-content, show others
    newContent2.style.display = "none";
    preintw.style.display = "flex";
    durintw.style.display = "flex";
    postintw.style.display = "flex";
  }
});

//PREINTW BUTTON

button.addEventListener("click", function() {
  // Clicked the button, hide new-content, show all
  newContent.style.display = "none";
  preintw.style.display = "block";
  durintw.style.display = "flex";
  postintw.style.display = "block";
  footer.style.bottom = "-190%";
});

//DURINTW BUTTON

button2.addEventListener("click", function() {
  // Clicked the button, hide new-content, show all
  footer.style.bottom = "-190%";
  newContent2.style.display = "none";
  preintw.style.display = "flex";
  durintw.style.display = "flex";
  postintw.style.display = "flex";
});


//SCROLLUP BUTTON

var scrollToTopButton = document.getElementById("scrollToTopButton");

        
        window.addEventListener("scroll", function() {
            if (window.scrollY >= 1400) {
                scrollToTopButton.style.display = "block";
            } else {
                scrollToTopButton.style.display = "none";
            }
        });

        // Scroll to the top when the button is clicked
        scrollToTopButton.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Smooth scrolling animation
            });
        });

  //BACK BUTTON

  const back = document.getElementById("back");

  back.addEventListener("click", function(){
    window.close();
  })

  //postinterview

postintw.addEventListener("click", function(){
  postintwClicked = !postintwClicked;

  if (postintwClicked) {
    // Clicked postintw, show new-content, hide others
    footer.style.bottom = "-470%";
    newContent3.style.display = "flex";
    preintw.style.display = "none";
    durintw.style.display = "none";
    postintw.style.display = "none";
    window.scrollTo({
                top: 0,
                behavior: "smooth"  
            });
  } else {
    // Clicked preintw again, hide new-content, show others
    newContent2.style.display = "none";
    preintw.style.display = "flex";
    durintw.style.display = "flex";
    postintw.style.display = "flex";
  }
});

//POSTINTW BUTTON

 button3.addEventListener("click", function() {
  // Clicked the button, hide new-content, show all
  newContent3.style.display = "none";
  preintw.style.display = "flex";
  durintw.style.display = "flex";
  postintw.style.display = "flex";
  footer.style.bottom = "-190%";
});
