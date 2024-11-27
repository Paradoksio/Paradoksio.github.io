window.addEventListener('scroll', function() {
    var panel = document.getElementById('parallax-panel');
    var scrolled = window.scrollY;

    // Устанавливаем новое вертикальное положение панели с учетом начального смещения
    panel.style.top = (88 - (scrolled / 10)) + 'px';

    var panel = document.getElementById('parallax-panel1');
    var scrolled = window.scrollY;

    // Устанавливаем новое вертикальное положение панели с учетом начального смещения
    panel.style.top = (88 - (scrolled / 10)) + 'px';
    
    var panel = document.getElementById('parallax-panel2');
    var scrolled = window.scrollY;

    // Устанавливаем новое вертикальное положение панели с учетом начального смещения
    panel.style.top = (88 - (scrolled / 10)) + 'px';
});