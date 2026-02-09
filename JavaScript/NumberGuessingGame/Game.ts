// Game.ts
// Entry point for the Number Guessing Game using Node.js and TypeScript

import { startGameLoop } from './GameLoop';

/**
 * Generates a random integer between min and max (inclusive).
 * @param min Minimum value
 * @param max Maximum value
 * @returns Random integer between min and max
 */
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber: number = getRandomInt(1, 20);
const maxAttempts: number = 3;

console.log('Welcome to the Number Guessing Game!');
console.log('I have selected a number between 1 and 20.');
console.log(`You have ${maxAttempts} attempts to guess it. Good luck!`);

startGameLoop(randomNumber, maxAttempts);
