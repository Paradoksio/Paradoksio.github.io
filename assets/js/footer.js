$(document).ready(function () {
    // Настройка параметров .footer__anim при загрузке страницы
    updateFooterAnim();

    // Обработчик клика по элементу .footer__menu__mobile
    $('.footer__menu__mobile').click(function () {
        $('.footer__menu').toggleClass('expanded');
        $('.footer__menu__container').toggleClass('expanded');
        $('.footer-line').toggleClass('active');
    });

    var magicBallClicked = false;

    $('.footer__menu__item1').click(function () {
        var $this = $(this);
        var isMagicBall = $this.attr('id') === 'magicBall';
        
        // Удаляем класс active у всех элементов, кроме magicBall
        if (isMagicBall) {
            $('.footer__menu__item1').toggleClass('mball');
        } else {
            $('.footer__menu__item1').removeClass('mball');
        }
    
        // Присваиваем класс active только кликнутому элементу
        $('.footer__menu__item1').toggleClass('active', isMagicBall || magicBallClicked);
    
        if (isMagicBall) {
            if (!magicBallClicked) {
                if ($(window).width() < 1000) {
                    $('#magicBall img').attr('src', './assets/img/footer_bal_mob.svg');
                } else {
                    $('#magicBall img').attr('src', './assets/img/footer_ball_light.svg');
                }
                magicBallClicked = true;
            } else {
                $('#magicBall img').attr('src', './assets/img/footer_ball.svg');
                magicBallClicked = false;
            }
        }
    });

    // Обработчик клика по элементам .footer__menu__item
    $('.footer__menu__item').click(function () {
        var $this = $(this);



        $('.footer__menu__item').removeClass('active');

        // Присваиваем класс active только кликнутому элементу
        $this.addClass('active');




        // Присваиваем текст или изменяем атрибут src в footer__menu__mobile p
        var mobileContent = $this.text();
        $('.footer__menu__mobile p').text(mobileContent);

        // Обновляем параметры анимации


        if ($(window).width() > 1000) {

        } else {
            if ($this.attr('id') === 'magicBall') {
                $('.footer__menu__ball__mobile').toggleClass('clicked');
                $('.footer__menu__container').toggleClass('mob');
                $('#magicBall img').attr('src', './assets/img/footer_ball_light.svg');
            } else {
                $('.footer__menu__ball__mobile').removeClass('clicked');
                $('.footer__menu__container').removeClass('mob');
                $('#magicBall img').attr('src', './assets/img/footer_ball.svg');
            }
        }
        updateFooterAnim();

    });

    // Функция для обновления параметров анимации
    function updateFooterAnim() {
        var activeItem = $('.footer__menu__item.active');
        var animElement = $('.footer__anim');
        var mobLong = $('#Communication');
        var mobLongAnim = mobLong.outerWidth();
        var mobWidthAnim = $('.footer__menu__mobile');
        var mobWidth = mobWidthAnim.outerWidth();

        var activeItemPosition = activeItem.position();
        var activeItemWidth = activeItem.outerWidth();
        var activeItemHeight = activeItem.outerHeight();

        if ($(window).width() < 1000) {
            if ($('#Communication').hasClass('active')) {
                animElement.css({
                    'left': 4 + 'px',
                    'top': activeItemPosition.top + 'px',
                    'width': mobWidth + 'px',
                    'height': activeItemHeight + 'px'
                });
            } else {
                animElement.css({
                    'left': 4 + 'px',
                    'top': activeItemPosition.top + 'px',
                    'width': mobLongAnim + 'px',
                    'height': activeItemHeight + 'px'
                });
            }

        } else {

            animElement.css({
                'left': activeItemPosition.left + 'px',
                'top': activeItemPosition.top + 'px',
                'width': activeItemWidth + 'px',
                'height': activeItemHeight + 'px'
            });
        }
    }
});
