function computerPlay() {
    //make the computer return rock, paper or scissors
    let cpu = "";
    switch (Math.floor(Math.random()*3)) {
        case 0:
            cpu = "Rock";
            break;

        case 1:
            cpu = "Paper";
            break;
        case 2:
            cpu = "Scissors";
            break;
    }
    console.log(cpu)

}

function playRound(player, cpu) {
    //compare user input and computer input
    let cpuScore = 0;
    let playerScore = 0;
    if ((player.toUpperCase() != "ROCK") && (player.toUpperCase() != "PAPER") && (player.toUpperCase() != "SCISSORS")){
        console.log("Please select a proper option")
        playRound()
    } else {
        switch (player.toUpperCase()){
                case "ROCK":
                if (cpu == "Rock"){
                    console.log("The computer plays " + cpu + ", tie!");
                } else if (cpu == "Paper") {
                    console.log("The computer plays " + cpu + ", you lose!");
                    ++cpuScore;
                } else if (cpu == "Scissors") {
                    console.log("The computer plays " + cpu + ", you win!");
                    ++playerScore;
                }
                break;

                case "PAPER":
                    if (cpu == "Rock"){
                        console.log("The computer plays " + cpu + ", you win!");
                        ++playerScore;
                    } else if (cpu == "Paper") {
                        console.log("The computer plays " + cpu + ", tie!");
                    } else if (cpu == "Scissors") {
                        console.log("The computer plays " + cpu + ", you lose!");
                        ++cpuScore;
                    }
                    break;
                case "SCISSORS":
                    if (cpu == "Rock"){
                        console.log("The computer plays " + cpu + ", you lose!");
                        ++cpuScore;
                    } else if (cpu == "Paper") {
                        console.log("The computer plays " + cpu + ", you win!");
                        ++playerScore;
                    } else if (cpu == "Scissors") {
                        console.log("The computer plays " + cpu + ", tie!");
                    }
                    break;
                }
            return {
                cpuScore,
                playerScore
            };  
    }
// to do-> pass variable 
    }

function game() {
    //loop the game 5 times, keep track of the score
    let cpuScore = 0;
    let playerScore = 0;
    let x = 0;
    while (x<5) {
        let player = prompt("Please select rock, paper or scissors");
        if (player == null) {
            console.log("Please refresh and enter a value");
        } else {
            let cpu = computerPlay();
            playRound(player,cpu)
            let score = playRound();
            playerScore = playerScore + score.playerScore;
            cpuScore = cpuScore + score.cpuScore;
            console.log("The current score is:");
            console.log("You: " + playerScore + " wins");
            console.log("Computer: " + cpuScore + " wins")
        }
        ++x;
    }
    if (playerScore > cpuScore) {
        console.log("You win the game!")
    } else if (playerScore < cpuScore) {
        console.log("The computer wins the game!")
    } else if (playerScore == cpuScore) {
        console.log("It's a tie game!")
    }

    }

    game();
