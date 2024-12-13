document.addEventListener("DOMContentLoaded", () => {
  const sky = document.querySelector(".sky");
  const sun = document.querySelector(".sun");
  const button = document.querySelector(".play-pause-btn");

  let isPlaying = false;
  let startTime;
  let elapsedTime = 0;

  button.addEventListener("click", () => {
    if (isPlaying) {
      // Pause the animations
      const currentTime = new Date().getTime();
      elapsedTime += currentTime - startTime;
      sun.style.animationPlayState = "paused";
      sky.style.animationPlayState = "paused";
      button.textContent = "Play";
    } else {
      // Play the animations
      startTime = new Date().getTime();
      sun.style.animationPlayState = "running";
      sky.style.animationPlayState = "running";
      button.textContent = "Pause";
    }
    isPlaying = !isPlaying;
  });

  // Initialize animations in paused state
  sun.style.animation = `sunMovement 10s linear infinite ${
    elapsedTime / 1000
  }s paused`;
  sky.style.animation = `skyColors 10s linear infinite ${
    elapsedTime / 1000
  }s paused`;
});
