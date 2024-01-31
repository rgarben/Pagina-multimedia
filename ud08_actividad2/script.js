document.addEventListener('DOMContentLoaded', function () {
    const gifElement = document.querySelector('.gif');
    const audioElement = document.querySelector('.audio');

    gifElement.addEventListener('mouseover', function () {
        audioElement.play();
    });
    
    gifElement.addEventListener('mouseout', function () {
        audioElement.pause();
        audioElement.currentTime = 0;
    });
});
