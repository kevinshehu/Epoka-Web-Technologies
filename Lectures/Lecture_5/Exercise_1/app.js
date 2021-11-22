const startButton = document.querySelector('#startButton');
const timerText = document.querySelector('#timerText');

// MAX TIME
let timeLeft = 10;

// DEFAULT IT WILL BE 100
timerText.textContent = timeLeft;

// EVENT FOR START BUTTON
startButton.addEventListener('click', function() {
    // MAKE THE BUTTON INVISIBLE
    startButton.style.visibility = 'hidden';

    // INTERVAL
    const interval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timerText.textContent = timeLeft;
        } else {
            clearInterval(interval);
        }
        console.log('a');
    }, 100);
});