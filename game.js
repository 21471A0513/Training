// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 5;

function playGame() {
    while (attempts < maxAttempts) {
        // Get the user's guess
        const guess = parseInt(prompt(`Guess the number (between 1 and 100). You have ${maxAttempts - attempts} attempts remaining:`));

        // Check if the guess is valid
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Please enter a valid number between 1 and 100.");
            continue;
        }

        // Increment the number of attempts
        attempts++;

        // Check if the guess is correct
        if (guess === secretNumber) {
            alert(`Congratulations! You've guessed the number ${secretNumber} correctly in ${attempts} attempts!`);
            return; // End the game
        } else if (guess < secretNumber) {
            alert("Too low! Try guessing a higher number.");
        } else {
            alert("Too high! Try guessing a lower number.");
        }
    }

    // If the user runs out of attempts
    alert(`Sorry, you've run out of attempts. The correct number was ${secretNumber}.`);
}

// Start the game
playGame();
