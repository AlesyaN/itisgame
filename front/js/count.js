function timeLeft() {
    let timeFinish = new Date(2019, 0, 8),
        timeNow = new Date().getTime(),
        sec = Math.floor((timeFinish - timeNow) / 1000),
        secToMinutes = sec % 3600,
        hoursToDays = Math.floor(sec / 3600),
        hoursLeft = hoursToDays % 24,
        daysLeft = Math.floor(hoursToDays / 24),
        minutesLeft = Math.floor(secToMinutes / 60),
        secondsLeft = (secToMinutes % 60);

    return {
        seconds: secondsLeft,
        minutes: minutesLeft,
        hours: hoursLeft,
        days: daysLeft
    };
}

(function start() {
    setInterval(() => {
        let {seconds, minutes, hours, days} = timeLeft();
        let sec = document.getElementById("s"),
            min = document.getElementById("m"),
            hrs = document.getElementById("h"),
            d = document.getElementById("d");
        sec.innerHTML = seconds;
        min.innerHTML = minutes + ":";
        hrs.innerHTML = hours + ":";
        d.innerHTML = days + ":";
    });
})();


