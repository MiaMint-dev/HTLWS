const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

if (Days && Hours && Minutes && Seconds) {
const targetDate = new Date("June 1 2026 16:00:00").getTime();

function timer () {
  const currentDate = new Date().getTime();
  const distance = targetDate - currentDate;

  const days = Math.floor(distance / 1000 / 60 / 60/ 24);
  const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(distance / 1000 / 60) % 60;
  const seconds = Math.floor(distance / 1000) % 60;

  Days.innerHTML = days;
  Hours.innerHTML = hours;
  Minutes.innerHTML = minutes;
  Seconds.innerHTML = seconds;

  if(distance < 0){
    Days.innerHTML = "00";
    Hours.innerHTML = "00";
    Minutes.innerHTML = "00";
    Seconds.innerHTML = "00";
    return;
    }
}

setInterval(timer, 1000);
}


const button =document.getElementById('red');
if (button) {
const clickSound = new Audio('vine_boom.mp3');
clickSound.volume = 0.5;

button.addEventListener('click', () => {

  clickSound.currentTime = 0;

  clickSound.play();
});
}


const mug1 = document.getElementById('rain-mug');
const card1 = document.getElementById('rain-card');
const close1 = document.getElementById('close1');

const mug2 = document.getElementById('egon-mug');
const card2 = document.getElementById('egon-card');
const close2 = document.getElementById('close2');

const mug3 = document.getElementById('hael-mug');
const card3 = document.getElementById('hael-card');
const close3 = document.getElementById('close3');

const mug4 = document.getElementById('vaughn-mug');
const card4 = document.getElementById('vaughn-card');
const close4 = document.getElementById('close4');



if (mug1 && card1) {
mug1.addEventListener("click", () => {
  card1.classList.remove("hidden");

});
}
if (close1 && card1) {
close1.addEventListener("click", () => {
  card1.classList.add("hidden");
});
}

if (mug2 && card2) {
  mug2.addEventListener("click", () => {
    card2.classList.remove("hidden");
  });
}
if (close2 && card2) {
  close2.addEventListener("click", () => {
    card2.classList.add("hidden");
  });
}
if (mug3 && card3) {
  mug3.addEventListener("click", () => {
    card3.classList.remove("hidden");
  });
}
if (close3 && card3) {
  close3.addEventListener("click", () => {
    card3.classList.add("hidden");
  });
}
if (mug4 && card4) {
  mug4.addEventListener("click", () => {
    card4.classList.remove("hidden");
  });
}
if (close4 && card4) {
  close4.addEventListener("click", () => {
    card4.classList.add("hidden");
  });
}

const foldergreen = document.getElementById('folder-1');
const foldercard1 = document.getElementById('foldercard-1');
const folderclose1 = document.getElementById('folderclose1');

if (foldergreen && foldercard1) {
  foldergreen.addEventListener("click", () => {
    foldercard1.classList.remove("hidden");
  });
}

if(folderclose1 && foldercard1) {
  folderclose1.addEventListener("click", () => {
    foldercard1.classList.add("hidden");
  });
}

