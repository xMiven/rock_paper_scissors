function computerPlay() {
    //make the computer return rock, paper or scissors
    let cpu = "";
    switch (Math.floor(Math.random() * 3)) {
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

    return cpu;
}

function playRound(player, cpu) {
    //compare user input and computer input
    console.log(player);
    switch (player.toUpperCase()) {
        case "ROCK":
            if (cpu == "Rock") {
                console.log("The computer plays " + cpu + ", tie!");
            } else if (cpu == "Paper") {
                console.log("The computer plays " + cpu + ", you lose!");
                ++cpu;
            } else if (cpu == "Scissors") {
                console.log("The computer plays " + cpu + ", you win!");
                ++player;
            }
            break;

        case "PAPER":
            if (cpu == "Rock") {
                console.log("The computer plays " + cpu + ", you win!");
                ++player;
            } else if (cpu == "Paper") {
                console.log("The computer plays " + cpu + ", tie!");
            } else if (cpu == "Scissors") {
                console.log("The computer plays " + cpu + ", you lose!");
                ++cpu;
            }
            break;
        case "SCISSORS":
            if (cpu == "Rock") {
                console.log("The computer plays " + cpu + ", you lose!");
                ++cpu;
            } else if (cpu == "Paper") {
                console.log("The computer plays " + cpu + ", you win!");
                ++player;
            } else if (cpu == "Scissors") {
                console.log("The computer plays " + cpu + ", tie!");
            }
            break;
    }
    return [cpu, player];

    // to do-> pass variable 
}

function validateInput(player) {
    let options = ["ROCK","PAPER","SCISSORS"];
    return (player != null && player != undefined && options.includes(player.toUpperCase())) ? false : true;
}

function game(rounds) {
    //loop the game 5 times, keep track of the score
    for (i=0; i < rounds; i++) {
        let cpu = computerPlay();
        let player= "";
        let isWrong = true;
        while (isWrong) {
            player = prompt("Please select rock, paper or scissors");
            isWrong = validateInput(player);
        }

        let score = playRound(player, cpu);
        console.log("The current score is:");
        console.log(`You: ${player} wins`);
        console.log(`Computer: ${cpu} wins`);
    }
    if (player > cpu) {
        console.log("You win the game!");
    } else if (player < cpu) {
        console.log("The computer wins the game!");
    } else if (player == cpu) {
        console.log("It's a tie game!");
    }

}

let cpu = 0;
let player = 0;

game(5);
