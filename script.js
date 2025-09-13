let eve = true
let val = "x"
let gameOver = false
let id1 = document.getElementById('g1')
let id2 = document.getElementById('g2')
let id3 = document.getElementById('g3')
let id4 = document.getElementById('g4')
let id5 = document.getElementById('g5')
let id6 = document.getElementById('g6')
let id7 = document.getElementById('g7')
let id8 = document.getElementById('g8')
let id9 = document.getElementById('g9')
let win = document.getElementById('win');
let turn = document.getElementById('turn')
const jsConfetti = new JSConfetti()
function restart() {
    window.location.reload('index.html');
}
function playerTurn(i) {
    let id = document.getElementById(i)
    if (id.innerHTML == "" && gameOver == false) {
        if (eve == true) {
            id.innerHTML = val
            val = "o"
            eve = false
            turn.innerHTML = "O Player turn"
        } else {
            id.innerHTML = val
            val = "x"
            eve = true
            turn.innerHTML = "X Player turn"
        }
        if (id1.innerHTML == "x" && id2.innerHTML == "x" && id3.innerHTML == "x") { jsConfetti.addConfetti(); turn.innerHTML = ""; win.innerHTML = "X Player is win" }
        else if (id4.innerHTML == "x" && id5.innerHTML == "x" && id6.innerHTML == "x") { jsConfetti.addConfetti(); turn.innerHTML = ""; win.innerHTML = "X Player is win" }
        else if (id7.innerHTML == "x" && id8.innerHTML == "x" && id9.innerHTML == "x") { jsConfetti.addConfetti(); turn.innerHTML = ""; win.innerHTML = "X Player is win" }
        else if (id1.innerHTML == "o" && id2.innerHTML == "o" && id3.innerHTML == "o") { jsConfetti.addConfetti(); turn.innerHTML = ""; win.innerHTML = "O Player is win" }
        else if (id4.innerHTML == "o" && id5.innerHTML == "o" && id6.innerHTML == "o") { jsConfetti.addConfetti(); turn.innerHTML = ""; win.innerHTML = "O Player is win" }
        else if (id7.innerHTML == "o" && id8.innerHTML == "o" && id9.innerHTML == "o") { jsConfetti.addConfetti(); turn.innerHTML = ""; win.innerHTML = "O Player is win" }
        else if (id1.innerHTML == "o" && id4.innerHTML == "o" && id7.innerHTML == "o") { jsConfetti.addConfetti(); turn.innerHTML = ""; win.innerHTML = "O Player is win" }
        else if (id2.innerHTML == "o" && id5.innerHTML == "o" && id8.innerHTML == "o") { jsConfetti.addConfetti(); turn.innerHTML = ""; win.innerHTML = "O Player is win" }
        else if (id3.innerHTML == "o" && id6.innerHTML == "o" && id9.innerHTML == "o") { jsConfetti.addConfetti(); turn.innerHTML = ""; win.innerHTML = "O Player is win" }
        else if (id1.innerHTML == "x" && id4.innerHTML == "x" && id7.innerHTML == "x") { jsConfetti.addConfetti(); turn.innerHTML = ""; win.innerHTML = "X Player is win" }
        else if (id2.innerHTML == "x" && id5.innerHTML == "x" && id8.innerHTML == "x") { jsConfetti.addConfetti(); turn.innerHTML = ""; win.innerHTML = "X Player is win" }
        else if (id3.innerHTML == "x" && id6.innerHTML == "x" && id9.innerHTML == "x") { jsConfetti.addConfetti(); turn.innerHTML = ""; win.innerHTML = "X Player is win" }
        else if (id1.innerHTML == "x" && id5.innerHTML == "x" && id9.innerHTML == "x") { jsConfetti.addConfetti(); turn.innerHTML = ""; win.innerHTML = "X Player is win" }
        else if (id3.innerHTML == "x" && id5.innerHTML == "x" && id7.innerHTML == "x") { jsConfetti.addConfetti(); turn.innerHTML = ""; win.innerHTML = "X Player is win" }
        else if (id1.innerHTML == "o" && id5.innerHTML == "o" && id9.innerHTML == "o") { jsConfetti.addConfetti(); turn.innerHTML = ""; win.innerHTML = "O Player is win" }
        else if (id3.innerHTML == "o" && id5.innerHTML == "o" && id7.innerHTML == "o") { jsConfetti.addConfetti(); turn.innerHTML = ""; win.innerHTML = "O Player is win" }
        else if (id1.innerHTML != "" && id2.innerHTML != "" && id3.innerHTML != "" && id4.innerHTML != "" && id5.innerHTML != "" && id6.innerHTML != "" && id7.innerHTML != "" && id8.innerHTML != "" && id9.innerHTML != "") { turn.innerHTML = ""; win.innerHTML = "It's tie please restart" }
        if (win.innerHTML != "") gameOver = true
    } else if (gameOver == true) {
        alert("Please Restart the game")
    } else {
        alert("Choose another column")
    }
}
