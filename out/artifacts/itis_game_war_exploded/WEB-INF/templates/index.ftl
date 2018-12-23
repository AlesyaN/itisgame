<#ftl encoding="UTF-8"/>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="/js/count.js" type="text/babel"></script>
    <link rel="stylesheet" href="/css/style.css">

    <script>
        var arr = ['0.jpg',
            '1.jpg'];
        var idx = 0;

        function show(slides) {
            if(idx >1) idx = 0;
            document.getElementById('slide-show').style.backgroundImage = 'url(./img/' + slides[idx++] + ')';

        }
        setInterval("show(arr)", 6000);
    </script>

    <title>Itis Game</title>
</head>
<body id='slide-show'>


<!--шапка-->
<header >
    <a class="name" href="/main">ITIS GAME</a>
    <ul class="menu-main" onselectstart="return false">
        <li><a href="/main">Главная</a></li>
        <li><a href="/about">Про ИТИС</a></li>
        <li><a href="/contact">Контакты</a></li>
    </ul>
</header>


<div class="count">
    <p class="nameCount"> до экзаменов</p>
    <div class="thisCount"><span id="d"></span> <span id="h"></span> <span id="m"></span>
        <span id="s"></span></div>
</div>


<h1 class="welcome-index" id="welcome-index" onselectstart="return false">Hi, ITIS</h1>
<h2>click</h2>
<div class="conteiner">
    <div>
        <div class="game"><img class="game1" id = "button" src="/img/game1.jpg" width="280" height="280"> </div>
        <h1>Предсказания</h1>
    </div>

    <div id="myModal" class="modal" onselectstart="return false">
        <div class="modal-content">
            <p class="prediction">Предсказания</p>
            <p class="tegForRandom" id = "tegForRandom"></p>
            <span class="close">&times;</span>
        </div>
    </div>
    <script src="/js/random.js"></script>

    <div>
        <a href="/register"><div class="game"><img class="game2" src="/img/game2.jpg" width="260" height="308"></div></a>
        <h1 class="mafiaH1">Мафия</h1>
    </div>

    <div>
        <a href="/crocodile"> <div class="game"><img class="game3" src="/img/game3.jpg" width="260" height="273"></div></a>
        <h1>Крокодил</h1>
    </div>


    <div class="fire" id = "fire" style= "position: fixed; bottom: 0px; right:740px; top:-40px">
        <object type="application/x-shockwave-flash" data="http://all-blogspot.com/blog/swf/fireworks.swf" width="500" height="500"><param name="wmode" value="transparent"></object>
    </div>

    <script src="/js/salut.js"></script>
</div>
</body>
</html>