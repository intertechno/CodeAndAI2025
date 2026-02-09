// GameLoop.test.ts
// Unit tests for the Number Guessing Game using Jest

import { startGameLoop } from './GameLoop';

// Since startGameLoop interacts with stdin/stdout, we will test the logic by extracting and testing helper functions.
// For demonstration, let's test a helper function for random number generation and input validation.

/**
 * Helper to generate a random integer between min and max (inclusive).
 */
export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe('getRandomInt', () => {
  it('should generate a number within the range', () => {
    for (let i = 0; i < 100; i++) {
      const num = getRandomInt(1, 20);
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(20);
    }
  });
});

/**
 * Helper to validate user input for the guessing game.
 */
export function isValidGuess(input: string): boolean {
  const guess = parseInt(input, 10);
  return !isNaN(guess) && guess >= 1 && guess <= 20;
}

describe('isValidGuess', () => {
  it('should return true for valid guesses', () => {
    expect(isValidGuess('1')).toBe(true);
    expect(isValidGuess('20')).toBe(true);
    expect(isValidGuess('10')).toBe(true);
  });
  it('should return false for invalid guesses', () => {
    expect(isValidGuess('0')).toBe(false);
    expect(isValidGuess('21')).toBe(false);
    expect(isValidGuess('abc')).toBe(false);
    expect(isValidGuess('')).toBe(false);
  });
});
