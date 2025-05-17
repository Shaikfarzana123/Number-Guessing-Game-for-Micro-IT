let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById('result').textContent = "🎉 Correct! You guessed it in " + attempts + " tries!";
    } else if (userGuess < randomNumber) {
        document.getElementById('result').textContent = "Too low. Try again!";
    } else if (userGuess > randomNumber) {
        document.getElementById('result').textContent = "Too high. Try again!";
    }

    document.getElementById('attempts').textContent = "Attempts: " + attempts;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('userGuess').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('attempts').textContent = '';
}
