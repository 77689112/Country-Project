
document.addEventListener('DOMContentLoaded', function() {
    AOS.init(); // Initialize AOS for scroll animations
});


const video = document.getElementById("myVideo");
video.addEventListener("play", () => {
  video.currentTime = 12; // Start at 12 seconds
});
