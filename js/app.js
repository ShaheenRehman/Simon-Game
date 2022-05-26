const allCards = ["yellow", "green", "red", "blue"];

let gameSequence = [];
let userSequence = [];

let level = 0;

document.getElementById('start').addEventListener("click", function start() {
    nextsequence();
    document.getElementById('line').innerHTML = "";
    document.getElementById("title").innerHTML = "Simon Game";
    // console.log("AOA");
})


function nextsequence() {
    userSequence = [];
    level++;
    document.getElementById('level').innerHTML = level;
    let randomNumber = Math.floor(Math.random() * 4);
    let randomCard = allCards[randomNumber]
    gameSequence.push(randomCard);

    let animationBtn = document.querySelector("#" + randomCard);
    animationBtn.classList.add("pressed");
    setTimeout(() => {
        animationBtn.classList.remove("pressed");
    }, 255);
    playSound(randomCard);

    // console.log('gameSequence');
}


document.querySelectorAll('.box').forEach((box) => {
    box.onclick = () => {

        let userChosenSequence = box.id
        userSequence.push(userChosenSequence)

        playSound(userChosenSequence);
        animatePress(userChosenSequence);
        // console.log(userSequence);
        simonGame(userSequence.length - 1)
    }
})


function simonGame(currentLevel) {

    if (gameSequence[currentLevel] === userSequence[currentLevel]) {
        if (userSequence.length === gameSequence.length) {
            setTimeout(() => {
                nextsequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        document.querySelector("body").classList.add("gameOver");
        // $("#level-title").text("Game Over, Press Any Key to Restart");
        document.getElementById("level").innerHTML = "GO"
        document.getElementById('line').innerHTML = "Click GO to restart the Game";

        if (level <= 4) {
            document.getElementById("title").innerHTML = "Noob xD";
        } else if (level >= 5 && level <= 6) {
            document.getElementById("title").innerHTML = "Good job";
        } else if (level >= 7 && level <= 8) {
            document.getElementById("title").innerHTML = "Great Game Man";
        } else if (level >= 9 && level <= 11) {
            document.getElementById("title").innerHTML = "Salam Legend!";
        } else {
            document.getElementById("title").innerHTML = "Salam GOAT!";
        }

        setTimeout(function () {
            document.querySelector("body").classList.remove("gameOver");
        }, 200);

        startOver();
    }
}


function animatePress(currentColor) {
    document.querySelector("#" + currentColor).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("#" + currentColor).classList.remove("pressed");
    }, 100);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// console.log(gameSequence);

function startOver() {
    level = 0;
    gameSequence = [];

    // console.log("LOSE")
    // console.log(gameSequence);
}
