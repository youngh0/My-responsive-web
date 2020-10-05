const showBtn = document.querySelector('.click_btn');
const show_base = document.querySelector('.base');
const show_belong = document.querySelector('.belong');
const show_activity = document.querySelector('.activity');
const show_sns = document.querySelector('.sns');

showBtn.addEventListener('click',function (){
    show_base.classList.toggle('active');
    show_belong.classList.toggle('active');
    show_activity.classList.toggle('active');
    show_sns.classList.toggle('active');

});