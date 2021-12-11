// Adding event listener to "Start" button
const startButton = document.getElementById("start-button");

// Boolean to act as a flag for timer on/off
let timerRunning = false;

// Running the timer function on a setInterval
const timer = () => setInterval("newtimerFunction()", 1000);


const runTimer = () => {
    startButton.innerHTML = "Stop";
    timerRunning = true;
    console.log("Ran runTimer");
    // timer();
};

const stopTimer = () => {
    startButton.innerHTML = "Start";
    timerRunning = false;
    // clearInterval(timer);
};

const timerStartStop = () => {
    timer();
    if (timerRunning) {
        startButton.innerHTML = "Start";
        timerRunning = false;
        clearInterval(timer);
    } else {
        startButton.innerHTML = "Stop";
        timerRunning = true;
    };
};


// ClickHandler function once "Start" button is clicked
const clickHandler = () => {
    console.log("You clicked start!");
    // timerRunning ? stopTimer() : runTimer();
    // timerStartStop();
    // setInterval("timerFunction()", 1000);
    // if (timerRunning === true) {setInterval("timerFunction()", 1000)};
    newtimerFunction();
};


startButton.addEventListener("click", clickHandler);

let minutesValue = document.querySelector("#minutes").value;
let secondsValue = document.querySelector("#seconds").value;
let minutes = parseInt(document.querySelector("#minutes").value);
let seconds = parseInt(document.querySelector("#seconds").value);

const newtimerFunction = () => {
    if (timerRunning === false) {
        timer();
        startButton.innerHTML = "Stop";
        timerRunning = true;
        if (seconds === 0) {
            seconds = 59;
            minutes--;
        } else {seconds--};
        document.querySelector("#minutes").value = minutes;
        document.querySelector("#seconds").value = seconds;
    } else {
        startButton.innerHTML = "Start";
        timerRunning = false;
        clearInterval(timer);
    }
};

const timerFunction = () => {
    while (timerRunning) {
    if (seconds === 0) {
        seconds = 59;
        minutes--;
    } else {seconds--};
    document.querySelector("#minutes").value = minutes;
    document.querySelector("#seconds").value = seconds;
    };
};


