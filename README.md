# Game of Generals Arbiter

## Overview

**Game of Generals** is a two-player strategic board game where players maneuver army pieces to capture or eliminate the opponent's flag.  
This **digital arbiter** acts as an assistant in place of a human arbiter to ensure fair play and clear results.

---

## Game Description

- **Objective**:  
  Capture the opponent’s flag or move your own flag to the opponent’s end of the board.

- **Pieces**:  
  Each player controls 21 pieces:
  - 1 Flag
  - Generals (1–5 stars)
  - Colonels
  - Majors
  - Captains
  - Lieutenants
  - Sergeants
  - Privates
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

### Installation

```bash
git clone <repository-url>
Running the Game
Open the index.html file in your web browser.

The display will indicate "Player 1's Turn".

Players will take turns selecting ranks for their pieces during challenges.

The arbiter calculates and displays the winner.

Click the RESET button to clear results and start over.

File Structure
bash
Copy
Edit
/game-of-generals-arbiter
│
├── index.html        # Main HTML file
├── css/
│   └── style.css     # Styles for the arbiter
└── js/
    └── Script.js     # JavaScript logic for gameplay
Game Logic
Rank values are compared using predefined numeric hierarchy.

Special interactions like Spy vs Private and equal ranks are handled.

Winner results are shown dynamically once both players have selected.

Contribution
Contributions are welcome!
Feel free to fork the repository and submit a pull request with improvements or features.

License
This project is licensed under the MIT License.

Acknowledgements
Developed to enhance the experience of playing Game of Generals.

Inspired by the traditional board game created in the Philippines.
