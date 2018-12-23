function User(n, a) {
    this.name = n;
    this.alive = a;
    this.role;

    this.setRole = function (role) {
        this.role = role;
    }
}

var players = [];

var pname = document.getElementById("players").value.split("-");
for (var i = 0; i < pname.length; i++) {
    players.push(new User(pname[i], true));
}

var roles = {};
roles.mafia = parseInt(document.getElementById("mafia").value);
roles.detective = parseInt(document.getElementById("detective").value);
roles.doctor = parseInt(document.getElementById("doctor").value);
roles.innocent = parseInt(document.getElementById("innocent").value);

window.onload = function () {
    generateRoles();
    showPlayers();
};

function generateRoles() {
    var copyroles = Object.assign({}, roles);;
    for (var i = 0; i < players.length; i++) {
        while (players[i].role == undefined) {
            var role = Object.keys(copyroles)[parseInt(Math.random() * players.length)];
            if (copyroles[role] > 0) {
                players[i].setRole(role);
                copyroles[role]--;
            }
        }
    }
}

var count = players.length;
function showPlayers() {
    var ul = document.getElementById("list-of-players");
    var i = 0;
    while (i < count) {
        var div = document.createElement("div");
        div.setAttribute("class", "mafia-container");
        var b;
        if (count - i > 6) {
            b = 6;
        } else {
            b = count - i;
        }
        for (var j = 0; j < b; j++) {
            var elem = document.createElement("div");
            elem.setAttribute("class", "card fade");
            var img = document.createElement("img");
            img.setAttribute("src", "../../img/" + players[i].role + ".png");
            if (count < 7) {
                elem.style.height = "240px";
                img.setAttribute("class", "card-img");
            } else if (count < 13) {
                elem.style.height = "180px";
                img.setAttribute("class", "card-img-medium");
            } else {
                elem.style.height = "160px";
                img.setAttribute("class", "card-img-small");
            }
            elem.style.width = "180px";
            elem.appendChild(img);
            elem.innerHTML += "<div class='mafia-text''><b>" + players[i].name + "</b></div>";
            var text = document.createElement("div");
            text.setAttribute("class", 'mafia-text');
            if (players[i].role == "mafia") {
                text.innerHTML += "Мафия";
            } else if (players[i].role == "detective") {
                text.innerHTML += "Комиссар";
            } else if (players[i].role == "doctor") {
                text.innerHTML += "Доктор";
            } else if (players[i].role == "innocent") {
                text.innerHTML += "Мирный житель";
            }
            elem.appendChild(text);
            var killbutton = document.createElement("button");
            killbutton.setAttribute("class", "kill");
            killbutton.innerHTML = "УБИТЬ";
            killbutton.onclick = kill;
            elem.appendChild(killbutton);
            div.appendChild(elem);
            i++;
        }
        ul.appendChild(div);
    }
}

function kill(event) {
    var player = event.target.parentNode;
    var name = player.children[1].firstChild.innerHTML;
    killPlayerByName(name);
    checkGameOver();
    event.target.classList.toggle("alive");
    if (event.target.innerHTML == "УБИТЬ") {
        event.target.innerHTML = "ОЖИВИТЬ";
    } else {
        event.target.innerHTML = "УБИТЬ";
    }
    player.classList.toggle("fade-card");
}

var dialog = document.getElementById("warning");
var close = document.getElementById("close");
var pageheight = document.documentElement.clientHeight;
var pagewidth = document.documentElement.clientWidth;
dialog.style.height = pageheight / 2 + "px";
dialog.style.width = pagewidth / 3 + "px";
dialog.style.left = (pagewidth / 2 - parseFloat(getComputedStyle(dialog).width)/2) + "px";
dialog.style.top = (pageheight / 2 - parseFloat(getComputedStyle(dialog).height)/2) + "px";
close.style.position = "absolute";
close.style.top = parseInt(dialog.style.height) / 2 + "px";
close.style.right = "10px";
var message = document.getElementById("warning-dialog");

function checkGameOver() {
    console.log(roles);
    if (roles["mafia"] == 0) {
        message.innerHTML = "Мирные жители победили!";
        showDialog();
    } else {
        var flag = true;
        var keys = Object.keys(roles);
        for (var i = 0; i < keys.length; i++) {
            if (roles[keys[i]] != 0 && keys[i] != "mafia") {
                flag = false;
            }
        }
        if (flag) {
            message.innerHTML = "Мафия победила!";
            showDialog();
        }

    }
}

function showDialog() {
    dialog.classList.toggle("hide");
    document.getElementById("dark").classList.toggle("dark-mafia");
    var fade = document.getElementsByClassName("fade");
    for (var i = 0; i < fade.length; i++) {
        fade[i].classList.toggle("fade-fade");
    }
}

function close(event) {
    dialog.classList.toggle("hide");
    document.getElementById("dark").classList.toggle("dark");
    var txt = document.getElementsByClassName("txt");
    for (var i = 0; i < txt.length; i++) {
        txt[i].classList.toggle("fade-text");
    }
}

function killPlayerByName(name) {
    for (var i = 0; i < players.length; i++) {
        console.log("name: " + name + " " + players[i].name);
        if (players[i].name == name) {
            if (players[i].alive) {
                players[i].alive = false;
                roles[players[i].role]--;
            } else {
                players[i].alive = true;
                roles[players[i].role]++;
            }
            console.log("  " + roles);
        }
    }
}

