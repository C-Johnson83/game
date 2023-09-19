var wins = 0;
var ties = 0;
var losses = 0;


function showMessage(message) {
    var gameMessageElement = document.getElementById("gameMessage");
    message = message.replace(/\n/g, "<br>");
    gameMessageElement.innerHTML = message;
}
function showMessage2(message) {
    var gameMessageElement = document.getElementById("gameMessage2");
    message = message.replace(/\n/g, "<br>");
    gameMessageElement.innerHTML = message;
}
function showMessage3(message) {
    var gameMessageElement = document.getElementById("gameMessage3");
    message = message.replace(/\n/g, "<br>");
    gameMessageElement.innerHTML = message;
}

function showGameStatus(status) {
    var gameStatusElement = document.getElementById("gameStatus");
    gameStatusElement.textContent = status;
}
showMessage("You find yourself in a nightmarish realm, where the very air seems to thicken with an eerie dread. \n\nMoonlight filters through twisted trees that seem to whisper secrets of the damned. Your footsteps echo softly as you approach a decrepit tree stump, its gnarled surface bearing the weight of untold stories, each one darker than the last.\n\nIn the pale glow of the moon, you notice a sinister line etched across the center of the stump. Around its edges, the words 'rock,' 'paper,' and 'scissors' encircle like an incantation carved by a malevolent hand. \n\nThe forest holds its breath as a chilling wind carries a haunting voice, 'Will you play the game?' it hisses, a spectral presence lurking in the shadows, beckoning you to partake in a sinister game that may seal your fate.You're not alone in this dreadful place. As you gather your wits, you realize that every rustling leaf, every distant caw of a crow, seems to be watching, waiting.\n\nThe choice is thrust upon you, and you're prompted to choose your weapon. Your decision carries weight, for it could mean the difference between salvation and something far more sinister.\n\nIf you hesitate or leave your choice empty, an unsettling alert reminds you of your vulnerability. The shadowy voice taunts, echoing in your mind, as if it knows your deepest fears.")

function playRockPaperScissors() {

    var choice = prompt("Choose your weapon");

    if (choice === "rock" || choice === "paper" || choice === "scissors") {

        console.log(choice);
    } else if (choice === "") {
        alert("please make a selection")
        playRockPaperScissors;
    } else {
        console.log(choice, " is not available");
        prompt('In the heart of this nightmare, a sense of dread washes over you like an icy tide. The chilling voice, hidden within the very shadows themselves, once again shatters the silence, its words carrying a malevolent tone that cuts through the night. \n\n"Fool,that weapon is not available without purchasing the DLC," it hisses, an eerie satisfaction coloring its utterance.'+" \n\nIt's as if the very darkness of the forest conspires with this malevolent presence, and the moonlight casts a ghastly glow upon the gnarled trees, turning them into grotesque specters.\n\n As you stand there, unarmed and vulnerable, you cannot help but feel the weight of the unknown horrors that await. The forest seems to close in around you, and every rustling leaf, every whispering branch, becomes a sinister harbinger of doom. The choices you make in this cursed place hold consequences that defy logic and reason, and the shadows seem to revel in your discomfort");
    }

    showMessage('Suddenly, a bone-chilling voice pierces the silence, sending shivers down your spine, "You have chosen the ' + choice + ', but will it be enough to face what lies ahead?" As those words hang in the air, a deafening growl resonates, and a snarling, blood-dripping beast emerges from the obscurity. The massive, clawed hands of the beast twitch with anticipation, ready to rend flesh from bone. \n\nYou have made your choice in this macabre showdown of Rock, Paper, Scissors. Now, it is time to see if your selection can fend off the evil that threatens to consume your very soul.\n\nThe air is thick with tension as the moonlight bathes you in an otherworldly glow. The stakes are higher than ever as you face off against the malevolent presence in this haunted forest.' + "\n\nThe outcome is uncertain, and the forest seems to hold its breath as the computer's choice is revealed. Will you emerge victorious, or will the darkness claim you? Your fate is intertwined with the eerie forces that dwell in this accursed place.")
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
        showMessage2("In the depths of the nightmare realm, you and the snarling, blood-dripping beast have been locked in a nightmarish duel for what feels like an eternity. Hours have passed, and neither of you shows signs of yielding. The creature's malevolent eyes burn with relentless determination, while your own resolve remains unbroken. \n\nThe voice that initiated this horrifying game lingers, a sinister spectator to your unending struggle." + '"Neither shall yield," it murmurs, its tone dripping with cold amusement. \n\nThe moon continues its ghostly vigil overhead as you and the beast continue your relentless battle. As the world around you fades into darkness, your struggle becomes a nightmarish symphony of ceaseless conflict, neither side emerging victorious. \n\nThis grim and relentless stalemate stretches on, an unending horror in the heart of the haunted forest.\n\nThe battle between your ' + choice + " and the enemy's " + PCChoice + " ends in a tie!");
    } else if (
        (choice === "rock" && PCChoice === "scissors") ||
        (choice === "paper" && PCChoice === "rock") ||
        (choice === "scissors" && PCChoice === "paper")
    ) {
        wins++;
        showMessage2("In this nightmarish realm, the battle between you and the snarling, blood-dripping beast rages on for what feels like an eternity. The malevolent eyes of the creature still gleam with relentless fury, and your own resolve is beginning to waver. \n\nThe voice, lurking in the shadows, finally speaks, its tone dripping with eerie anticipation." + '"You have triumphed," it murmurs, a chilling shiver coursing through the words. \n\nThe moonlight bathes you in an otherworldly glow as you emerge victorious from this gruesome showdown. But your victory is a double-edged sword, for you are left to ponder the sinister consequences of your conquest in this accursed forest. \n\nThe beast lies defeated, but the haunting presence in the woods remains, and what comes next is shrouded in an unsettling, ominous uncertainty.\n\nYou and your ' + choice + " are Victorious!");
    } else {
        losses++;
        showMessage2("In this nightmarish forest, the battle between you and the snarling, blood-dripping beast rages on for what feels like an eternity. The malevolent eyes of the creature still gleam with relentless fury, and your own resolve is beginning to waver.\n\nThe chilling voice, hidden within the shadows, finally breaks the silence, its words carrying a malevolent tone." + ' "The computer has triumphed," it hisses, an eerie satisfaction coloring its utterance. The moonlight casts a ghastly glow upon the forest, a sinister backdrop to your defeat. As the beast stands victorious, you cannot help but feel a creeping dread settle over you.\n\nThe eerie presence remains in the forest, and you wonder what dark fate awaits you now that the computer has claimed its sinister victory.\n\nYou have succumbed to your wounds from the ' + PCChoice + "!")
    }
    showGameStatus('Wins: ' + wins + ' | Ties: ' + ties + ' | Losses: ' + losses);
    showMessage3("Your journey in this nightmarish realm continues, and the secrets of the forest are far from revealed. As you contemplate your choices and the ominous uncertainty that surrounds you, one thing is clear—this forest holds more horrors than you ever imagined.\n\nThe game status updates, but the real game has just begun. Wins, ties, and losses are mere pieces of a puzzle in this twisted, Stephen King-esque tale where every choice leads you deeper into the darkness.")
    // Example of setting game status:
   

}

