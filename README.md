# Game of Generals Arbiter

## Overview

**Game of Generals** is a two-player strategic board game where players maneuver army pieces to capture or eliminate the opponent's flag.  
This **digital arbiter** acts as an assistant in place of a human arbiter to ensure fair play and clear results.

---

## Game Description

- **Objective**:  
  Capture the opponent’s flag or move your own flag to the opponent’s end of the board.

- **Pieces**:  
  Each player controls 21 pieces with the following ranks:
  - Flag
  - 5 Star Generals
  - 4 Star General
  - 3 Star General
  - 2 Star General
  - 1 Star General
  - Colonel
  - Lieutenant Colonel
  - Major
  - Captain
  - 1st Lieutenant
  - 2nd Lieutenant
  - Sergeant
  - Private
  - 2 Spies

- **Board**:  
  A 9x8 grid. Each player controls the first 3 rows on their side.

- **Movement**:  
  Pieces move 1 square forward, backward, or sideways. No diagonal movement.

- **Challenges**:  
  When a piece moves onto an opponent’s occupied square, a challenge occurs. The higher-ranking piece wins. If equal rank, both are eliminated.

- **Special Rules**:
  - **Spy**: Can eliminate any piece **except** the Private.
  - **Private**: Can be eliminated by almost all pieces but defeats the Spy.

- **End of Game**:  
  The game ends when a flag is captured or reaches the opponent’s final row.

---

## Features

- ✅ Turn-based gameplay: alternates between Player 1 and Player 2  
- ✅ Rank selection interface for each player  
- ✅ Automatic winner calculation after challenge  
- ✅ Reset functionality for new game rounds  

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, etc.)
- (Optional) Basic understanding of Game of Generals rules

## Running the Game
1. Open the index.html file in your web browser.

2. The display will indicate "Player 1's Turn".

3. Players will take turns selecting ranks for their pieces during challenges.

4. The arbiter calculates and displays the winner.

4. Click the RESET button to clear results and start over.

## Game Logic
* Rank values are compared using a predefined numeric hierarchy.

* Special interactions, such as Spy vs Private and equal ranks, are properly handled.

* Winner results are dynamically displayed once both players have made their selections.


## Acknowledgements
* Developed to enhance the experience of playing Game of Generals.

* Inspired by the traditional board game created in the Philippines.
