# Slot Machine Game - ReadMe

## Overview

This is a simple command-line based slot machine game implemented in JavaScript. The game allows the player to deposit money, place bets on a number of lines (up to 3), spin the reels, and check if they win based on symbols matching across lines. Players can continue playing until they run out of money or choose to stop.

## Features

- Deposit money before starting the game.
- Place bets on 1 to 3 lines.
- Spin the slot machine and generate random symbols.
- Check winnings based on the symbols and payout values.
- Continue playing as long as there is money left or the player chooses to stop.

## Game Logic

1. **Deposit**: Players start by depositing money into their balance.
2. **Betting**: Players decide how many lines to bet on (1-3) and how much to bet per line.
3. **Spinning**: The slot machine has 3 rows and 3 columns. Symbols are randomly selected for each reel.
4. **Winning**: If all the symbols in a line match, the player wins. The payout is based on the symbol and the amount bet.
5. **End Game**: The game ends when the player runs out of money or decides not to continue.

## Symbols

The game has 4 symbols, each with a different frequency of appearance and payout value:

- **A**: Appears 2 times, value = 5
- **B**: Appears 4 times, value = 4
- **C**: Appears 6 times, value = 3
- **D**: Appears 8 times, value = 2

## Functions

### 1. `deposit()`
- Prompts the user to enter an amount to deposit.
- Validates that the input is a positive number.

### 2. `getNumberOfLines()`
- Prompts the user to choose the number of lines to bet on (between 1 and 3).
- Validates that the input is a number between 1 and 3.

### 3. `getBet(balance, lines)`
- Prompts the user to place a bet per line.
- Validates that the bet is a positive number and does not exceed the player's balance divided by the number of lines.

### 4. `spin()`
- Randomly generates symbols for each reel based on predefined frequencies.

### 5. `transpose(reels)`
- Transposes the reels into rows for easier evaluation of results.

### 6. `printRows(rows)`
- Prints the rows of symbols generated after a spin.

### 7. `getWinnings(rows, bet, lines)`
- Calculates the player's winnings based on matching symbols on each line.

### 8. `game()`
- Main game loop that runs the game.
- Handles balance updates, spins, and checks if the player wants to continue or end the game.

## How to Run

1. Install the prompt-sync library using:
   ```
   npm install prompt-sync
   ```

2. Run the game:
   ```
   node slotMachine.js
   ```

3. Follow the prompts to deposit money, place bets, and spin the reels.

## Example Playthrough

- **Deposit**: $100
- **Choose Lines**: 3 lines
- **Place Bet**: $10 per line
- **Spin**: Reels spin and symbols appear on 3 lines.
- **Winnings**: If a line has matching symbols, the player wins based on the payout for that symbol.
- **Play Again**: The player can choose to keep playing or stop the game.

## Notes

- Ensure you have enough balance to place the bet on all chosen lines.
- The game will end if the balance reaches zero.
- You can play multiple rounds as long as you have balance remaining.

Enjoy the game!
