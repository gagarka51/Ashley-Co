const btnMenu = document.querySelector('.burger-block');
const subMenu = document.querySelector('.nav-menu_sub');

btnMenu.addEventListener('click', function() {
    subMenu.classList.toggle('sub-show');
});