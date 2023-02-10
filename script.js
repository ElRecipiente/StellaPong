let playerOne = document.querySelector("div.racket#P1")
let playerTwo = document.querySelector("div.racket#P2")
let theBall = document.querySelector("#ball")
let directionX = true;
let directionY = 0;
let ballX = 50;
let ballY = 0;
let pingY = 0;
let pongY = 0;
let gameWindowHeight = 85;
let maxWindowWidth = 99;
let minWindowHeight = 0;
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
        if (directionX) {
            ballX = ballX + 0.3;
            theBall.style.left = `${ballX}vw`;
        }

        else if (directionX == false) {
            ballX = ballX - 0.3;
            theBall.style.left = `${ballX}vw`;
        }

        // position de la balle sur Y
        if (directionY == 1) {
            ballY = ballY + 0.3;
            theBall.style.top = `${ballY}vh`;
        }

        else if (directionY == 2) {
            ballY = ballY + 0.6;
            theBall.style.top = `${ballY}vh`;
        }

        else if (directionY == -1) {
            ballY = ballY - 0.3;
            theBall.style.top = `${ballY}vh`;
        }

        else if (directionY == -2) {
            ballY = ballY - 0.6;
            theBall.style.top = `${ballY}vh`;
        }

        if (ballY > 98 && directionY == 1) {
            directionY = -1;
        }

        else if (ballY > 98 && directionY == 2) {
            directionY = -2;
        }

        else if (ballY > 98 && directionY == -1) {
            directionY = 1;
        }

        else if (ballY > 98 && directionY == -2) {
            directionY = 2;
        }

        if (ballY < 0 && directionY == 1) {
            directionY = -1;
        }

        else if (ballY < 0 && directionY == 2) {
            directionY = -2;
        }

        else if (ballY < 0 && directionY == -1) {
            directionY = 1;
        }

        else if (ballY < 0 && directionY == -2) {
            directionY = 2;
        }

        // collision avec les rackets
        if ((5 <= ballX && ballX <= 6) && ((pingY <= ballY) && (ballY <= (pingY + 15)))) {

            if (pingY <= ballY && ballY <= pingY + 3) {
                directionX = true;
                directionY = -2;
            }

            else if (pingY + 3 <= ballY && ballY <= pingY + 6) {
                directionX = true;
                directionY = -1;
            }

            else if (pingY + 6 <= ballY && ballY <= pingY + 9) {
                directionX = true;
                directionY = 0;
            }

            else if (pingY + 9 <= ballY && ballY <= pingY + 12) {
                directionX = true;
                directionY = 1;
            }

            else {
                directionX = true;
                directionY = 2;
            }
        }

        if ((94 <= ballX && ballX <= 95) && ((pongY <= ballY) && (ballY <= (pongY + 15)))) {

            if (pongY <= ballY && ballY <= pongY + 3) {
                directionX = false;
                directionY = -2;
            }

            else if (pongY + 3 <= ballY && ballY <= pongY + 6) {
                directionX = false;
                directionY = -1;
            }

            else if (pongY + 6 <= ballY && ballY <= pongY + 9) {
                directionX = false;
                directionY = 0;
            }

            else if (pongY + 9 <= ballY && ballY <= pongY + 12) {
                directionX = false;
                directionY = 1;
            }

            else {
                directionX = false;
                directionY = 2;
            }
        }

        // Si la balle touche un bord en X ou non :
        if (0 < ballX && ballX < 98) {
            window.requestAnimationFrame(() => {
                moveTheBall(directionX, directionY);
                console.log(ballY);
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

moveTheBall(directionX, directionY);


//*** Collision ***//