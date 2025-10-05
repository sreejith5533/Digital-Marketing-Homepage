const hamburger = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.nav-menu');



hamburger.addEventListener("click",()=>{
  navMenu.classList.toggle('nav-block');
})