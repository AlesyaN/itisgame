var newUserbtn = document.getElementById("new-user-btn");
var listOfUsers = document.getElementById("list-of-users");
var newUserInput = document.getElementById("new-user-text");
var form = document.getElementById("form");
var users = [];

var register = document.getElementById("register");
var i = 0;
var pageheight = document.documentElement.clientHeight;
var pagewidth = document.documentElement.clientWidth;
register.style.marginLeft = pagewidth / 2 - register.offsetWidth / 2 + "px";
register.style.marginTop = pageheight / 2 - register.offsetHeight /2 - 150  + "px";

var dialog = document.getElementById("warning");
dialog.style.height = pageheight / 2 + "px";
dialog.style.width = pagewidth / 3 + "px";
dialog.style.left = (pagewidth / 2 - parseFloat(getComputedStyle(dialog).width)/2) + "px";
dialog.style.top = (pageheight / 2 - parseFloat(getComputedStyle(dialog).height)/2) + "px";

function User(n, a) {
    this.name = n;
    this.alive = a;
    this.role;

    this.setRole = function (role) {
        this.role = role;
    }
}

form.onkeydown = function(event) {
    if(event.keyCode == 13) {
        event.preventDefault();
    }
};

newUserInput.onkeydown = function(event) {
    if (event.keyCode == 13) {
        var text = newUserInput.value;
        if (text != "") {
            users.push(new User(text, true));
            newUserInput.value = "";
            var newUserContainer = document.createElement("div");
            newUserContainer.setAttribute("class", "new-player");
            var remove = document.createElement("button");
            var userName = document.createElement("span");
            userName.innerHTML = text;
            remove.innerHTML = "x";
            remove.setAttribute("class", "delete-btn");
            remove.onclick = deleteUser;
            newUserContainer.appendChild(userName);
            newUserContainer.appendChild(remove);
            listOfUsers.appendChild(newUserContainer);
        }
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
        dialog.classList.toggle("hide");
        document.getElementById("dark").classList.toggle("dark");
        var txt = document.getElementsByClassName("txt");
        for (var i = 0; i < txt.length; i++) {
            txt[i].classList.toggle("fade-text");
        }
    } else {
        form.submit();
    }
}


var closedialog = document.getElementById("close");

function close(event) {
    dialog.classList.toggle("hide");
    document.getElementById("dark").classList.toggle("dark");
    var txt = document.getElementsByClassName("txt");
    for (var i = 0; i < txt.length; i++) {
        txt[i].classList.toggle("fade-text");
    }
}

closedialog.onclick = close;

document.getElementById("next").onkeydown = function (event) {
    if (event.keyCode == 13) {
        close(event);
    }
};










