const menuBtn = document.querySelector(".nav_btn");
const menuBar = document.querySelector(".menu");
const iconBar = document.querySelector(".icon");

menuBtn.addEventListener('click',() =>{
    menuBar.classList.toggle('active');
    iconBar.classList.toggle('active');
});