function load() {
    for(let i = 0; i < 9; i++) {
        let boxContainer = document.getElementById("box" + (i + 1));
        let p = document.createElement('p');
        if(window.playerMarks[i]) {
            p.textContent = "X";
        } else {
            p.textContent = (i + 1);
        }
        p.classList.add('text');
        boxContainer.appendChild(p);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playRound() {
    let gameSelected = getRandomInt(3) + 1;
    let buttonContainer = document.getElementById("box10");
    let game = document.createElement('a');
    game.textContent = "Start Game!";

    if(gameSelected == 1) {
        game.href = "./rock-paper-scissors.html";
    } else if(gameSelected == 2) {
        game.href = "./snake-game.html";
    } else if(gameSelected == 3) {
        game.href = "./tic-tac-toe.html"
    }

    game.classList.add("start-game");
    buttonContainer.appendChild(game);

    let tileSelected = getRandomInt(9) + 1;
    window.curCell = tileSelected;
    let tileContainer = document.getElementById("box0");
    let number = document.createElement('p');
    number.textContent = "Tile: " + tileSelected;
    number.classList.add('text');
    tileContainer.appendChild(number);
}

load();
playRound();