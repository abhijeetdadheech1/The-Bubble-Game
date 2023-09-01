function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 168; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="Bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
var timer = 60;
function runTimer() {
    var time = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer
        }
        else {
            clearInterval(time);
            document.querySelector("#pbtm").innerHTML = "<h1>GAME OVER</h1>";
        }
    }, 1000);
}
var hitrn = 0
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hitrn;
}

var score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


document.querySelector("#pbtm")
    .addEventListener("click", function (dets) {
        var clickedNum = Number(dets.target.textContent)
        if (clickedNum === hitrn) {
            increaseScore();
            makeBubble();
            getNewHit();
        }
    });



getNewHit();
runTimer();
makeBubble();



/*document.querySelector("#pbtm").innerHTML = `<button>Start Again</button>`.addEventListener("click", function () {
    getNewHit();
    runTimer();
    makeBubble();
})*/