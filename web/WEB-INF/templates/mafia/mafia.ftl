<#ftl encoding="UTF-8"/>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mafia</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
<input value="${players}" id="players" hidden>
<input value="${mafia}" id="mafia" hidden>
<input value="${detective}" id="detective" hidden>
<input value="${doctor}" id="doctor" hidden>
<input value="${innocent}" id="innocent" hidden>
<div id="dark">
<header>
    <a class="fade name">ITIS GAME</a>
    <ul class="fade menu-main">
        <li><a href="/main">Главная</a></li>
        <li><a href="/about">Про ИТИС</a></li>
        <li><a href="/contact">Контакты</a></li>
    </ul>
</header>
<div id="warning" class="warning hide">
    <div class="warning-text" style="font-size: 22px; margin-left: 10px" id="warning-dialog"></div>
    <a href="/register" id="close" class="start new-game">НОВАЯ ИГРА</a>
</div>
<h1 class="fade" style="margin-top: 0; margin-bottom: 30px">МАФИЯ</h1>
<div id="list-of-players">
</div>
</div>
    <script src="/js/mafia/mafia.js"></script>
</body>
</html>