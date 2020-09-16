const toggleBtn = document.querySelector('.nav_btn');
const menu_bar = document.querySelector('.menu');
const icon_bar = document.querySelector('.icon');

toggleBtn.addEventListener('click', () => {
    menu_bar.classList.toggle('active');
    icon_bar.classList.toggle('active');
})