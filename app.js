/*
-- Player should guess number between min and max
--Player gets a certain amount of guesses
-- Notify player of guesses remaining
-- Let player to choose to play again

*/
 let min = 1,
     max = 10,
     winning_num = getRandomNum(min,max),
     guessesLeft = 3;

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

//Play Again event listener
game.addEventListener('mousedown',function(e)
{
    if(e.target.className === 'play-again')
    {
    window.location.reload();
    }

});

guessBtn.addEventListener('click',function()
{
    let guess = parseInt(guessInput.value);
   
    if(isNaN(guess)|| guess < min || guess > max )
    {
        setMessage(`Please enter a number between ${min} and ${max}`,'red');
    }

    // Check if it is winning number
    if(guess === winning_num)
    {
      gameOver(true,`${winning_num} is correct, YOU WIN!`);
    }
    else
    {
        guessesLeft -= 1
          
        if(guessesLeft === 0)
        {
         gameOver(false,`Game Over, you lost. The correct number was ${winning_num}`);
        }
        else
        {
            // Change the border color
            guessInput.style.borderColor = 'red';

            // Clear the input 

            guessInput.value = '';
            // Tell the user it is wrong number
             setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red');
        }
    }
    
})

function setMessage(msg,color)
{
    message.style.color = color;
    message.textContent = msg;
}
function gameOver(won,msg)
{
    let color;
    won === true ? color = 'green' : color = 'red';
     
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    
    // Set text color
    message.style.color = color;
    setMessage(msg);

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';

}

function getRandomNum(min,max)
{

return Math.floor(Math.random() * (max - min + 1) + min);
}

