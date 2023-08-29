import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const { delay, step, amount } = form.elements;
form.addEventListener('submit', submitHandler);

function submitHandler(evt) {
  evt.preventDefault();
  let cumulativeDelay = +delay.value;

  for (let i = 1; i <= +amount.value; i++) {
    createPromise(i, cumulativeDelay)
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
      })
    cumulativeDelay += +step.value;
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
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
    }, delay)
  });
}

Notify.init({
  position: 'right-top',
  width: '360px',
  fontSize: '16px',
  useIcon: false,
})