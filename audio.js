const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const playPath = document.getElementById('play-path');
const pausePath = document.getElementById('pause-path');
let isPlaying = false;

const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container');



function playAndPause() {
    if (isPlaying == false) {
        audio.play();
        isPlaying =true;
        playPath.style.display = 'none';
        pausePath.style.display = 'block';
    } else {
        audio.pause();
        isPlaying = false;
        playPath.style.display = 'block';
        pausePath.style.display = 'none';
    }
}



audio.addEventListener('timeupdate', (e) => {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
});

progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
});

