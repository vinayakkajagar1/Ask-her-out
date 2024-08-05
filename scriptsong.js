document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-audio');
    var button = document.getElementById('play-audio-button');
    
    // Check if audio was played on the first page
    var audioStarted = sessionStorage.getItem('audioStarted') === 'true';
    
    if (audioStarted) {
        audio.play().catch(error => {
            console.log("Playback error:", error);
        });
        // button.style.display = 'none'; // Hide button if audio is playing
    }
    
    button.addEventListener('click', function() {
        audio.play().then(() => {
            button.style.display = 'none'; // Hide the button after playing
            sessionStorage.setItem('audioStarted', 'true'); // Mark audio as started
        }).catch(error => {
            console.log("Playback error:", error);
        });
    });
});
