var count = 10;

var roles = [
  document.getElementById("mafia"),
  document.getElementById("detective"),
  document.getElementById("doctor"),
  document.getElementById("innocent")
];

for (var i = 0; i < roles.length; i++) {
    for (var j = 0; j < count; j++) {
        var elem =  document.createElement("option");
        elem.setAttribute("value", j);
        elem.innerHTML = j;
        roles[i].appendChild(elem);
    }
}


document.body.onchange = function (event) {
    var current = 0;
    var wrong = document.getElementById("wrong");
    roles.forEach(function (role) {
        current += +role.value;
        if (current >= count) {
            wrong.style.display = "block";
        } else {
            wrong.style.display = "none";
        }
    });
};



