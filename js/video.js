const video = document.getElementById('productVideo');
const playPauseBtn = document.querySelector('.play-pause-btn');
const playIcon = document.querySelector('.play-icon');
const pauseIcon = document.querySelector('.pause-icon');
const progressBar = document.querySelector('.progress');
const currentTimeEl = document.querySelector('.current-time');
const totalTimeEl = document.querySelector('.total-time');

// Play/Pause functionality
playPauseBtn.addEventListener('click', togglePlay);

function togglePlay() {
    if (video.paused) {
        video.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        video.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
}

// Update progress bar
video.addEventListener('timeupdate', () => {
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percentage}%`;
    currentTimeEl.textContent = formatTime(video.currentTime);
});

// Set video time on progress bar click
document.querySelector('.progress-bar').addEventListener('click', (e) => {
    const progressTime = (e.offsetX / e.target.offsetWidth) * video.duration;
    video.currentTime = progressTime;
});

// Format time to MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Set total duration when metadata is loaded
video.addEventListener('loadedmetadata', () => {
    totalTimeEl.textContent = formatTime(video.duration);
});
