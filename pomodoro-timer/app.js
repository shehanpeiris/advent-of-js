// Definitions of elements or values
const timerButton = document.getElementById("timer-button");
let minutesValue = parseInt(document.querySelector("#minutes").value);
let secondsValue = parseInt(document.querySelector("#seconds").value);
let minutesText = document.querySelector("#minutes");
let secondsText = document.querySelector("#seconds");
let timerBoolean = false;
let intervalId;


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

// Function to reduce time
const startTimer = () => {    
    if (secondsValue === 0) {
        secondsValue = 59;
        minutesValue--;
    } else {secondsValue--;}
    minutesText.value = minutesValue;
    secondsText.value = secondsValue;
    timerBoolean = true;
};

// Function once timer is stopped
const stopTimer = () => {
    clearInterval(intervalId);
    intervalId = null;
    timerBoolean = false;
};

// When you click the Start button, fires startTimer function
timerButton.addEventListener("click", runTimer);




















// Boolean to act as a flag for timer on/off
// let timerRunning = false;

// Running the timer function on a setInterval
// const timer = () => setInterval("newtimerFunction()", 1000);

// Code to run when timer starts
// const runTimer = () => {
//     startButton.innerHTML = "Stop";
//     timerRunning = true;
//     console.log("Ran runTimer");
//     // timer();
// };

// Code to run when timer is stopped
// const stopTimer = () => {
//     startButton.innerHTML = "Start";
//     timerRunning = false;
//     // clearInterval(timer);
// };


// const timerStartStop = () => {
//     timer();
//     if (timerRunning) {
//         startButton.innerHTML = "Start";
//         timerRunning = false;
//         clearInterval(timer);
//     } else {
//         startButton.innerHTML = "Stop";
//         timerRunning = true;
//     };
// };


// ClickHandler function once "Start" button is clicked
// const clickHandler = () => {
//     console.log("You clicked start!");
    // timerRunning ? stopTimer() : runTimer();
    // timerStartStop();
    // setInterval("timerFunction()", 1000);
    // // if (timerRunning === true) {setInterval("timerFunction()", 1000)};
    // newtimerFunction();
// };



// let minutesValue = document.querySelector("#minutes").value;
// let secondsValue = document.querySelector("#seconds").value;
// let minutes = parseInt(document.querySelector("#minutes").value);
// let seconds = parseInt(document.querySelector("#seconds").value);

// const newtimerFunction = () => {
//     if (timerRunning === false) {
//         timer();
//         startButton.innerHTML = "Stop";
//         timerRunning = true;
//         if (seconds === 0) {
//             seconds = 59;
//             minutes--;
//         } else {seconds--};
//         document.querySelector("#minutes").value = minutes;
//         document.querySelector("#seconds").value = seconds;
//     } else {
//         startButton.innerHTML = "Start";
//         timerRunning = false;
//         clearInterval(timer);
//     }
// };

// // Function to reduce time (manually created)
// const timerFunction = () => {
//     while (timerRunning) {
//     if (seconds === 0) {
//         seconds = 59;
//         minutes--;
//     } else {seconds--};
//     document.querySelector("#minutes").value = minutes;
//     document.querySelector("#seconds").value = seconds;
//     };
// };


