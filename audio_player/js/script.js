//--------------------start--------------------
let music = document.getElementById("music");
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let muteBtn = document.getElementById("mutebtn");
let startBtn = document.getElementById("startbtn");
let stopBtn = document.getElementById("stopbtn");
let timelineBar = document.getElementById("timelineBar");
// let pauseBtn = document.getElementById('pausebtn')
// let timeline = document.getElementById('timeline')

let posX = 0;
let posY = canvas.offsetHeight - 30 || 50;
let currentCursorPosition = 0;
let skeletonColor = "#ccc";
let waveformColor = "red";

startBtn.addEventListener("click", startAnimation);
stopBtn.addEventListener("click", stopAnimation);
muteBtn.addEventListener("click", muteAudio);
// pauseBtn.addEventListener('click', pauseAnimation)

//--------------------Animation Start/pause--------------------
function startAnimation() {
  if (startBtn.value === "stop") {
    startBtn.value = "start";
    startBtn.innerText = "pause";

    music.play();
    music.ontimeupdate = function () {
      if (music.currentTime === 0) {
        drawSkeleton();
        currentCursorPosition = 0;
      } else {
        drawWaveform();
        currentCursorPosition = Math.floor(
          (music.currentTime / music.duration) * 100
        );
      }
    };
  } else {
    startBtn.value = "stop";
    startBtn.innerText = "start";
    music.pause();
  }
}

//--------------------Pause Animation--------------------
// function pauseAnimation() {
//     music.pause()
// }

//--------------------Stop Animation--------------------
function stopAnimation() {
  music.currentTime = 0;
  music.pause();
  startBtn.value = "stop";
  startBtn.innerText = "start";
}

function muteAudio() {
  if (muteBtn.value === "unmute") {
    music.muted = true;
    muteBtn.value = "mute";
    muteBtn.innerText = "unmute";
  } else {
    music.muted = false;
    muteBtn.value = "unmute";
    muteBtn.innerText = "mute";
  }
}

music.ontimeupdate = function () {
  console.log("music complete % -", 100 * (music.currentTime / music.duration));
  timeline.style.width = `${(music.currentTime / music.duration) * 100}%`;
};

timelineBar.onclick = function (e) {
  music.currentTime = (e.offsetX / timelineBar.offsetWidth) * music.duration;
  skipWaveform();
};

// --------------------RandomNumber minimum to maximum--------------------
function getRandomIntiger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// --------------------New Waveform generator--------------------
function genarateNewWaveform() {
  // alert('Music will be stopped! Do you want to continue?')
  let wave = [];
  let pos = 0;
  for (let i = 0; i < 500; i++) {
    wave.push({ pos, height: getRandomIntiger(5, 60) });
    pos += 3;
  }
  localStorage.setItem("waves", JSON.stringify(wave));
  location.reload();
}

// --------------------Extracting value from localStorage--------------------
let wave = JSON.parse(localStorage.getItem("waves"));
// console.log(wave)

function drawSkeleton() {
  for (let i = 0; i < 500; i++) {
    ctx.fillStyle = skeletonColor;
    posY = canvas.offsetHeight - 30 - wave[i].height;
    ctx.fillRect(wave[i].pos, posY, 1, wave[i].height);
    ctx.fillRect(wave[i].pos, canvas.offsetHeight - 30, 1, wave[i].height);
  }
}

function drawWaveform() {
  ctx.fillStyle = waveformColor;
  posY = canvas.offsetHeight - 30 - wave[currentCursorPosition].height;
  ctx.fillRect(
    wave[currentCursorPosition].pos,
    posY,
    1,
    wave[currentCursorPosition].height
  );
  ctx.fillRect(
    wave[currentCursorPosition].pos,
    canvas.offsetHeight - 30,
    1,
    wave[currentCursorPosition].height
  );
}

function skipWaveform() {
  drawSkeleton();
  currentCursorPosition = Math.floor(
    (music.currentTime / music.duration) * 100
  );
  for (let i = 0; i <= currentCursorPosition; i++) {
    ctx.fillStyle = waveformColor;
    posY = canvas.offsetHeight - 30 - wave[i].height;

    ctx.fillRect(wave[i].pos, posY, 1, wave[i].height);
    ctx.fillRect(wave[i].pos, canvas.offsetHeight - 30, 1, wave[i].height);
  }
}

window.onload = function () {
  // genarateNewWaveform()
  wave = JSON.parse(localStorage.getItem("waves"));
  drawSkeleton();
};
