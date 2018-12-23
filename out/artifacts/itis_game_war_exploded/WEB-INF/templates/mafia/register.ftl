<#ftl encoding="UTF-8"/>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Мафия</title>
    <link rel="stylesheet" href="/css/style.css">
    <script type="application/javascript"
            src="/js/jquery-1.9.1.js"></script>
</head>
<body>
<div id="dark">
<header>
    <a class="txt name">ITIS GAME</a>
    <ul class="txt menu-main">
        <li><a href="../index.html">Главная</a></li>
        <li><a href="../about.html">Про ИТИС</a></li>
        <li><a href="../contact.html">О нас</a></li>
    </ul>
</header>
<div id="warning" class="warning hide">
    <button id="close" class="delete-btn big">x</button>
    <div class="warning-text">В игре должно быть минимум 4 игрока!</div>
</div>
<div id="register">
    <h1 class="txt">МАФИЯ</h1>
    <div class="txt description" id="war">Зарегистрируйте игроков</div>
    <form id="form" action="/register" class="txt" method="post">
        <div id="list-of-users"></div>
        <input class="new-player-input" autocomplete="off" id="new-user-text" type="text" placeholder="Введите имя">
        <input id="next" class="start" type="button" onclick="checkNumOfPlayers()" value="ОК">
    </form>
</div>
<script src="/js/mafia/register.js"></script>
</div>
</body>
</html>