<#ftl encoding="UTF-8"/>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <title>Crocodile</title>
</head>
<body>
<header>
    <a class="name">ITIS GAME</a>
    <ul class="menu-main">
        <li><a href="/main">Главная</a></li>
        <li><a href="/about">Про ИТИС</a></li>
        <li><a href="/contact">Контакты</a></li>
    </ul>
</header>
<div class="center_content">
    <h2 class="basic_font">КРОКОДИЛ</h2>
    <a id="rules_button">(нажмите сюда, чтобы прочитать правила)</a>
    <h1 class="basic_font">Вам нужно изобразить следующее: </h1>
    <div class="generate_task">
        <h2 id="task" class="basic_font">сгенерируйте задание</h2>
    </div>
    <button class="button_generate" onclick="generate()">Сгенерировать</button>
</div>

<div id="modal_form">
    <span id="modal_close">Закрыть</span>
    <p id="rules">Для выбранного участника генерируется слово/словосочетание/предложение, которое необходимо показать
        остальным без слов. Генерируемые слова связаны с ИТИСом, например, «Абрамский передвинул дедлайн». Угадавший
        участник становится ведущим и генерирует себе в приложении новое слово.</p>
</div>
<div id="overlay"></div>
</body>

<script src="/js/crocodile/generate_tasks_crocodile.js"></script>
<script src="/js/crocodile/modal_window.js"></script>
</html>