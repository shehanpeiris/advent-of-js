// Definitions of elements or values
const timerButton = document.getElementById("timer-button");
const settingsButton = document.getElementById("settings-button");
const settingsModal = document.getElementById("settings-modal");
const modalClose = document.querySelector(".close-btn");
const updateTimer = document.getElementById("update-timer-btn");
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
    if (minutesValue === 0 && secondsValue === 1) {
        stopTimer();
        console.log("TIME'S UP!");
    } else
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

const timerDone = () => {
    while (timerBoolean) {
        if (minutesValue === 0 && secondsValue === 1) {
        console.log("TIME'S UP!");
    }
}};

// Function for settings button
const openSettings = () => {
    settingsModal.style.display = "block";
};

const closeSettings = () => {
    settingsModal.style.display = "none";
};

const updateSettings = () => {
    minutesValue = document.getElementById("minutes-input").value;
    secondsValue = document.getElementById("seconds-input").value;
    minutesText.value = minutesValue;
    secondsText.value = secondsValue < 10 ? "0" + secondsValue : secondsValue;
    closeSettings();
};

// When you click the timer button, fire the runTimer function
timerButton.addEventListener("click", runTimer);

// When you click the settings button, fire the openSettings function
settingsButton.addEventListener("click", openSettings);

// When you click the x on the modal, close the modal
modalClose.addEventListener("click", closeSettings);

updateTimer.addEventListener("click", updateSettings);