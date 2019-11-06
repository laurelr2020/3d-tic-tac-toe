'use strict'
//adapated from https://www.thatsoftwaredude.com/content/6189/coding-tic-tac-toe-in-javascript
const boardSize = 3;
const numberOfSlots = 9;

let winningConditions = new Array();
winningConditions.push([1, 2, 3]);
winningConditions.push([4, 5, 6]);
winningConditions.push([7, 8, 9]);

winningConditions.push([1, 4, 7]);
winningConditions.push([2, 5, 8]);
winningConditions.push([3, 6, 9]);

winningConditions.push([1, 5, 9]);
winningConditions.push([3, 5, 7]);

let currentPlayer = 0;
let player1Selections = new Array();
let computerSelections = new Array();

var playedPieces = [];

function personMove(x, y){
    if(x >= 300 && x<= 635 && y>=230 && y<=550){
        let placePlayed = checkBounds(x,y);
        playedPieces.push({
            player: currentPlayer,
            place: placePlayed
        });
    }
}

function computerMove(){
    let nextMove = Math.floor(Math.random() * 9);
    //if not already played, play in that square.
}

function checkForWinner(){
    var win = false;
    var selections = new Array();

    if(currentPlayer == 0)
        selections = player1Selections;
    else
        selections = computerSelections;
    
    if(selections >= boardSize){
        for(let winningHand = 0; winningHand < winningConditions.length; winningHand++){
            let winCondition = winningConditions[winningHand];
            let winFound = true;

            for(let winningSlot = 0; winningSlot < winCondition.length; winningSlot++){
                let slotFound = false;

                for(let playerHandSlot = 0; playerHandSlot < selections.length; playerHandSlot++){
                    if(winningHand[winningSlot] == player1Selections[playerHandSlot]){
                        slotFound = true;
                        break;
                    }
                }

                if(slotFound == false){
                    winFound = false;
                    break;
                }
            }

            if(winFound == true){
                win = true;
                break;
            }
        }
    }
    return win;
}

function checkForDraw(){
    return player1Selections.length + computerSelections.length == (boardSize * boardSize);
}

function reset(){
    currentPlayer = 0;
    player1Selections = new Array();
    computerSelections = new Array();
}

if(checkForWinner()){
    if(currentPlayer == 0){
        //player one wins
    }else{
        //computer wins
    }
}else if(checkForDraw()){
    //draw
}