var images = document.querySelectorAll('.sized');
var modal = document.getElementById('imageModal');
var modalImage = document.getElementById('modalImage');
var closeButton = document.querySelector('.close');

images.forEach(function(image) {
    image.addEventListener('click', function() {
        // Отображаем модальное окно
        modal.style.display = 'block';
        // Устанавливаем изображение в модальное окно
        modalImage.src = this.src;
    });
});

closeButton.addEventListener('click', function() {
    // Скрываем модальное окно
    modal.style.display = 'none';
});