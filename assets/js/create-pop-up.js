$(document).ready(function() { 
    $('#createToggleMenu').click(function() {
        $('.create-popup').slideToggle(300, function() {
            // После завершения анимации проверяем состояние отображения
            if ($(this).css('display') === 'none') {
                $(this).css('display', 'flex'); // Установка display:flex, если скрыто
            }
        });
        $('.blur-page').addClass('active');

    });

    $('#closeCreateMenu').click(function() {
        $('.create-popup').slideUp(300); // Плавное закрытие меню
        $('.blur-page').removeClass('active');
    });
});