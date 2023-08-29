

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const elements = {
    btnStart: document.querySelector("[data-start]"),
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
}

elements.btnStart.addEventListener('click', coundownHandler)

elements.btnStart.setAttribute('disabled', '');

// varible with flatpickr options
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    dateFormat: "J M, Y @ H:m",
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() < new Date().getTime()) {
            // window.alert("Please choose a date in the future");
            Notify.failure('Hold up, boy! Please choose a date in the future.');
            return;
        };
        elements.btnStart.removeAttribute('disabled')
    }
}

Notify.init({ position: "center-top", width: '360px', fontSize: '16px' })
const datePicker = flatpickr("#datetime-picker", options)

let intervalId = null;

function coundownHandler(evt) {
    // added stop button functionality
    if (evt.target.textContent === "Stop") {
        clearInterval(intervalId);
        evt.target.textContent = "Start";
        evt.target.style.backgroundColor = "#1e90ff"
    } else {
        evt.target.style.backgroundColor = '#e84393'
        evt.target.textContent = "Stop"
        intervalId = setInterval(() => {
            const ms = datePicker.selectedDates[0] - new Date().getTime();
            if (Math.round(ms / 1000) === 0) {
                clearInterval(intervalId);
                elements.btnStart.setAttribute('disabled', '')
                evt.target.textContent = "Start";
                evt.target.style.backgroundColor = "#1e90ff"
            }
            console.log('ms = ', Math.floor(ms / 1000));
            elements.days.textContent = addLeadingZero(convertMs(ms).days);
            elements.hours.textContent = addLeadingZero(convertMs(ms).hours);
            elements.minutes.textContent = addLeadingZero(convertMs(ms).minutes);
            elements.seconds.textContent = addLeadingZero(convertMs(ms).seconds);

        }, 1000)
    }
}


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}