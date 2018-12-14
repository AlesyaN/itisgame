var newUserbtn = document.getElementById("new-user-btn");
var listOfUsers = document.getElementById("list-of-users");
var newUserInput = document.getElementById("new-user-text");

var users = [];

function User(n, a) {
    this.name = n;
    this.alive = a;
    this.role;

    this.setRole = function (role) {
        this.role = role;
    }
}

newUserbtn.onclick = function (event) {
    var text = newUserInput.value;
    if (text != "") {
        users.push(new User(text, true));
        newUserInput.value = "";
        var newUser = document.createElement("li");
        var remove = document.createElement("button");
        newUser.innerHTML = text;
        remove.innerHTML = "-";
        remove.setAttribute("id", "delete-btn");
        remove.onclick = deleteUser;
        newUser.appendChild(remove);
        listOfUsers.appendChild(newUser);
    }
};

function deleteUser(event) {
    var name = event.target.parentNode.innerText;
    name = name.substring(0, name.length - 1);
    for (var i = 0; i < users.length; i++) {
        if (users[i].name == name) {
            users.splice(i, 1);
            console.log(users);
        }
    }
    event.target.parentNode.remove();
}

function checkNumOfPlayers() {
    if (users.length < 5) {
        alert("You need more players to play!");
    }
}

