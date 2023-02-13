let playerOne = document.querySelector("div.racket#P1")
let playerTwo = document.querySelector("div.racket#P2")
let theBall = document.querySelector("#ball")
let directionX = true;
let directionY = 0;
let ballX = 50;
let ballY = 52;
let pingY = 45;
let pongY = 45;
let gameWindowHeight = 85;
let maxWindowWidth = 99;
let minWindowHeight = 0;
let maxWindowHeight = 99;
let gameEnd = true;
let scoreP1 = 0;
let scoreP2 = 0;
let backMusic = false;

function playList() {
    let bgAudio = new Audio("music/Stellaris.mp3");
    bgAudio.play();
}

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

    // détermine la couleur de la balle
    if (directionX) {
        theBall.style.background = "rgb(255, 166, 0)";
        theBall.style.boxShadow = "-4px 0 12px rgb(255, 166, 0)";
    }

    else {
        theBall.style.background = "rgb(0, 162, 255)";
        theBall.style.boxShadow = "4px 0 12px rgb(0, 162, 255)";
    }

    // s'exécute quand la partie se termine
    if (gameEnd == true) {
        let showP1Score = document.querySelector("main p span.red")
        let showP2Score = document.querySelector("main p span.blue")
        let boumAudio = new Audio("music/Boum.mp3");
        boumAudio.play();
        theBall.classList.add("radiant");
        setTimeout(() => {
            theBall.classList.add("boum");
        }, 300);

        if (ballX > 98) {
            showP1Score.textContent = `${scoreP1 += 1}`;
        }

        else {
            showP2Score.textContent = `${scoreP2 += 1}`;
        }
        console.log(directionX);
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

        else if (directionY == 0) {
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

function replay() {
    if (gameEnd) {
        gameEnd = false;
        theBall.classList.remove("boum");
        theBall.classList.remove("radiant");
        ballX = 50;
        ballY = 52;
        pingY = 45;
        pongY = 45;
        playerOne.style.top = `${pingY}vh`;
        playerTwo.style.top = `${pongY}vh`;

        if (!backMusic) {
            playList();
            backMusic = true;
            console.log("musique lancée")

            setTimeout(() => {
                backMusic = false;
            }, 400000);
        }

        moveTheBall(directionX, directionY);
    }
}

//*** Collision ***//