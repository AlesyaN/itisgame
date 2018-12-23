<#ftl encoding="UTF-8"/>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Распределите роли</title>
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
        <li><a href="../contact.html">Контакты</a></li>
    </ul>
</header>
    <input value="${players}" id="players" hidden>
    <div id="warning" class="warning hide">
        <button id="close" class="delete-btn big">x</button>
        <div class="warning-text" style="font-size: 22px; margin-left: 10px" id="warning-dialog">В игре должен быть хотя бы 1 мафия и 1 мирный житель!</div>
    </div>
    <div class="select-container">
        <h1 class="txt">МАФИЯ</h1>
        <div id="number-message" style="margin-bottom: 0" class="description txt"></div>
        <div id="description" class="description txt">Распределите роли в игре</div>
        <form id="form">
            <div class="block">
                <label class="label txt" for="mafia">Мафия:</label><br>
                <select class="select" id="mafia"></select><br>
            </div>
            <div class="block">
                <label class="label txt" for="detective">Комиссар:</label><br>
                <select class="select" id="detective"></select><br>
            </div>
            <div class="block">
                <label class="label txt" for="doctor">Доктор:</label><br>
                <select class="select" id="doctor"></select><br>
            </div>
            <div class="block">
                <label class="label txt" for="innocent">Мирный:</label><br>
                <select class="select" id="innocent"></select><br>
            </div>
            <div>
                <input id="next" style="margin-left: 0; margin-top:35px" class="start txt" onclick="validate()" type="button" value="ОК">
            </div>
        </form>
    </div>
    <script src="/js/mafia/select.js"></script>
</div>
</body>
</html>