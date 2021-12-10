// Adding event listener to "Start" button
const startButton = document.getElementById("start-button");
let timerRunning = false;

const runTimer = () => {
    startButton.innerHTML = "Stop";
    timerRunning = true;
};

const stopTimer = () => {
    startButton.innerHTML = "Start";
    timerRunning = false;
};


// ClickHandler function once "Start" button is clicked
const clickHandler = () => {
    console.log("You clicked start!");
    timerRunning ? stopTimer() : runTimer();
};


startButton.addEventListener("click", clickHandler);

