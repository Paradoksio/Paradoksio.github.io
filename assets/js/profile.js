$(document).ready(function(){
    $('.profile__publ__head__item').click(function(){
        var $this = $(this);

        $('.profile__publ__head__item').removeClass('active');
        $this.addClass('active');

        if ($this.attr('id') === 'profileCreated') { 
            $('.profile__created').removeClass('close').addClass('open');
            $('.profile__favorites').removeClass('open').addClass('close');
        } else if ($this.attr('id') === 'profileFavorites'){ 
            $('.profile__created').removeClass('open').addClass('close');
            $('.profile__favorites').removeClass('close').addClass('open');
        }
    });
});