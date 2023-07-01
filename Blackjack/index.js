let cards = []
let sum = 0
let message = ""
isAlive = true
isBlackjack = false
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")

function randomCard(){
    let randomNumber = Math.floor(Math.random()* 13)+1
    if(randomNumber > 10){
        return 10
    }else if(randomNumber ===1){
        return 11
    }else{
        return randomNumber
    }
    
}
function startGame(){
    isAlive = true
    isBlackjack = false
    let firstNumber = randomCard()
    let secondNumber = randomCard()
    sum = firstNumber + secondNumber
    cards = [firstNumber, secondNumber]
    renderCard()
}


function renderCard(){
    cardsEl.textContent = "Cards: "
    for(let i=0;i<cards.length; i++){
        cardsEl.textContent += (cards[i]) + " "
    }
    sumEl.textContent = "Sum: "+sum
    if(sum < 21){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "You've got a blackjack!"
        isBlackjack = true
    }else{
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    
}


function newCard(){
    if(isAlive ===true && isBlackjack === false){
        let card = randomCard()
        sum +=card
        cards.push(card)
        renderCard()
    }
}

let player = {
    name: "Mounesha",
    chips : 200
}
playerEl.textContent = player.name + ": $"+ player.chips