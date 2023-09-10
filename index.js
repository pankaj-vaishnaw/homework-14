const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

function updateClock() {
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let ampm = "AM";

  if (hour > 12) {
    hour = hour - 12;
    ampm = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  hourElement.innerText = hour;
  minuteElement.innerText = minutes;
  secondElement.innerText = seconds;
  ampmElement.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();