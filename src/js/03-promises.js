import { Notify } from 'notiflix/build/notiflix-notify-aio';

const elements = {
  form: document.querySelector('.form'),
};

const { delay, step, amount } = elements.form.elements;

let promiseCounter = 1;
let cumulativeDelay = 0; // variable to store cumulative response time (initial delay + step * number of steps)

elements.form.addEventListener('submit', submitHandler);

function submitHandler(evt) {
  evt.preventDefault();
  cumulativeDelay = +delay.value;
  // setting initial delay for the first promice
  const timerId = setTimeout(() => {
    //
    const intervalId = setInterval(() => {
      if (promiseCounter === +amount.value + 1) {
        clearInterval(intervalId);
        return;
      }
      const promise = createPromise(promiseCounter, cumulativeDelay);
      promiseCounter++;
      cumulativeDelay += +step.value;

      promise
        .then(data => {
          Notify.success(
            `✅ Fulfilled promise ${data.position} in ${data.delay}ms`
          );
          return data;
        })
        .catch(err => {
          Notify.failure(
            `❌ Rejected promise ${err.position} in ${err.delay}ms`
          );
        });
    }, +step.value);
    // resetting counter of promises in case user wants to start again without refreshing the page
    promiseCounter = 1;
  }, +delay.value);
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      // Fulfill
      res({ position, delay });
      // console.log(shouldResolve);
    } else {
      // Reject
      rej({ position, delay });
      // console.log(shouldResolve);
    }
  });
}

Notify.init({
  position: 'right-top',
  width: '360px',
  fontSize: '16px',
  useIcon: false,
});
