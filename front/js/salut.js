var itisGame = document.getElementById("welcome-index" );
var fire = document.getElementById("fire");


itisGame.onmouseover = function () {
    fire.style.display = 'block';

    setTimeout("fire.style.display = 'none'", 7000);

};
