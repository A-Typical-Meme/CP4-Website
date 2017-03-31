var playRound = function(player, comp) {
}
var compRandom = function(min, max) {
    return Math.random() * (3 - 1) + 1;
}
var compChoice = function() {
    if(computerChoiceInt === 1) {
        return computerChoiceInt = "Rock";
    }
    if(computerChoiceInt === 2) {
        return computerChoiceInt = "Paper";
    }
    if(computerChoiceInt === 3) {
        return computerChoiceInt = "Scissors";
    }
    else {
        return "Error";
    }
}

playerChoice = prompt("Enter your choice here(Rock, Paper or  Scissors): ")

console.log(computerChoiceInt = compRandom())

computerChoiceRes = compChoice()
