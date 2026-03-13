let icons = ["🍎","🍎","🚗","🚗","🐶","🐶","⚽","⚽"]

let board=[]
let firstCard=null
let secondCard=null
let lock=false
let moves=0

function shuffle(array){

return array.sort(()=>Math.random()-0.5)

}

function startGame(){

board=shuffle([...icons])

let container=document.getElementById("memory-board")

container.innerHTML=""

board.forEach((icon,index)=>{

let card=document.createElement("div")

card.className="card hidden"

card.dataset.icon=icon

card.onclick=()=>flipCard(card)

container.appendChild(card)

})

moves=0
document.getElementById("moves").innerText="Moves: 0"

}

function flipCard(card){

if(lock || !card.classList.contains("hidden")) return

card.innerText=card.dataset.icon
card.classList.remove("hidden")

if(!firstCard){

firstCard=card
return

}

secondCard=card

moves++
document.getElementById("moves").innerText="Moves: "+moves

if(firstCard.dataset.icon===secondCard.dataset.icon){

firstCard=null
secondCard=null

checkWin()

}else{

lock=true

setTimeout(()=>{

firstCard.innerText=""
secondCard.innerText=""

firstCard.classList.add("hidden")
secondCard.classList.add("hidden")

firstCard=null
secondCard=null

lock=false

},800)

}

}

function checkWin(){

let cards=document.querySelectorAll(".card")

for(let card of cards){

if(card.classList.contains("hidden"))
return

}

let player = localStorage.getItem("playerName")

document.getElementById("status").innerText =
player + " won the game! Hurray! 🎉"

showConfetti()

}

function resetGame(){

startGame()

}

startGame()