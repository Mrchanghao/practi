var hourDigit = document.querySelector('.hour');
var minuteDigit = document.querySelector('.minute');
var secondDigit = document.querySelector('.second');
var half = document.querySelector('.half');

var watch = function() {
    var currentDate = new Date();
    var hours = current.getHours();
    var minutes = current.getMinutes();
    var seconds = current.getSeconds();
    if (hours > 12) {
        hours = hours - 12;
        half.innerHTML = 'PM';
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    hourDigit.innerHTML = hours;
    minuteDigit.innerHTML = minutes;
    secondDigit.innerHTML = seconds;
}

setInterval(watch(), 1000);