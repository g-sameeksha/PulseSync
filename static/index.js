function toggleMenu() {
    const navLinks = document.querySelector('.nav-list');
    navLinks.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', () => {
    const circle = document.querySelector('.circle');
    const breathingText = document.getElementById('breathing-text');
    const startButton = document.getElementById('start-button');
    const stopButton = document.getElementById('stop-button');
    const navButton = document.getElementById("navbutton");
    const audio  =  document.getElementById("bgMusic");


    let animationInterval = null;
    let inhaleTimeout = null;
    let holdTimeout = null;
    let exhaleTimeout = null;

    const breatheInTime = 4000; // 4 seconds
    const holdTime = 7000; // 7 seconds
    const breatheOutTime = 8000; // 8 seconds

    function breathingAnimation() {
        // Inhale
        breathingText.textContent = "Breathe In";
        circle.classList.add("inhale");

        clearTimeout(inhaleTimeout);

        inhaleTimeout = setTimeout(() => {
            // Hold
            breathingText.textContent = "Hold";
            circle.classList.remove("inhale");
            circle.classList.add("hold");

            clearTimeout(holdTimeout);

            holdTimeout = setTimeout(() => {
                // Exhale
                breathingText.textContent = "Breathe Out";
                circle.classList.remove("hold");
                circle.classList.add("exhale");

                clearTimeout(exhaleTimeout);

                exhaleTimeout = setTimeout(() => {
                    circle.classList.remove("exhale");
                    // Enable stop button after the full cycle completes
                    stopButton.disabled = false;
                }, breatheOutTime);
            }, holdTime);
        }, breatheInTime);
    }

    function startBreathing() {
        if (!animationInterval) {
            breathingAnimation();
            animationInterval = setInterval(
                breathingAnimation,
                breatheInTime + holdTime + breatheOutTime
            );

            audio.currentTime = 0; // Restart audio from the beginning
            audio.play();
          
            startButton.disabled = true;
            stopButton.disabled = true; 
            document.body.style.transition = 'background-color 1s ease';
            document.body.style.background = 'radial-gradient(circle, rgba(29, 185, 84, 1) 0%, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0.8) 100%)'; 
        }
    }

    function stopBreathing() {
        // Clear all active intervals and timeouts
        if (animationInterval) {
            clearInterval(animationInterval); 
            animationInterval = null;
        }
        // Clear timeouts for Inhale, Hold, and Exhale
        clearTimeout(inhaleTimeout);
        clearTimeout(holdTimeout);
        clearTimeout(exhaleTimeout);

        audio.pause();
        audio.currentTime = 0;

        // Reset circle animation immediately
        circle.classList.remove("inhale", "hold", "exhale");

        // Reset breathing text and disable buttons
        breathingText.textContent = "Press Start";
        startButton.disabled = false;
        stopButton.disabled = true;

        // Reset background and transition
        document.body.style.transition = 'background-color 1s ease'; 
        document.body.style.background = '#1db954';
    }
    function increaseIndex(){
        // document.getElementById("nav-list").classList.toggle("indexing");
        document.getElementsByClassName("breathing-container")[0].classList.toggle("decreaseindex");
    }

    startButton.addEventListener('click', startBreathing);
    stopButton.addEventListener('click', stopBreathing);


    navButton.addEventListener("click",increaseIndex)
});
