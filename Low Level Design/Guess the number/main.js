const inputNumber = document.getElementById("number-input");
const submitButton = document.getElementById("submit");
const reset = document.getElementById("reset");
const tempResult = document.querySelector(".temp-result");
const randomNumber = Math.floor(Math.random() * 101);
const guesses="";
const remainingGuess = document.getElementById("remainingGuess");
let maxGuesses = 10;
submitButton.addEventListener("click", ()=>{
    if(maxGuesses <= 0){
        tempResult.innerText = `Game Over! You've used all your guesses. The correct number was ${randomNumber}.`;
        tempResult.style.color="#F70F13";
        return;
    }
    const userGuess = parseInt(inputNumber.value);
    maxGuesses--;
    remainingGuess.innerText = `You have ${maxGuesses} guesses remaining.`;
    if(isNaN(userGuess) || userGuess < 0 || userGuess > 100){
        tempResult.innerText = "Please enter a valid number between 0 and 100.";
        tempResult.style.color="#F70F13";
        return;
    }
    else if(userGuess === randomNumber){
        tempResult.innerText = `Congratulations! You guessed the number ${randomNumber} correctly!`;
        tempResult.style.color="#0F9D58";
    }
    else if(userGuess < randomNumber){
        tempResult.innerText = `${userGuess} is too low! Try again.`;
        tempResult.style.color="#F70F13";
    }
    else{
        tempResult.innerText = `${userGuess} is too high! Try again.`;
        tempResult.style.color="#F70F13";
    }
});

reset.addEventListener("click", ()=>{
    inputNumber.value = "";
    tempResult.innerText = "";
    maxGuesses = 10;
});

