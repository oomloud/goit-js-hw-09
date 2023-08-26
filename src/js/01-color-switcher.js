
const btnStart = document.querySelector("[data-start]");
const btnStop = document.querySelector("[data-stop]")
btnStart.addEventListener('click', handlerStart)
btnStop.addEventListener('click', handlerStop)
btnStop.setAttribute('disabled', '')
let bgcTimer = null;

function handlerStart() {
    btnStart.setAttribute('disabled', '');
    btnStop.removeAttribute('disabled');
    bgcTimer = setInterval(() => {
        document.body.style.backgroundColor = `${getRandomHexColor()}`
    }, 1000)
}

function handlerStop() {
    clearInterval(bgcTimer);
    btnStart.removeAttribute('disabled');
    btnStop.setAttribute('disabled', '');
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}