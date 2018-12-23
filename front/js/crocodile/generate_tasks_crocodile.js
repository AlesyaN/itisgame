var tasks = ["инкапсуляция", 'злой Абрамский', 'Абрамский выключил свет', 'Арсланов на допке', 'Абрамский на календаре КФУ', 'Арсланову во время лекции включили кондиционер',
    'Абрамский разозлился и у него в руке фломастер', 'Первак на посвяте', 'Когда ваша группа первая пишет кр по сетям',
    'Абрамский забыл колу на лекцию', 'множественное наследование', '3 кита ооп'];

var task = document.getElementById('task');

function generate() {
    var random = Math.floor(Math.random() * tasks.length);
    if (tasks.length === 0) {
        task.innerHTML = "Задания закончились"
    } else {
        task.innerHTML = tasks[random];
        tasks.splice(random, 1);
    }
}