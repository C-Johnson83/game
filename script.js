var wins = 0;
var ties = 0;
var losses = 0;
var total = 0;

function playRockPaperScissors() {
    var choice = prompt('Please Chose Your Weapon\n\nrock, paper, or scissors');

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        alert('You have chosen ' + choice +'!'+'\n\nWill that be enough to claim victory?')
        console.log(choice);
    } else if (choice === "") {
        alert("please hit play again\nand make a selection")
        return;
    } else {
        console.log(choice, " is not available");
        alert('You must purchase the DLC to use that!\n\nYou enter the battle unarmed');
    }

    // Get a random number between 0 and 2
    var PCChoiceIndex = Math.floor(Math.random() * 3);

    // Map the random number to "rock", "paper", or "scissors"
    var PCChoice;
    switch (PCChoiceIndex) {
        case 0:
            PCChoice = "rock";
            break;
        case 1:
            PCChoice = "paper";
            break;
        case 2:
            PCChoice = "scissors";
            break;
    }

    console.log("Computer's choice: ", PCChoice);

    // figure out the outcome
    if (choice === PCChoice) {
        ties++;
        alert("This battle between your " + choice + " and the computer's " + PCChoice + " ends in a tie!");
    } else if (
        (choice === "rock" && PCChoice === "scissors") ||
        (choice === "paper" && PCChoice === "rock") ||
        (choice === "scissors" && PCChoice === "paper")
    ) {
        wins++;
        alert("You and your " + choice + " are Victorious!");
    } else {
        losses++;
        alert("You have lost to the computer's " + PCChoice + "!");
    }
    alert(getGameStatus());

    // Ask the user if they want to play again
    if (confirm("Do you want to play again?")) {
        
        // If the user says yes, call the function again to start a new game
        playRockPaperScissors();
    } else {
        // If the user doesn't want to play again, say thanks and end here
        alert("Thanks for playing! Here are the score results" + '\n\n' + getGameStatus());
        
        wins = 0;
        ties = 0;
        losses = 0;
        
    }

    // Function to get the game status
    function getGameStatus() {
        total = wins + ties + losses
        return (
            
            'Wins: ' + wins + '\n' +
            'Ties: ' + ties + '\n' +
            'Losses: ' + losses + '\n' +
            'Total: ' + total 
        );
    }

}

