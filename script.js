const video = document.getElementById('video')
const playBtn = document.getElementById('play')
const stopBtn = document.getElementById('stop')
const progressBar = document.getElementById('progress')
const timeStamp = document.getElementById('timestamp')


function playPause() {
    if (video.paused) {
        video.play() // This is a play() method
    } else {
        video.pause();
    }
}

function updateIcon() {
    if(video.paused) {
        playBtn.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {

        playBtn.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}
function stopVideo(){
    video.currentTime= 0;
    video.pause();
}

function updateProgress(){
    progressBar.value = (video.currentTime / video.duration) *100;

    // Get minutes
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
        minutes = '0' + String(minutes);

    }
    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' +String(seconds);
    }
    
    timeStamp.innerHTML =`${minutes}:${seconds}`
}

function setProgress(){
    video.currentTime = (+progressBar.value * video.duration) / 100;
}
video.addEventListener('click',playPause)
video.addEventListener('pause',updateIcon)
video.addEventListener('play',updateIcon)
video.addEventListener('timeupdate',updateProgress)

playBtn.addEventListener('click',playPause)
stopBtn.addEventListener('click',stopVideo)
progressBar.addEventListener('click', setProgress)