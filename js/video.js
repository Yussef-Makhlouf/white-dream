document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('productVideo');
    const centerPlayBtn = document.querySelector('.center-play-btn');
    const playPauseBtn = document.querySelector('.play-pause-btn');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');

    function togglePlay() {
        if (video.paused) {
            video.play();
            centerPlayBtn.style.display = 'none';
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            video.pause();
            centerPlayBtn.style.display = 'block';
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    }

    video.addEventListener('click', togglePlay);
    centerPlayBtn.addEventListener('click', togglePlay);
    playPauseBtn.addEventListener('click', togglePlay);
});