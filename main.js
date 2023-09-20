const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const milliseconds = document.querySelector("#milliseconds");
const seconds = document.querySelector("#seconds");
const minutes = document.querySelector("#minutes");
const hours = document.querySelector("#hours");
const input = document.getElementById("neon");
const button = document.querySelectorAll(".button");

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

//Alterando as cores do meus elementos ao se escolher uma das paletas disponíveis

function palletNeon() {
    const corFundo = document.querySelector(".main__clock");
    const format = document.querySelector(".clock__format");
    const time = document.querySelectorAll(".time");
    const separator = document.querySelectorAll(".separator");
    const header = document.querySelector(".header");
    corFundo.style.backgroundColor = "#1E1E1E";
    format.style.borderColor = "#0085ff";
    time.forEach((element) => {
        element.style.color = "#69b4ff";
    });
    button.forEach((element) => {
        element.style.backgroundColor = "#006fff";
        element.style.color = "#FFFFFF";
    });
    separator.forEach((element) => {
        element.style.color = "#69b4ff";
    });

    header.style.backgroundColor = "#2d2d2d";
}

function palletSaphire() {
    const corFundo = document.querySelector(".main__clock");
    const format = document.querySelector(".clock__format");
    const time = document.querySelectorAll(".time");
    const separator = document.querySelectorAll(".separator");
    const header = document.querySelector(".header");

    corFundo.style.backgroundColor = "#0f1c2e";
    format.style.borderColor = "#2c3a4f";
    time.forEach((element) => {
        element.style.color = "#cee8ff";
    });
    button.forEach((element) => {
        element.style.backgroundColor = "#1f3a5f";
        element.style.color = "#cee8ff";
    });
    separator.forEach((element) => {
        element.style.color = "#cee8ff";
    });

    header.style.backgroundColor = "#1f2b3e";
}
