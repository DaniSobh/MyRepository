//imma headout

const btn = document.querySelector("but3");

btn.addEventListener("click", mybutton3);

function mybutton3(){
   window.alert("heading out...");
   document.getElementById("but3").style.visibility="hidden";
   document.getElementById("but4").style.visibility="visible";
}  

//im back
const btn4= document.querySelector("but4");

btn4.addEventListener("click", mybutton4)

function mybutton4(){
   document.getElementById("but4").style.visibility="hidden";
   document.getElementById("but3").style.visibility="visible";
   window.alert("Unbelievable.");
}


//whatsapp

const btn5= document.getElementById("wpi");
btn5.addEventListener("click",mybutton5());

function mybutton5(){
   window.open("https://www.whatsapp.com")
}

//instagram

const btn6=document.getElementById("insi");

btn6.addEventListener("click", mybutton6());

function mybutton6(){
   window.open("https://www.instagram.com")
}

//facebook
const btn8=document.getElementById("fbi");

btn8.addEventListener("click", mybutton7());

function mybutton7(){
   window.open("https://www.facebook.com")
}

//sign up function

const btn7= document.getElementById("signup");


btn7.addEventListener("click", signupFunction());

function signupFunction(){

document.getElementById("signupform").style.display="flex";
document.getElementById("join").style.display="none";

}

//search

var form = document.querySelector("form");

// Get the search icon button element
var button = document.querySelector("button[type='submit']");

// Add a click event listener to the search icon button
button.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the input field element
  var input = document.getElementById("search");

  // Highlight the input value
  input.select();
});