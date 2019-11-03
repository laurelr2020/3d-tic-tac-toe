'use strict'

const boardSize = 3;

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

function checkForWinner(){
    var win = false;
    var selections = new Array();

    if(currentPlayer == 0)
        selections = player1Selections;
    else
        selections = computerSelections;
    
    if(selections >= size){
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

if(checkForWinner()){
    if(currentPlayer == 0){
        //player one wins
    }else{
        //computer wins
    }
}else if(checkForDraw()){
    //draw
}