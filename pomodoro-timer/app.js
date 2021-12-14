// Definitions of elements or values
const timerButton = document.getElementById("timer-button");
let minutesValue = parseInt(document.querySelector("#minutes").value);
let secondsValue = parseInt(document.querySelector("#seconds").value);
let minutesText = document.querySelector("#minutes");
let secondsText = document.querySelector("#seconds");
let timerBoolean = false; // Flag to determine whether button starts or stops timer functionality
let intervalId; // Use this to clearInterval when timer is paused


// Using setInterval on the runTimer function
const runTimer = () => {
    if (timerBoolean) {
        timerButton.innerText = "Start";
        stopTimer();
    } else {
        timerButton.innerText = "Stop";
        console.log("You clicked start!");
        if (!intervalId) {
            intervalId = setInterval(startTimer, 1000);
        };
    };
};

// Function to reduce time once timer is started
const startTimer = () => {
    if (secondsValue === 0) {
        secondsValue = 59;
        minutesValue--;
    } else {secondsValue--;}
    minutesText.value = minutesValue;
    // secondsValue = secondsValue < 10 ? "0" + secondsValue : secondsValue;
    secondsText.value = secondsValue < 10 ? "0" + secondsValue : secondsValue;
    timerBoolean = true;
};

// Function to clear interval once timer is stopped
const stopTimer = () => {
    clearInterval(intervalId);
    intervalId = null;
    timerBoolean = false;
};

// When you click the timer button, fire the runTimer function
timerButton.addEventListener("click", runTimer);