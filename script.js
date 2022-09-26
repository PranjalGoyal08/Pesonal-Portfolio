function navcolor(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue < 100){
        navbar.classList.remove('sticky');
    }
    else{
        navbar.classList.add('sticky');
    }
}
window.addEventListener('scroll', navcolor);
// const menuButton = document.querySelector('.menu-btn i');
// const menu = document.querySelector('.navbar .menu');
// menuButton.addEventListener('click', ()=>{
//     menuButton.classList.toggle("active");
//     menu.classList.toggle("active");   
// });

$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});