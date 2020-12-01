const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyEl = document.querySelector('body');
const buttonStartEl = document.querySelector('button[data-action=start]');
const buttonStopEl = document.querySelector('button[data-action=stop]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

buttonStartEl.addEventListener('click', chengColorBody);
buttonStopEl.addEventListener('click', () => {
  clearInterval(timerId);
  timerId = null;
});

function chengColorBody() {
  if (!timerId) {
    timerId = setInterval(() => {
      bodyEl.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
  }
}
