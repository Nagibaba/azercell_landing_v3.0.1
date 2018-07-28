document.addEventListener('DOMContentLoaded', function (ev) {
    var minutesDOM = document.querySelector('.minutes'),
    secondsDOM = document.querySelector('.seconds');
    var minutes = parseInt(minutesDOM.getAttribute('data-count')),
    seconds = parseInt(secondsDOM.getAttribute('data-count'));

    var countDown = setInterval(function () {
        if (seconds == 1 && minutes == 0) {
            countDownEnded();
            clearInterval(countDown);
        }
        seconds -= 1;

        if (seconds < 0) {
            minutes -= 1;
            seconds = 60;
        }

        var secondsText = seconds < 10 ? '0' + seconds : seconds;
        var minutesText = minutes < 10 ? '0' + minutes : minutes;

        secondsDOM.innerHTML = secondsText;
        minutesDOM.innerHTML = minutesText;
    }, 1000);

    var countDownEnded = function countDownEnded() {
        console.log('ok');
    };
});