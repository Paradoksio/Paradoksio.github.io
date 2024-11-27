$(document).ready(function(){
    if ($(window).width() > 1000) { 
        $('#magicBall').click(function() { 
            var currentCSSPath = $('link[href="./assets/css/index.css"]').attr('href');
            
            if (currentCSSPath === './assets/css/index.css') {
                $('link[href="./assets/css/index.css"]').attr('href', './assets/css/index-magic.css');
            } else {
                $('link[href="./assets/css/index-magic.css"]').attr('href', './assets/css/index.css');
            }
            
        });
        $('#Communication').click(function() { 
            $('.start').addClass('active');
            $('.comm').addClass('active');
            $('.sale').removeClass('active');
        });
        $('#Creative').click(function() { 
            $('.start').removeClass('active');
            $('.comm').removeClass('active');
            $('.sale').removeClass('active');
        });
        $('#Sale').click(function() { 
            $('.start').addClass('active');
            $('.sale').addClass('active');
            $('.comm').removeClass('active');
        });
    } else { 
        $('#magicBall').click(function() { 
            var currentCSSPath = $('link[href="./assets/css/index.css"]').attr('href');
            
            if (currentCSSPath === './assets/css/index.css') {
                $('link[href="./assets/css/index.css"]').attr('href', './assets/css/index-magic.css');
            } else {
                $('link[href="./assets/css/index-magic.css"]').attr('href', './assets/css/index.css');
            }
            $('.footer__menu__item1').toggleClass('mball');
        });
        $('#Communication').click(function() { 
            $('.start').addClass('active');
            $('.comm').addClass('active');
            $('.sale').removeClass('active');
        });
        $('#Creative').click(function() { 
            $('.start').removeClass('active');
            $('.comm').removeClass('active');
            $('.sale').removeClass('active');
        });
        $('#Sale').click(function() { 
            $('.start').addClass('active');
            $('.sale').addClass('active');
            $('.comm').removeClass('active');
        });
    }
});