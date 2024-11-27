$(document).ready(function() { 
    $('.header__more').click(function() { 
        $('.header__list a').removeClass('full');
        $('.header__list a').toggleClass('active');
        $('.header__more__icon').toggleClass('active');
         
        
    });

    $('.header__more__icon').click(function() { 
        $('.header__list a').toggleClass('full')
    });

    var headerBtn = document.querySelectorAll('.header__list a');
    

    headerBtn.forEach(function(item){
        item.addEventListener("click", function(){ 
            headerBtn.forEach(function(point) { 
                point.classList.remove('clicked');
            });
            item.classList.toggle('clicked');
        })
    });

    function toggleActiveClass() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop === 0) {
            $('.header__list a').addClass('active');
            $('.header__more__icon').addClass('active');
        } else {
            $('.header__list a').removeClass('active');
            $('.header__more__icon').removeClass('active');
        }
    }

    // Вызов функции при загрузке страницы
    toggleActiveClass();

    // Вызов функции при прокрутке страницы
    $(window).scroll(function() {
        toggleActiveClass();
    });
});