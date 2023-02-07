let playerOne = document.querySelector("div.racket#P1")
let playerTwo = document.querySelector("div.racket#P2")
let pingY = 0;
let pongY = 0;


// *** Key Event Listener *** //
document.addEventListener("keydown", (event) => {
    let key = event.code
    console.log(key)
    if (key === "ArrowDown" && pongY < 90) {
        pongY += 2;
        playerTwo.style.top = `${pongY}vh`;
    }
    else if (key === "ArrowUp" && pongY > 0) {
        pongY -= 2;
        playerTwo.style.top = `${pongY}vh`;
    }
    if (key === "KeyS" && pingY < 90) {
        pingY += 2;
        playerOne.style.top = `${pingY}vh`;
    }
    else if (key === "KeyW" && pingY > 0) {
        pingY -= 2;
        playerOne.style.top = `${pingY}vh`;
    }
})

