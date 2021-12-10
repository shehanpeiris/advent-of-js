// Adding event listener to "Start" button
const startButton = document.getElementById("start-button");

// ClickHandler function once "Start" button is clicked
const startClickHandler = () => {
    console.log("You clicked start!");
    startButton.innerHTML = "Stop";
};

startButton.addEventListener("click", startClickHandler);

