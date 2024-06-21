let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg')

const userScorePara = document.querySelector('#user-score');
const computerScorePara = document.querySelector("#computer-score");

const genCompChoice = function(){
    const options = ["rock", "paper", "scissors"];
    const randInx = Math.floor(Math.random()*3);
    return options[randInx];
}

const drowGame = function(){
     msg.innerHTML = "Game was Drow. play again"
     msg.style.backgroundColor = "#081b31"
}


const showWin = function(userWin, userChoice, compChoice){
    if(userWin){
        userScore++
        userScorePara.innerText = userScore;
        msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"

    } else {
        computerScore++
        computerScorePara.innerHTML = computerScore;
        msg.innerHTML = `You Lost! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGame = function(userChoice){
    //Generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //Drow Game
        drowGame();

    } else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper, scissors
            userWin = compChoice === "paper" ? false : true ;

        } else if (userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;

        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWin(userWin, userChoice, compChoice);
    }


}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id')
        playGame(userChoice);
    });
});


