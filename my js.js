const theTimer = document.querySelector(".timer");
const testArea = document.querySelector("#test-area");
var originText = document.querySelector("#origin-text p");
const testWrapper = document.querySelector(".test-wrapper");
const resetButton = document.querySelector("#reset");



var timer = [0, 0, 0];
var timerRunnig = false;
var interval;


function leadingZero(time) {

    if (time < 10) {
        time = "0" + time;
    }
    return time;

}


function runTimer() {

    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;

    if (timer[2] < 100) {
        timer[2]++;
    }
    if (timer[2] == 100) {
        timer[2] = 0;
        timer[1]++;
    }
    if (timer[1] == 60) {
        timer[1] = 0;
        timer[0]++;
    }

}

function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.innerHTML.substring(0, textEntered.length);


    if (textEntered == originText.innerHTML) {

        testWrapper.style.borderColor = "green";
        clearInterval(interval);

    } else {
        if (textEntered == originTextMatch) {

            testWrapper.style.borderColor = "yellow";

        } else {

            testWrapper.style.borderColor = "red";
        }
    }
}

function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0, 0, 0, 0];
    timerRunnig = false;


    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";

}

function Start() {
    let textEnteredLength = testArea.value.length;

    if (textEnteredLength == 0 && !timerRunnig) {
        timerRunnig = true;
        interval = setInterval(runTimer, 10);
    }
}


// improvement_________________________________________________________________________________________

function makeworld(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateParagraph() {
    let p = '';
    for (var i = 0; i < 14; i++) {
        p += makeworld(randomNumber(3, 7)) + ' ';
    }
    p += makeworld(randomNumber(3, 7)) + '.';

    originText.innerHTML = p;

}


testArea.addEventListener("keypress", Start);
testArea.addEventListener("keyup", spellCheck);
resetButton.addEventListener("click", reset);
resetButton.addEventListener("click", generateParagraph);