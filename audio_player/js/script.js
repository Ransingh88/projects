// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// let posY = 0;
// let posX = 0;

// ctx.fillStyle = "red";

// async function a() {
//     var i;
//     let arr = []

//     for (i = 0; i < 800 / 5; i++) {
        
//     // await b(700)

//     height = Math.floor(Math.random() * 100);
//       ctx.fillRect(posX, posY, 3, height);
//       arr.push({posX, posY, width:3, height})
//       posX += 5;

//     if (i == 5) {
//       ctx.fillStyle = "#CCC";
//         }
        
//     }
//     console.log(arr)
// }

// a();

// let canvas
// let ctx

// window.onload = function canvass(){
//  canvas = document.getElementById('myCanvas')
//  ctx = canvas.getContext('2d')
// }




// // ctx.fillStyle = "red";





// let aa = 50
// function draw() {
//     // requestAnimationFrame(draw)
//     let i
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     for (i = 0; i < 100; i++) {
//         height = getRandomInt(2,20);
        
//         posY= 50 - height
//         ctx.fillRect(posX, posY, 1, height);
//         ctx.fillRect(posX, 50, 1, height);

//         if (i >= aa) {
//             ctx.fillStyle = "#cccccc";
           
//         }
//          aa++
//         posX += 2
        
        
//     }
//     posX = 0
// }
// draw()


//--------------------start--------------------
let music = document.getElementById('music')
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')


let muteBtn = document.getElementById('mutebtn')
let startBtn = document.getElementById('startbtn')
// let pauseBtn = document.getElementById('pausebtn')
let stopBtn = document.getElementById('stopbtn')
let timelineBar = document.getElementById('timelineBar')
// let timeline = document.getElementById('timeline')



let posX = 0;
let posY = canvas.offsetHeight - 30 || 50;
let currentCursorPosition = 0
let skeletonColor = '#ccc';
let waveformColor = 'red';




startBtn.addEventListener('click', startAnimation)
// pauseBtn.addEventListener('click', pauseAnimation)
stopBtn.addEventListener('click', stopAnimation)
muteBtn.addEventListener('click', muteAudio)




//--------------------Animation Start/pause--------------------
function startAnimation() {

    if (startBtn.value === 'stop') {
        startBtn.value = 'start'
        startBtn.innerText = 'pause'
    
        music.play()
        music.ontimeupdate = function () {

            if (music.currentTime === 0) {
                drawSkeleton()
                currentCursorPosition = 0
            }
            else {
                drawWaveform()
                currentCursorPosition = Math.floor((music.currentTime / music.duration) * 100)
            }

        }
    }
    else {
        startBtn.value = 'stop'
        startBtn.innerText = 'start'
        music.pause()
    }
}

//--------------------Pause Animation--------------------
// function pauseAnimation() {
//     music.pause()
// }

//--------------------Stop Animation--------------------
function stopAnimation() {
    music.currentTime = 0;
    music.pause()
    
}

function muteAudio() {
    if (muteBtn.value === 'unmute') {
        music.muted = true;
        muteBtn.value = 'mute'
        muteBtn.innerText = "unmute"
    } else {
        music.muted = false;
        muteBtn.value = 'unmute'
        muteBtn.innerText = "mute"
    }
}

music.ontimeupdate = function () {
    console.log('music complete % -',100*(music.currentTime/music.duration))
    timeline.style.width = `${((music.currentTime/music.duration)*100)}%`
}

timelineBar.onclick = function (e) {
    music.currentTime = ((e.offsetX/timelineBar.offsetWidth)*music.duration);
    skipWaveform()
}


// --------------------RandomNumber minimum to maximum--------------------
function getRandomIntiger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


// --------------------New Waveform generator--------------------
function genarateNewWaveform() {
// alert('Music will be stopped! Do you want to continue?')
let wave = []
let pos = 0
for (let i = 0; i < 500; i++) {
    wave.push({ pos, height: getRandomIntiger(5, 60) })
    pos+=3
    }
    localStorage.setItem("waves", JSON.stringify(wave))
    location.reload()
}

// --------------------Extracting value from localStorage--------------------
let wave = JSON.parse(localStorage.getItem("waves"))
// console.log(wave)



// function wait(ms) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {resolve('')},ms)
//     })
// }

// let arr = []
// let pos = 0
// for (let i = 0; i < 500; i++) {
//     arr.push({ pos, height: getRandomInt(10, 50) })
//     pos+=3
// }

// localStorage.setItem("arr", JSON.stringify(arr))




// for (let i = 0; i < 500; i++){
//     ctx.fillStyle = "#ccc";
   
// posY= canvas.offsetHeight-30 - wave[i].height
//     ctx.fillRect(wave[i].pos, posY, 1, wave[i].height)


     
//         // ctx.fillRect(posX, posY, 1, height);
//         ctx.fillRect(wave[i].pos, canvas.offsetHeight-30, 1, wave[i].height);
   

    
    
// }




function drawSkeleton() {
    for (let i = 0; i < 500; i++){
   ctx.fillStyle = skeletonColor;
posY= canvas.offsetHeight-30 - wave[i].height
    ctx.fillRect(wave[i].pos, posY, 1, wave[i].height)
        ctx.fillRect(wave[i].pos, canvas.offsetHeight-30, 1, wave[i].height);

}
}






 function  drawWaveform() {
    ctx.fillStyle = waveformColor;
    posY= canvas.offsetHeight-30 - wave[currentCursorPosition].height
    ctx.fillRect(wave[currentCursorPosition].pos, posY, 1, wave[currentCursorPosition].height)
    ctx.fillRect(wave[currentCursorPosition].pos, canvas.offsetHeight-30, 1, wave[currentCursorPosition].height);

}

function skipWaveform() {
    drawSkeleton()
    currentCursorPosition = Math.floor((music.currentTime/music.duration)*100)
    for (let i = 0; i <= currentCursorPosition; i++){
        ctx.fillStyle = waveformColor
        posY= canvas.offsetHeight-30 - wave[i].height

    ctx.fillRect(wave[i].pos, posY, 1, wave[i].height)
    ctx.fillRect(wave[i].pos, canvas.offsetHeight-30, 1, wave[i].height);

    }
}


window.onload = function () {
    // genarateNewWaveform()
     wave = JSON.parse(localStorage.getItem("waves"))
    drawSkeleton()
}
