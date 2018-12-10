var prediction = [
    "Сегодня день будет немного грустным. Ведь ты можешь услышать на паре “Что вы веселитесь? Нарываетесь, чтобы я вас огорчил?”(Стребков). Будьте внимательны на лекциях и активными на парах.",
    "Сегодня будет продуктивный день. Возможно, Вам предстоит решить >реальную задачу и одну. Будь готов!",
    "Эх.. А ведь и друг может на грант кинуть.",
    "Сегодня  у тебя будет прекрасный день, ведь ты не ащислен.",
    "АЙТИРЫНОК нуждается именно в тебе. Клавиатуру в руки и бегом прогать.",
    "Скоро сессия. Не забудь, что ты можешь быть ащислен. Готовься.",
    "Допка или нет? Решать тебе.",
    "Как говорит М.М. Арсланов: Во время экзамена у меня начнется борьба с вами. Вы будете стараться получить двойку, а я - поставить вам три . Не подведи и начни готовиться.",
    "Улыбнись, ведь всё хорошо, ты же не стирал доску у Арсланова, а особенно его матрицы?! Тогда действительно всё хорошо.",
    "Допка не приговор.",
    "Пока не ащислен и жизнь хороша.",
    "Без булдрабыз!",
    "Алга!"
];
//alert(prediction[random]);

var modal = document.getElementById("myModal");
var btn = document.getElementById("button");
var span = document.getElementsByClassName("close")[0];
var tegForRandom = document.getElementById("tegForRandom");

btn.onclick = function () {
    modal.style.display = "block";
    var random = Math.floor(Math.random() * prediction.length);
    tegForRandom.innerHTML = prediction[random];
};

span.onclick = function () {
    modal.style.display = "none"
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
