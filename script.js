let playerChoice;
let computerChoice;

function getComputerChoice() {
    let choice = ["rock","paper","scissors"];
    let computerChoice = choice [Math.floor(Math.random() * choice.length)];
    return computerChoice;
}


let playerScore = 0 
let computerScore = 0;

let gameResults = document.querySelector(".gameresults");
let pscore = document.querySelector(".pscore");
let cscore = document.querySelector(".cscore");
let declareWinner = document.querySelector(".declarewinner");

let rockWins = document.querySelector("#rockwins");
let paperWins = document.querySelector("#paperwins");
let scissorsWin = document.querySelector("#scissorswin");
let itsTied = document.querySelector("#tie");
let youLose = document.querySelector("#youlose");
let youWin = document.querySelector("#youwin");


let section = document.querySelector("section");
let playAgain = document.querySelector(".playagain");
let arrow = document.querySelector(".arrow");
let addOne = document.querySelector(".addone")

function plusOne() {
addOne.textContent = "+1";
}

function playRound() {
    computerChoice = getComputerChoice();
    arrow.style.display = "none";
    
 
    if (playerChoice === computerChoice) {
    gameResults.textContent = "It's a tie";
    itsTied.play();
    }
    
    else if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
         gameResults.textContent = "Rock beats scissors!";
         playerScore++
         rockWins.play();
         computerRock.style.borderColor = "pink";
         computerPaper.style.borderColor = "black";
         computerScissors.style.borderColor = "black";
      
        
         

         
        } else {
        gameResults.textContent = "Paper beats rock.";
         computerScore++
         paperWins.play();
         

        }

        
    }

    else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
        gameResults.textContent = "Scissors beat paper.";
         computerScore++
         scissorsWin.play();
         

        } else {
        gameResults.textContent = "Paper beats rock!";
         playerScore++ 
         paperWins.play();
        }
    }

   else if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            gameResults.textContent = "Scissors beat paper!";
             playerScore++
             scissorsWin.play();
        } else {
            gameResults.textContent = "Rock beats scissors.";
        computerScore++
        rockWins.play();
        }
        
    }


   pscore.textContent = "Your score:" + playerScore  
   cscore.textContent = " Computer score:" + computerScore;

    


   
   let declareText = document.querySelector(".declaretext")
  
    if (playerScore === 5) {
        declareText.textContent = "Congrats, you won!"
        youWin.play();
        section.style.display = "none";
        declareWinner.style.display = "block";

        
        

    } else if (computerScore === 5) {
            declareText.textContent = "Sorry, you lost."
            youLose.play();
            section.style.display = "none";
            declareWinner.style.display = "block";
        }
    

    

    if (computerChoice === "rock") {
        computerRock.style.borderColor = "pink";
        computerPaper.style.borderColor = "black";
        computerScissors.style.borderColor = "black";
    }
    
    else if (computerChoice === "paper") {
        computerPaper.style.borderColor = "pink";
        computerRock.style.borderColor = "black";
        computerScissors.style.borderColor = "black";
    }
        
     else if (computerChoice === "scissors") {
        computerScissors.style.borderColor = "pink";
        computerPaper.style.borderColor = "black";
        computerRock.style.borderColor = "black";
    }

}




let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

rock.addEventListener('click', () => {
    playerChoice = "rock" ; 
    playRound("rock", computerChoice);
    
    
});

paper.addEventListener('click', () => {
    playerChoice = "paper";
    playRound("paper", computerChoice);
   
    
});

scissors.addEventListener('click', () => {
    playerChoice = "scissors";
    playRound("scissors", computerChoice);
    
});


const computerRock = document.querySelector(".computer-rock");
const computerPaper = document.querySelector(".computer-paper");
const computerScissors = document.querySelector(".computer-scissors");

function resetGame() {
    location.reload();
    
}

playAgain.addEventListener('click', resetGame);
    

