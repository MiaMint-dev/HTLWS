const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');
const ledBoard = document.getElementById('board-text');

if (Days && Hours && Minutes && Seconds && ledBoard) {
const targetDate = new Date("July 6 2026 16:00:00").getTime();

function timer () {
  const currentDate = new Date().getTime();
  const distance = targetDate - currentDate;

  const days = Math.floor(distance / 1000 / 60 / 60/ 24);
  const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(distance / 1000 / 60) % 60;
  const seconds = Math.floor(distance / 1000) % 60;

  Days.textContent = days;
  Hours.textContent = hours;
  Minutes.textContent = minutes;
  Seconds.textContent = seconds;

  if(distance < 0){
    Days.textContent = "00";
    Hours.textContent = "00";
    Minutes.textContent = "00";
    Seconds.textContent = "00";
    
    ledBoard.textContent = "The new chapter will be out shortly! * The new chapter will be out shortly!";
    }  else if (days === 0) {
    ledBoard.textContent = "A chapter will be out in less than 24 hours! * A chapter will be out in less than 24 hours!";
    } else if ( days > 2) {
      ledBoard.textContent = "A new chapter has been uploaded! * A new chapter has been uploaded!";
  }else {
    ledBoard.textContent = "Read the latest chapter as you wait for the next! * Read the latest chapter as you wait for the next!";
}

}

timer();
const countdown = setInterval(timer, 1000);
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
console.log('Hi, fellow coding person');

const btnR = document.getElementById('r-button');
const btnE = document.getElementById('e-button');
const btnH = document.getElementById('h-button');
const btnV = document.getElementById('v-button');
const mp3Text = document.getElementById('mp3-screen-text');
const mp3Volume = document.getElementById('mp3-volume');

mp3Volume.addEventListener('input', () => {
  const currentVolume = Number(mp3Volume.value);

  trackR.volume = currentVolume;
  trackE.volume = currentVolume;
  trackH.volume = currentVolume;
  trackV.volume = currentVolume;

});

const trackR = new Audio('track.mp3');
const trackE = new Audio('track.mp3');
const trackH = new Audio('track.mp3');
const trackV = new Audio('track.mp3');

trackR.loop= true;
trackE.loop= true;
trackH.loop = true;
trackV.loop = true;
 
function stopAllTracks() {
  trackR.pause();
  trackE.pause();
  trackH.pause();
  trackV.pause();
}

if(btnR) {
  btnR.addEventListener('click', () => {
    if(trackR.paused) {
      stopAllTracks();
      trackR.play();
      mp3Text.textContent = "Rain's Track";
  }else{
    trackR.pause();
    mp3Text.textContent = "HTLWS";
  }})};

if(btnE) {
  btnE.addEventListener('click', () => {
    if(trackE.paused) {
      stopAllTracks();
      trackE.play();
      mp3Text.textContent = "Egon's Track";
    }else {
      trackE.pause();
      mp3Text.textContent = "HTLWS";
    }})};

if(btnH) {
  btnH.addEventListener('click', () => {
    if(trackH.paused) {
      stopAllTracks();
      trackH.play();
      mp3Text.textContent = "Hael's Track";
    }else {
      trackH.pause();
      mp3Text.textContent= "HTLWS";
    }})};

if(btnV) {
  btnV.addEventListener('click', () => {
    if(trackV.paused) {
      stopAllTracks();
      trackV.play();
      mp3Text.textContent = "Hael's Track";
    }else {
      trackV.pause();
      mp3Text.textContent= "HTLWS";
    }})};
