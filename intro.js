const toggleBtn = document.querySelector('.nav_btn');
const menu_bar = document.querySelector('.menu');
const icon_bar = document.querySelector('.icon');

toggleBtn.addEventListener('click', () => {
    menu_bar.classList.toggle('active');
    icon_bar.classList.toggle('active');
});

const showBtn = document.querySelector('.click_btn');
const show_base = document.querySelector('.base');
const show_belong = document.querySelector('.belong');
const show_activity = document.querySelector('.activity');
const show_sns = document.querySelector('.sns');

showBtn.addEventListener('click',() =>{
    show_base.classList.toggle('active');
    show_belong.classList.toggle('active');
    show_activity.classList.toggle('active');
    show_sns.classList.toggle('active');

});