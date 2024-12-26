const playIcon = document.getElementById('playIcon');
const audio = document.getElementById('myAudio');

playIcon.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

const playIcon2 = document.getElementById('playIcon2');
const audio2 = document.getElementById('myAudio2');

playIcon2.addEventListener('click', () => {
  if (audio2.paused) {
    audio2.play();
  } else {
    audio2.pause();
  }
});

const playIcon3 = document.getElementById('playIcon3');
const audio3 = document.getElementById('myAudio3');

playIcon3.addEventListener('click', () => {
  if (audio3.paused) {
    audio3.play();
  } else {
    audio3.pause();
  }
});

const playIcon4 = document.getElementById('playIcon4');
const audio4 = document.getElementById('myAudio4');

playIcon4.addEventListener('click', () => {
  if (audio4.paused) {
    audio4.play();
  } else {
    audio4.pause();
  }
});