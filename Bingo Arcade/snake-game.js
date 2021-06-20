window.onload=function() {
    canv = document.getElementById("gc");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    timer = setInterval(game, 1000 / 15);
}

score = 0;
let playerContainer = document.querySelector('.playerScore');
let playerPt = document.createElement('p');
playerPt.classList.add('scores');
playerPt.textContent = score;
playerContainer.appendChild(playerPt);

gameover = false;

px = py = 10;
gs = tc = 20;
ax = ay = 15;
xv = yv = 0;
trail = [];
tail = 5;
function game() {
    px += xv;
    py += yv;
    if(px < 0) {
        px = tc - 1;
    }
    if(px > tc - 1) {
        px = 0;
    }
    if(py < 0) {
        py = tc - 1;
    }
    if(py > tc - 1) {
        py = 0;
    }
    ctx.fillStyle = "#013220";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = "lime";
    for(var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
        if(trail[i].x == px && trail[i].y == py) {
            if(tail != 5) {
                gameover = true;
            }
    
            tail = 5;
        }
    }

    if(gameover == true) {
        menu();
    }

    trail.push( { x:px, y:py } );
    while(trail.length > tail) {
        trail.shift();
    }

    if(ax == px && ay == py) {
        tail++; score++;
        playerPt.textContent = score;
        ax = Math.floor(Math.random() * tc);
        ay = Math.floor(Math.random() * tc);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);

    if(score == 10) {
        window.playerMarks[window.curCell - 1] = 1;
        menu();
    }
}

function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            xv =- 1; yv = 0;
            break;
        case 38:
            xv = 0; yv =- 1;
            break;
        case 39:
            xv = 1; yv = 0;
            break;
        case 40:
            xv = 0; yv = 1;
            break;
    }
}

function menu() {
    let div = document.getElementById('main');
    let a = document.createElement('a');
    div.appendChild(a);
    a.textContent = "Return to Menu"
    a.classList.add("ReloadButton");
    a.href = "./index.html"
    clearInterval(timer);
}