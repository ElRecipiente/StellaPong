let playerOne = document.querySelector("div.racket#P1")
let playerTwo = document.querySelector("div.racket#P2")
let theBall = document.querySelector("div#ball")
let directionX = true;
let directionY = 0;
let ballX = 50;
let ballY = 0;
let pingY = 0;
let pongY = 0;
let gameWindowHeight = 85;
let maxWindowWidth = 99;
let maxWindowHeight = 99;
let gameEnd = false;

// *** Key Event Listener *** //
document.addEventListener("keydown", (event) => {
    let key = event.code
    console.log(key)
    if (key === "ArrowDown" && pongY < gameWindowHeight) {
        pongY += 5;
        playerTwo.style.top = `${pongY}vh`;
    }
    else if (key === "ArrowUp" && pongY > 0) {
        pongY -= 5;
        playerTwo.style.top = `${pongY}vh`;
    }
    if (key === "KeyS" && pingY < gameWindowHeight) {
        pingY += 5;
        playerOne.style.top = `${pingY}vh`;
    }
    else if (key === "KeyW" && pingY > 0) {
        pingY -= 5;
        playerOne.style.top = `${pingY}vh`;
    }
    console.log(pongY);
    console.log(pingY);
})

// *** Move The Ball ***//

function moveTheBall(directionX, directionY) {
    // console.log(directionX);
    // console.log(directionY);
    if (gameEnd == true) {
        alert("GAME OVER");
    }

    else {

        // position de la balle sur X
        if (directionX && ballX < maxWindowWidth) {
            ballX = ballX + 0.3;
            theBall.style.left = `${ballX}vw`;
        }

        else if (directionX == false && ballX < maxWindowWidth) {
            ballX = ballX - 0.3;
            theBall.style.left = `${ballX}vw`;
        }

        // position de la balle sur Y
        if (directionY == 1 && ballY < maxWindowHeight) {
            ballY = ballY + 0.3;
            theBall.style.top = `${ballY}vh`;
        }

        else if (directionY == -1 && ballY < maxWindowHeight) {
            ballY = ballY - 0.3;
            theBall.style.top = `${ballY}vh`;
        }

        if (ballY == maxWindowHeight) {
            directionY = false
        }

        // collision avec les rackets
        if ((5 <= ballX && ballX <= 6) && ((pingY <= ballY) && (ballY <= (pingY + 15)))) {
            directionX = true;
        }

        if ((94 <= ballX && ballX <= 95) && ((pongY <= ballY) && (ballY <= (pongY + 15)))) {
            directionX = false;
        }

        // Si la balle touche un bord ou non :
        if (0 < ballX && ballX < 99) {
            window.requestAnimationFrame(() => {
                moveTheBall(directionX, directionY);
                console.log(ballX);
            })
        }

        else {
            gameEnd = true;
            window.requestAnimationFrame(() => {
                moveTheBall(directionX, directionY);
            })
            console.log("END")
        }
    }
}



theBall.style.background = "red";

moveTheBall(directionX, directionY);


//*** Collision ***//