

function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    menuItems.style.display = menuItems.style.display === "none" ? "block" : "none";
}

  //EXPLORE BUTTON

  let explorebtn = document.getElementById("homepage_resume_button");

  explorebtn.addEventListener('click', function resume(){
    window.open("cv.html");
  })


  //START NOW BUTTON

  const startnow = document.getElementById("homepage_interview_button");

  startnow.addEventListener("click", function(){
    window.open("interview.html");
  });


  //ARROW 1

  const arrow1 = document.getElementById("arrow1");
  explorebtn.addEventListener("mouseover", function(){
      arrow1.style.display="block";
      arrow1.currentTime = 0; 
     arrow1.play();
  });

  explorebtn.addEventListener("mouseout", function(){
    arrow1.style.display="none";
    
});

//ARROW 2

const arrow2 = document.getElementById("arrow2");
  startnow.addEventListener("mouseover", function(){
      arrow2.style.display="block";
      arrow2.currentTime = 0; 
     arrow2.play();
  });

  startnow.addEventListener("mouseout", function(){
    arrow2.style.display="none";
    
});
