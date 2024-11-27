document.getElementById('fileInput').addEventListener('change', function() {
    var fileList = document.getElementById('fileList');
    fileList.innerHTML = ''; // Очищаем список файлов перед обновлением

    for (var i = 0; i < this.files.length; i++) {
        var file = this.files[i];
        var listItem = document.createElement('div');
        listItem.textContent = file.name;
        fileList.appendChild(listItem);
    }
});