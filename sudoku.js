const size = 9
let board = []

function createEmptyBoard(){

board = []

for(let i=0;i<size;i++){
board.push(Array(size).fill(0))
}

}

function isSafe(row,col,num){

for(let x=0;x<9;x++){
if(board[row][x]==num) return false
}

for(let x=0;x<9;x++){
if(board[x][col]==num) return false
}

let startRow=row-row%3
let startCol=col-col%3

for(let i=0;i<3;i++){
for(let j=0;j<3;j++){
if(board[i+startRow][j+startCol]==num) return false
}
}

return true
}

function solve(){

for(let row=0;row<9;row++){

for(let col=0;col<9;col++){

if(board[row][col]==0){

let nums=[1,2,3,4,5,6,7,8,9]

nums.sort(()=>Math.random()-0.5)

for(let num of nums){

if(isSafe(row,col,num)){

board[row][col]=num

if(solve()) return true

board[row][col]=0
}

}

return false
}

}

}

return true
}

function removeNumbers(count){

while(count>0){

let r=Math.floor(Math.random()*9)
let c=Math.floor(Math.random()*9)

if(board[r][c]!=0){

board[r][c]=0
count--

}

}

}

function drawBoard(){

let container=document.getElementById("sudoku-board")

container.innerHTML=""

for(let r=0;r<9;r++){

for(let c=0;c<9;c++){

let input=document.createElement("input")

input.className="cell"
input.maxLength=1

if(board[r][c]!=0){

input.value=board[r][c]
input.disabled=true

}

container.appendChild(input)

}

}

}

function generateSudoku(){

createEmptyBoard()

solve()

let difficulty=document.getElementById("difficulty").value

removeNumbers(parseInt(difficulty))

drawBoard()

document.getElementById("result").innerText=""
}

function checkSolution(){

let cells=document.querySelectorAll(".cell")

let index=0

for(let r=0;r<9;r++){

for(let c=0;c<9;c++){

let value=parseInt(cells[index].value)

if(!value || !isSafe(r,c,value)){

document.getElementById("result").innerText="❌ Incorrect solution"

return

}

index++

}

}
let player = localStorage.getItem("playerName")

document.getElementById("info").innerText =
player + " won the game! Hurray! 🎉"
}