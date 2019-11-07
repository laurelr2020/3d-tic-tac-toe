'use strict'

const boardSize = 3;
const numberOfSlots = 9;

let winningConditions = new Array();
winningConditions.push(["top-left", "top-middle", "top-right"]);
winningConditions.push(["middle-left", "middle-middle", "middle-right"]);
winningConditions.push(["bottom-left", "bottom-middle", "bottom-right"]);

winningConditions.push(["top-left", "middle-left", "bottom-left"]);
winningConditions.push(["top-middle", "middle-middle", "bottom-middle"]);
winningConditions.push(["top-right", "middle-right", "bottom-right"]);

winningConditions.push(["top-left", "middle-middle", "bottom-right"]);
winningConditions.push(["top-right", "middle-middle", "bottom-left"]);

let currentPlayer = 0;
let player1Selections = new Array();
let player2Selections = new Array();

let playedPieces = [];

function personMove(x, y){
    if(!clickOnBoard(x, y)) return;

    let placePlayed = checkBounds(x,y);
        if(placePlayed != ""){
            playedPieces.push({
                player: currentPlayer,
                place: placePlayed
            });
            
            if(currentPlayer == 0){
                player1Selections.push(placePlayed);
            }
            if(currentPlayer == 1){
                player2Selections.push(placePlayed);
            }

        }
}

function checkForWinner(){
    var win = false;
    var selections = new Array();

    if(currentPlayer == 0)
        selections = player1Selections;
    else
        selections = player2Selections;
    
    if(selections.length <= boardSize){
        for(let winningHand = 0; winningHand < winningConditions.length; winningHand++){
            let winCondition = winningConditions[winningHand];
            let winFound = true;

            for(let winningSlot = 0; winningSlot < winCondition.length; winningSlot++){
                let slotFound = false;

                for(let playerHandSlot = 0; playerHandSlot < selections.length; playerHandSlot++){
                    if(winningConditions[winningSlot] == player1Selections[playerHandSlot]){
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
    return player1Selections.length + player2Selections.length == (boardSize * boardSize);
}

function gameUpdate(){
    let thereIsAWin = checkForWinner();
    let thereIsADraw = checkForDraw()
    if(thereIsAWin){
        if(currentPlayer == 0){
            Swal.fire({
                icon: 'success',
                title: 'Winner Winner!',
                text: 'Player 1 Wins!!!!',
                confirmButtonText: 'Congrats!!'
            });        
        }else if(currentPlayer == 1){
            Swal.fire({
                icon: 'success',
                title: 'Winner Winner!',
                text: 'Player 2 Wins!!!!',
                confirmButtonText: 'Congrats!!'
            });
        }
    }else if(thereIsADraw){
        Swal.fire({
            title: 'Draw',
            text: 'It is a tie!',
            confirmButtonText: 'Wanna rematch?',
        });
    }

    if(thereIsAWin || thereIsADraw){
        reset();
    }
}

function reset(){
    currentPlayer = 0;
    player1Selections = new Array();
    player2Selections = new Array();
    playedPieces = [];
}