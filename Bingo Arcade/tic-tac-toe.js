function startGame() {

    for (var i = 1; i <= 9; i = i + 1) {
        clearBox(i);
    }

    document.turn = "X";
    document.winner = null;
    document.player = "Player"
    setMessage(document.player + " gets to start.");
}

function setMessage(msg) { 
    document.getElementById("message").innerText = msg;

}


function nextMove(square) {
    if (document.winner != null) {
        setMessage(document.winner + " wins!")
    }
    else if (square.innerText == "") {
        square.innerText = document.turn;
        switchTurn();
    } else if (square >= 1 && square <= 9) {
        let changeBox = document.getElementById("s" + square);
        changeBox.innerText = document.turn;
        switchTurn();
    }
}

function exit() {
    let container = document.getElementById('center3');
    let menu = document.createElement('a');
    menu.textContent = "Return to Menu";
    menu.classList.add('button');
    menu.href = "./index.html";
    container.appendChild(menu);
}

function switchTurn() {

    if (checkForWinner(document.turn)) {
        if(document.turn == "X") {
            setMessage("Player wins!");
            document.winner = "Player"
            window.playerMarks[window.curCell - 1] = 1;
        } else {
            setMessage("Computer wins!");
            document.winner = "Computer"
        }
        
        exit();
    } else if (document.turn == "X") {
        document.turn = "O";
        setMessage( "Computer" + "'s turn.");
        let computerTurn = getRandomInt(8) + 1;
        while(getBox(computerTurn) != "") {
            computerTurn = getRandomInt(8) + 1;

            let impossible = 0;
            for(var i = 1; i <= 9; i++) {
                if(getBox(i) != "") {
                    impossible++;
                }
            }
            if(impossible == 9) {
                setMessage( "Draw" );
                exit();
                return;
            }
        }
        nextMove(computerTurn);
    } else {
        document.turn = "X";
        setMessage( "Player" + "'s turn.");
    }
}

function checkForWinner(move) {
    var result = false;
    if (checkRow(1, 2, 3, move) || 
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) || 
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {
        
        result = true;
    }
    return result;
}

function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {
    return document.getElementById("s" + number).innerText;
}

function clearBox(number) {
    document.getElementById("s" + number).innerText = "";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
