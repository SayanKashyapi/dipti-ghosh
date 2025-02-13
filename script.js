// Function to create floating hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // Random horizontal starting position
  heart.style.left = Math.random() * 100 + 'vw';
  
  // Randomize animation duration between 5 and 8 seconds
  heart.style.animationDuration = 5 + Math.random() * 3 + 's';
  
  document.body.appendChild(heart);
  
  // Remove heart after animation completes
  setTimeout(() => {
    heart.remove();
  }, parseFloat(heart.style.animationDuration) * 1000);
}

// Generate hearts at regular intervals
setInterval(createHeart, 400);

// Start background music on first user interaction
const bgMusic = document.getElementById('bgMusic');
document.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play().catch(error => {
      console.log("Music playback was prevented:", error);
    });
  }
});

// Handle proposal button click
document.getElementById('yesButton').addEventListener('click', function () {
  alert("My heart overflows with love for you. I'm ready to cherish every sunrise and every star with you by my side. Will you marry me?");
});
