let score = JSON.parse(localStorage.getItem('score'));
if (!score) {
    score = {

        wins:0,
        losses:0,
        ties:0
    };
}
updateScore();

function playGame(playerMove){
    const computerMove=getComputerMove();
    result = '';
    if (playerMove === 'rock') {
        if(computerMove === 'rock'){
            result='Tie.';
        } else if (computerMove === 'paper'){
            result = 'You Lose.';
        } else if(computerMove === 'scissors'){
            result = 'You Win.';
        }
    }
    if (playerMove === 'paper') {
        if(computerMove === 'rock'){
            result= 'You Win.';
        }else if(computerMove === 'paper'){
            result = 'Tie.';
        }else if (computerMove === 'scissors'){
            result = 'You Lose.';
        }
    }
    if (playerMove === 'scissors'){
        if(computerMove === 'rock'){
            result='You Lose.';
        }else if (computerMove ==='paper'){
            result='You Win.';
        }else if (computerMove === 'scissors'){
            result= 'Tie.';
        }
    }
    if (result === 'Tie.'){
        score.ties+=1;
    } else if (result === 'You Win.'){
        score.wins+=1;
    } else if (result === 'You Lose.'){
        score.losses+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));
    updateScore();
    document.querySelector('.js-result').innerHTML=result;
    document.querySelector('.js-moves').innerHTML= `You <img src="images/${playerMove}-emoji.png" class="moves"> <img src="images/${computerMove}-emoji.png" class="moves"> Computer`;

}
function updateScore(){
    document.querySelector('.js-score').innerHTML=`Wins:${score.wins} Losses:${score.losses} Ties:${score.ties}`;
}
function getComputerMove() {
    const randomNum=Math.random();
    cpick='';
    if(randomNum>=0 && randomNum<1/3){
        cpick='rock';
    } else if (randomNum>=1/3 && randomNum<2/3){
        cpick='paper';
    } else if (randomNum >= 2/3 && randomNum<1){
        cpick='scissors';
    }
    return cpick;
}