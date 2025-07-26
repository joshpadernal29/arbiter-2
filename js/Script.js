let currentPlayer = 1;
let player1Rank = null;
let player2Rank = null;
document.getElementById('turn').textContent = "Player 1's Turn";

function selectRank(rank) {
    if (currentPlayer === 1) {
        player1Rank = rank;
        document.getElementById('turn').textContent = "Player 2's Turn";
        currentPlayer = 2;
    } else {
        player2Rank = rank;
        determineWinner();
    }
}

function determineWinner() {
    const resultInput = document.querySelector('input[name="result"]');
    
    if (player1Rank > player2Rank) {
        resultInput.value = "Player 1 won!";
    } else if (player2Rank > player1Rank) {
        resultInput.value = "Player 2 won!";
    }   else if (player1Rank == 14 && player2Rank == 1) {
        resultInput.value = "Player 2 won!";
    } else if (player1Rank == 1 && player2Rank == 14) {
        resultInput.value = "Player 1 won!"
    } else {
        resultInput.value = "It's a draw! Please take both pieces of the board";
    }


    // Reset for next game
    resetGame();
}

function resetGame() {
    currentPlayer = 1;
    player1Rank = null;
    player2Rank = null;
    document.getElementById('turn').textContent = "Player 1's Turn";
}