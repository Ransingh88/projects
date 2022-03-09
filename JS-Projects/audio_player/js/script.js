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
let start_stop_Img = document.getElementById("start_stop_Img")
let mute_Img = document.getElementById("mute_Img")
let tooltip = document.getElementById("tooltips")
let totalDuration = document.getElementById("totalDuration")
let currentTimeline = document.getElementById("currentTimeline")
let audioSrc = document.getElementById("audioSrc")

let posX = 0;
let posY = canvas.offsetHeight - 30 || 50;
let width = 1;
let minHeight = 5;
let maxHeight = 60;
let currentCursorPosition = 0;
let skeletonColor = "#ccc";
let waveformColor = "red";
let songsNum = 0
let songs = ['aaa.mp3','bbb.mp3','Aila Re Aillaa Sooryavanshi 320 Kbps.mp3','Tip Tip Barsa Pani - Sooryavanshi_320(PagalWorld.com.se).mp3','Spectrum - Home (feat. Ria Choony)(INSTRUMENTAL)_1.mp3']


function shuffelSong() {
    songsNum++
    if(songsNum >= songs.length){songsNum = 0}
    audioSrc.src = `./media/${songs[songsNum]}`
    music.load()

    start_stop_Img.src = "https://img.icons8.com/fluency/48/000000/pause.png"
    

    music.play();
      music.ontimeupdate = function () {
          if (music.currentTime == music.duration) {
              console.log("Finished")
              startBtn.value = "stop";
    start_stop_Img.src = "https://img.icons8.com/fluency/45/000000/play.png"
          }
        console.log("music duratuin-",music.duration,"current time - ",music.currentTime);
        currentTimeline.innerText = fmtMSS(music.currentTime)
          totalDuration.innerText = fmtMSS(music.duration)
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
//   }
}


    


startBtn.addEventListener("click", startAnimation);
stopBtn.addEventListener("click", stopAnimation);
muteBtn.addEventListener("click", muteAudio);
// pauseBtn.addEventListener('click', pauseAnimation)
tooltip.addEventListener('click', hideTags)

//--------------------Animation Start/pause--------------------
function startAnimation() {
  if (startBtn.value === "stop") {
    startBtn.value = "start";
    // startBtn.innerHTML = `pause`;
    start_stop_Img.src = "https://img.icons8.com/fluency/48/000000/pause.png"
    

    music.play();
      music.ontimeupdate = function () {
          if (music.currentTime == music.duration) {
              console.log("Finished")
              startBtn.value = "stop";
    start_stop_Img.src = "https://img.icons8.com/fluency/45/000000/play.png"
          }
        console.log("music duratuin-",music.duration,"current time - ",music.currentTime);
        currentTimeline.innerText = fmtMSS(music.currentTime)
          totalDuration.innerText = fmtMSS(music.duration)
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
    // startBtn.innerText = "start";
      start_stop_Img.src = "https://img.icons8.com/fluency/45/000000/play.png"
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
//   startBtn.innerText = "start";
    start_stop_Img.src = "https://img.icons8.com/fluency/45/000000/play.png"
}

function muteAudio() {
  if (muteBtn.value === "unmute") {
    music.muted = true;
      muteBtn.value = "mute";
      mute_Img.src = 'https://img.icons8.com/fluency/30/000000/mute.png'
     
    // muteBtn.innerText = "unmute";
  } else {
    music.muted = false;
      muteBtn.value = "unmute";
       mute_Img.src = 'https://img.icons8.com/fluency/30/000000/high-volume.png'
    // muteBtn.innerText = "mute";
     
  }
}

function hideTags() {
    tooltip.classList.add("removeTooltips")
}

// --------------------AudioPlayList--------------------
// function AudioPlayList() {
    
// }

function fmtMSS(s){return((s-(s%=60))/60+(9<s?':':':0')+s.toFixed(0))}

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
function genarateNewWaveformOnce() {
  // alert('Music will be stopped! Do you want to continue?')
  let wave = [];
  let pos = 0;
  for (let i = 0; i < 500; i++) {
    wave.push({ pos, height: getRandomIntiger(5, 60) });
    pos += 3;
  }
  localStorage.setItem("waves", JSON.stringify(wave));
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
  genarateNewWaveformOnce()
  wave = JSON.parse(localStorage.getItem("waves"));
  drawSkeleton();
};
