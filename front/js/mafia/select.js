var count = 10;

var roles = [
  document.getElementById("mafia"),
  document.getElementById("detective"),
  document.getElementById("doctor"),
  document.getElementById("innocent")
];

document.getElementById("number-message").innerHTML = "There are " + (count - 1) + " players and one master";

for (var i = 0; i < roles.length; i++) {
    for (var j = 0; j < count; j++) {
        var elem =  document.createElement("option");
        elem.setAttribute("value", j);
        elem.setAttribute("class", "option");
        elem.innerHTML = j;
        roles[i].appendChild(elem);
    }
}

var button = document.getElementById("next");

document.body.onchange = function (event) {
    var current = 0;
    var wrong = document.getElementById("wrong");
    roles.forEach(function (role) {
        current += +role.value;
        if (current >= count) {
            wrong.innerHTML = "Too many roles";
            wrong.style.display = "block";
            button.onclick = null;
        } else if (current + 1 < count) {
            wrong.innerHTML = "Not enough roles";
            wrong.style.display = "block";
            button.onclick = null;
        } else {
            wrong.style.display = "none";
            button.onclick = validate;
        }
    });
};

var dialog = document.getElementById("warning");
var pageheight = document.documentElement.clientHeight;
var pagewidth = document.documentElement.clientWidth;
dialog.style.height = pageheight / 2 + "px";
dialog.style.width = pagewidth / 3 + "px";
dialog.style.left = (pagewidth / 2 - parseFloat(getComputedStyle(dialog).width)/2) + "px";
dialog.style.top = (pageheight / 2 - parseFloat(getComputedStyle(dialog).height)/2) + "px";
var form = document.getElementById("form");

function validate() {
    if (document.getElementById("mafia").value == 0 || document.getElementById("innocent") == 0) {
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



