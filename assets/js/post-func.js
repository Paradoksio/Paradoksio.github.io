var likeIcons = document.querySelectorAll('.like-icon');

likeIcons.forEach(function(likeIcon) {
    var originalSrc = likeIcon.src;
    var fillSrc = './assets/img/post-like-fill.svg';

    likeIcon.addEventListener('mouseenter', function() {
        likeIcon.src = fillSrc;
    });

    likeIcon.addEventListener('mouseleave', function() {
        likeIcon.src = originalSrc;
    });
});

var saveIcons = document.querySelectorAll('.save-icon');

saveIcons.forEach(function(saveIcon) {
    var originalSrc = saveIcon.src;
    var fillSrc = './assets/img/post_save_fill.svg';

    saveIcon.addEventListener('mouseenter', function() {
        saveIcon.src = fillSrc;
    });

    saveIcon.addEventListener('mouseleave', function() {
        saveIcon.src = originalSrc;
    });
});

var posts = document.querySelectorAll('.post');

// Обходим каждый контейнер и добавляем к нему обработчики событий
posts.forEach(function(post) {
    var commentContainer = post.querySelector('.post__comment');
    var showMoreButton = post.querySelector('.post__comment__show');

    // Функция для показа всех комментариев
    function showAllComments() {
        commentContainer.style.maxHeight = 'none'; // Убираем ограничение высоты
        showMoreButton.style.display = 'none'; // Скрываем кнопку "Show More"
    }

    // Добавляем обработчик события клика на кнопку "Show More" для каждого контейнера
    showMoreButton.addEventListener('click', showAllComments);
});

