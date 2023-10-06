function enter_choice() {
    while (mySelection !== 'rock' && mySelection !== 'paper' && mySelection !== 'scissors') {
        var selection = prompt("enter 'rock', 'paper', or 'scissors'");
        var mySelection = selection.toLowerCase();
    }     
        return mySelection;
}   

function computerSelection() {

    let x = Math.floor(Math.random()*3 + 1);  
    
        if (x == 1) {
                var y = "rock";                        
            } else if (x == 2) {
                var y = ("paper");                        
            } else {
               var y = ("scissors");                       
            }
        return y;
}

function actionOn() {

    if(playerSelection == computerSelect) {
        alert('TIE! ' + playerSelection + ' does not beat ' + computerSelect);
    } 
    else if(playerSelection == "rock" && computerSelect !== "paper") {
        alert('Human wins! ' + playerSelection + ' beats ' + computerSelect);
        playerScore++;
    }
    else if(playerSelection == "paper" && computerSelect !== "scissors") {
        alert('Human wins! ' + playerSelection + ' beats ' + computerSelect);
        playerScore++;
    }
    else if(playerSelection == "scissors" && computerSelect !== "rock") {
        alert('Human wins! ' + playerSelection + ' beats ' + computerSelect);
        playerScore++;
    }
    else {
        alert('Computer wins! ' + computerSelect + ' beats ' + playerSelection);
        computerScore++;
    }
    return playerScore;
    return computerScore;
    console.log("human has a score of " + playerScore);
    console.log("Skynet has a score of " + computerScore);
}

function maxGames() {
    numberOfGames++;
    console.log(numberOfGames);

        if(numberOfGames == 5) {
            alert("Game over");
            
            finalScore(playerScore, computerScore);

            gameReset();
          
        }
}

function finalScore () {
    if (playerScore > computerScore) {
        alert("GAME OVER - Human wins by a score of " + playerScore + " to " + computerScore);
        } else if (playerScore < computerScore) {
        alert("GAME OVER - Skynet wins by a score of " + computerScore + " to " + playerScore);
        } else {
        alert("GAME OVER - it's a " + playerScore + "-" + computerScore + " tie");
        }
}

function gameReset() {
    numberOfGames = 0;
    playerScore = 0;
    computerScore = 0;
}