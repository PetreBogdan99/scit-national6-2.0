console.log("JavaScript - Digital Clock");
// Using the new knowledge leaned in index.js file we can implement a digital clock
// The digital clock will use existing html objects in index.html file
// Using "setInterval" we will calculate the value for seconds, minutes and hours an update the page every second to reflect the time spend on the page

let seconds = 0;
const secondsParagraphs = document.querySelectorAll(".seconds p");

let minutes = 0;
const minutesParagraphs = document.querySelectorAll(".minutes p");

let hours = 0;
const hoursParagraphs = document.querySelectorAll(".hours p");

let globalTime;

function stopWatch() {
  renderDigits(seconds, secondsParagraphs);
  renderDigits(minutes, minutesParagraphs);
  renderDigits(hours, hoursParagraphs);

  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  if (hours === 24) {
    hours = 0;
  }
}

function renderDigits(nr, pList) {
  const stringDigits = nr + "";
  const digitList = stringDigits.split("");

  if (digitList.length === 2) {
    pList[0].innerText = digitList[0];
    pList[1].innerText = digitList[1];
  } else {
    pList[0].innerText = 0;
    pList[1].innerText = digitList[0];
  }
}

function start() {
  globalTime = setInterval(stopWatch, 10);
}

function reset() {
  clearInterval(globalTime);
  seconds = 0;
  minutes = 0;
  hours = 0;
  stopWatch();
}

function save() {
  let savedTime = document.getElementById("saved-times");
  savedTime.innerHTML +=
    "<p>" +
    " " +
    hoursParagraphs[0].innerHTML +
    hoursParagraphs[1].innerHTML +
    ":" +
    minutesParagraphs[0].innerHTML +
    minutesParagraphs[1].innerHTML +
    ":" +
    secondsParagraphs[0].innerHTML +
    secondsParagraphs[1].innerHTML;
}

function stop() {
  clearInterval(globalTime);
}

let startButton = document.getElementById("start");
startButton.addEventListener("click", start);

let stopButton = document.getElementById("stop");
stopButton.addEventListener("click", stop);

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", reset);

let saveButton = document.getElementById("save");
saveButton.addEventListener("click", save);
