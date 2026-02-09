// GameLoop.ts
// Handles the main game loop for the Number Guessing Game

import * as readline from 'readline';

/**
 * Starts the number guessing game loop.
 * @param randomNumber The number to guess
 * @param maxAttempts The maximum number of attempts allowed
 */
export function startGameLoop(randomNumber: number, maxAttempts: number): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let attempts = maxAttempts;

  function askGuess(): void {
    if (attempts === 0) {
      console.log(`Sorry, you have no more attempts. The number was ${randomNumber}.`);
      rl.close();
      return;
    }
    rl.question(`Enter your guess (${attempts} left): `, (answer: string) => {
      const guess = parseInt(answer, 10);
      if (isNaN(guess) || guess < 1 || guess > 20) {
        console.log('Please enter a valid number between 1 and 20.');
        askGuess();
        return;
      }
      if (guess === randomNumber) {
        console.log('Congratulations! You guessed the correct number!');
        rl.close();
      } else {
        attempts--;
        if (guess < randomNumber) {
          console.log('Too low!');
        } else {
          console.log('Too high!');
        }
        askGuess();
      }
    });
  }

  askGuess();
}
