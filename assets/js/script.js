const btnClose = document.querySelector('.btn-cookie');
const windowCookie = document.querySelector('.cookie-block');

btnClose.addEventListener('click', function() {
    windowCookie.classList.toggle('cookie-close');
});

/* Здесь должен был быть код для cookie, но он действительно был бы, 
если бы сайт пустили в работу, но это всего лишь демонстрация для портфолио */