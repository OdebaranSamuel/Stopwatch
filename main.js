const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const milliseconds = document.querySelector("#milliseconds");
const seconds = document.querySelector("#seconds");
const minutes = document.querySelector("#minutes");
const hours = document.querySelector("#hours");

let changeHours = 0;
let changeMinutes = 0;
let changeSeconds = 0;
let changeMilliseconds = 0;
let isPause = false;
let interval;

start.addEventListener("click", play);
function play() {
    interval = setInterval(() => {
        if (!isPause) {
            changeMilliseconds += 10;
            if (changeMilliseconds === 1000) {
                changeSeconds += 1;
                changeMilliseconds = 0;
            }
            if (changeSeconds === 60) {
                changeMinutes += 1;
                changeSeconds = 0;
            }
            if (changeMinutes === 60) {
                changeHours += 1;
                changeMinutes = 0;
            }
            milliseconds.textContent = changeMilliseconds;
            seconds.textContent = formatTime(changeSeconds);
            minutes.textContent = formatTime(changeMinutes);
            hours.textContent = formatTime(changeHours);
        }
    }, 10);
}

function formatTime(time) {
    if (time < 10) {
        return `0${time}`;
    } else {
        return time;
    }
}

// para o cronômetro
pause.addEventListener("click", stop);
function stop() {
    clearInterval(interval);
}

// zera o meu cronometro
reset.addEventListener("click", resume);
function resume() {
    clearInterval(interval);
    changeMilliseconds = 0;
    changeSeconds = 0;
    changeMinutes = 0;
    changeHours = 0;

    milliseconds.textContent = "000";
    seconds.textContent = "00";
    minutes.textContent = "00";
}
