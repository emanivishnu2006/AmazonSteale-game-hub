let player=""
let n
let queens=[]
let chances=3

function startGame(){

player=document.getElementById("playerName").value

if(player==""){
alert("Please enter your name")
return
}

n=parseInt(document.getElementById("size").value)

document.getElementById("start-screen").style.display="none"
document.getElementById("game-screen").style.display="block"

queens=[]
chances=3

drawBoard()

}

function drawBoard(){

let board=document.getElementById("board")

board.innerHTML=""

board.style.gridTemplateColumns=`repeat(${n},60px)`

for(let r=0;r<n;r++){

for(let c=0;c<n;c++){

let sq=document.createElement("button")

sq.className="square "+((r+c)%2==0?"light":"dark")

sq.onclick=()=>placeQueen(r,c,sq)

board.appendChild(sq)

}

}

document.getElementById("info").innerText="Chances: "+chances

}

function safe(r,c){

for(let q of queens){

let qr=q[0]
let qc=q[1]

if(qr==r || qc==c || Math.abs(qr-r)==Math.abs(qc-c))
return false

}

return true

}

function placeQueen(r,c,button){

button.innerText=""

for(let i=0;i<queens.length;i++){

if(queens[i][0]==r && queens[i][1]==c){

queens.splice(i,1)
return

}

}
if(!safe(r,c)){

chances--

document.getElementById("info").innerText =
"Wrong move! Chances left: "+chances

if(chances==0){

document.getElementById("info").innerText =
player + " lost! Showing solution..."

showSolution()

}

return
}
function showSolution(){

let solution = solveNQueen()

solution.forEach(pos=>{

let index = pos[0]*n + pos[1]

document.querySelectorAll(".square")[index].innerText="♛"

})

}

button.innerText="♛"

queens.push([r,c])

if(queens.length==n){

document.getElementById("info").innerText =
player + " won the game! Hurray! 🎉"

showConfetti()

}
}
function resetGame(){

queens=[]
chances=3

drawBoard()

document.getElementById("info").innerText="Game Reset"

}
function showHint(){

let solution = solveNQueen()

for(let pos of solution){

let r=pos[0]
let c=pos[1]

if(!queens.some(q=>q[0]==r && q[1]==c)){

let index=r*n+c

document.querySelectorAll(".square")[index].style.background="yellow"

break

}

}

}
function showConfetti(){

for(let i=0;i<120;i++){

let conf=document.createElement("div")

conf.className="confetti"

conf.style.left=Math.random()*window.innerWidth+"px"

conf.style.backgroundColor=
["#ff0","#0ff","#f0f","#0f0","#ff6600"][Math.floor(Math.random()*5)]

document.body.appendChild(conf)

setTimeout(()=>conf.remove(),3000)

}


}

