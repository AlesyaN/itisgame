function User(n, a) {
    this.name = n;
    this.alive = a;
    this.role;

    this.setRole = function (role) {
        this.role = role;
    }
}

var players = [
    new User("Lesya", true),
    new User("Stepa", true),
    new User("Kama", true),
    new User("Lia", true),
    new User("Elena", true)
];

var roles = {
    master: 1,
    mafia: 1,
    detective: 1,
    doctor: 0,
    innocent: 2
};

window.onload = function () {
    generateRoles();
    showPlayers();
};

function generateRoles() {
    for (var i = 0; i < players.length; i++) {
        while (players[i].role == undefined) {
            var role = Object.keys(roles)[parseInt(Math.random() * players.length)];
            if (roles[role] > 0) {
                players[i].setRole(role);
                roles[role]--;
            }
        }
    }
}


function showPlayers() {
    var ul = document.getElementById("list-of-players");
    players.forEach(function(player) {
        var elem = document.createElement("li");
        elem.innerHTML = "Name: " + player.name + "<br>" +
                         "Alive: " + player.alive + "<br>" +
                         "Role: " + player.role;
        var killbutton = document.createElement("button");
        killbutton.innerHTML = "kill";
        killbutton.onclick = kill;
        elem.appendChild(killbutton);
        ul.appendChild(elem);
    });
}

function kill(event) {
    var player = event.target.parentNode.innerHTML;
    //todo killing
    console.log(player);
}

