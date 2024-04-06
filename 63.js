document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("link1").addEventListener("click", function(e) {
        e.preventDefault();
        loadContent("01.html");
    });

    document.getElementById("link2").addEventListener("click", function(e) {
        e.preventDefault();
        loadContent("02.html");
    });

    document.getElementById("link3").addEventListener("click", function(e) {
        e.preventDefault();
        loadContent("03.html");
    });

    // Функция для загрузки
    function loadContent(file) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", file, true); // Открываем соединение GET
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("content").innerHTML = xhr.responseText; 
        }
        };
        xhr.send(); // Отправляем запрос
    }
});
  