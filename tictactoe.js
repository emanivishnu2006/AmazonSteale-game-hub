let p1=""
let p2=""
let current="X"

let board = ["","","","","","","","",""]

function startGame(){

p1=document.getElementById("player1").value
p2=document.getElementById("player2").value

if(p1=="" || p2==""){
alert("Enter both names")
return
}

drawBoard()

}





function drawBoard(){

let container=document.getElementById("board")

container.innerHTML=""

for(let i=0;i<9;i++){

let cell=document.createElement("button")

cell.className="cell"

cell.innerText=board[i]

cell.onclick=()=>makeMove(i)

container.appendChild(cell)

}

}

function makeMove(index){

if(board[index]!="") return

board[index]=currentPlayer

if(checkWinner()){

let winner = current=="X" ? p1 : p2

document.getElementById("status").innerText =
winner + " won the game! 🎉"
showConfetti()                                                                  
drawBoard()
return

}

if(!board.includes("")){

document.getElementById("status").innerText="Draw"
drawBoard()
return

}

currentPlayer = currentPlayer=="X" ? "O" : "X"

drawBoard()

}

function checkWinner(){

const wins=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]

for(let combo of wins){

let [a,b,c]=combo

if(board[a] && board[a]==board[b] && board[a]==board[c])
return true

}

return false

}

function resetGame(){

board=["","","","","","","","",""]
currentPlayer="X"
document.getElementById("status").innerText=""
drawBoard()

}


drawBoard()
