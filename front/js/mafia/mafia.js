function User(n, a) {
    this.name = n;
    this.alive = a;
    this.role;

    this.setRole = function (role) {
        this.role = role;
    }
}

var players = [
    new User("А", true),
    new User("B", true),
    new User("C", true),
    new User("D", true),
    new User("E", true),
    new User("F", true),
    new User("G", true),
    new User("H", true),
    new User("I", true),
    new User("J", true),
    new User("K", true),
    new User("L", true),
    new User("M", true),
    new User("N", true),
    new User("O", true)
];

var roles = {
    master: 1,
    mafia: 1,
    detective: 1,
    doctor: 0,
    innocent: 12
};

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
            if (count < 7) {
                elem.style.height = "270px";
            } else if (count < 13) {
                elem.style.height = "200px";
            } else {
                elem.style.height = "170px";
            }
            elem.style.width = "180px";
            elem.innerHTML = "<span>" + players[i].name + "</span>"
               + "<br>" + players[i].role + "<br>";
            var killbutton = document.createElement("button");
            killbutton.setAttribute("class", "kill");
            killbutton.innerHTML = "KILL";
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
    var name = player.children[0].innerHTML;
    killPlayerByName(name);
    checkGameOver();
    event.target.classList.toggle("alive");
    event.target.innerHTML = "ALIVE";
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
    if (roles["mafia"] == 0) {
        message.innerHTML = "Innocent won!";
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
            message.innerHTML = "Mafia won!";
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
        if (players[i].name == name) {
            players[i].alive = false;
            roles[players[i].role]--;
        }
    }
}

