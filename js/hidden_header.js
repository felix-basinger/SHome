let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

if (scrollTop > lastScrollTop && scrollTop > 0) {
    // Прокрутка вниз — скрываем хэдер (убегает вверх)
    header.classList.add('hidden');
    header.classList.remove('visible');
} else if (scrollTop < lastScrollTop) {
    // Прокрутка вверх — показываем хэдер (возвращается вниз)
    header.classList.remove('hidden');
    header.classList.add('visible');
}

lastScrollTop = scrollTop;
});