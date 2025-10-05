const hamburger = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.nav-menu');

const formEl = document.querySelector(".form-div");

const username = document.getElementById("name");
const email = document.getElementById("email");
const msg = document.getElementById("message");
const sbtBtn = document.querySelector('.msg-send');

formEl.addEventListener("submit",()=>{
  const inputName = username.value;
  const userEmail = email.value;
  const message = msg.value;

  if(inputName == ""){
    alert("Please Enter Your Name")
  }else if(userEmail == ""){
    alert("Please Enter Your Email")
  }else if(message.value == ""){
    alert("Please Enter Description Text")
  }
})


hamburger.addEventListener("click",()=>{
  navMenu.classList.toggle('nav-block');
})