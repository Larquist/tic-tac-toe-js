let currentPlayer = 'x';
let gameOver = false;
// In Tic Tac Toe, there are eight possible ways to win:
// Three in a row horizontally on the top row.
// Three in a row horizontally on the middle row.
// Three in a row horizontally on the bottom row.
// Three in a column on the left column.
// Three in a column on the middle column.
// Three in a column on the right column.
// Three in a diagonal from the top left to the bottom right.
// Three in a diagonal from the top right to the bottom left.
const winningCombos = [
    // [true,true, true, false,false,false, false,false,false],
    [0,1,2],
    // [false,false, false, true,true,true, false,false,false],
    [3,4,5],
    // [false,false, false, false,false,false, true,true,true],
    [6,7,8],
    // [true,false, false, true,false,false, true,false,false],
    [0,3,6],
    // [false,true, false, false,true,false, false,true,false],
    [1,4,7],
    // [false,false, true, false,false,true, false,false,true],
    [2,5,8],
    // [true,false, false, false,true,false, false,false,true],
    [0,4,8],
    // [false,false, true, false,true,false, true,false,false]
    [2,4,6]
]
let playerX = [false,false,false, false,false,false, false,false,false];
let playerO = [false,false,false, false,false,false, false,false,false];

restart();

$('.game-board > div').click(function(element) {
    if (!element.target.innerHTML && !gameOver) {
        // Set tile to player tile
        element.target.innerHTML = currentPlayer;

        checkWin(currentPlayer, function(won, winningCombo) {
            // Check for win
            if (won) {
                $('.player-turn').text('Player ' + currentPlayer.toUpperCase() + ' Wins!');
                gameOver = true
            } else {
                // Change turn to next player
                if (currentPlayer == 'x') {
                    currentPlayer = 'o';
                    $('.player-turn').text('Player O Turn');
                } else {
                    currentPlayer = 'x';
                    $('.player-turn').text('Player X Turn');
                }
            }
        })
    }
})

$('#restart-btn').click(function(){
    restart();
})

function checkWin(player, callback) {
    // player will be 'x' or 'o'
    
}

function restart() {
    currentPlayer = 1;
    gameOver = false;
    $('.player-turn').text('Player X to Start');
    $('.game-board > div').text('');
}