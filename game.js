let currentPlayer = 1;

restart();

$('.game-board > div').click(function(element) {
    if (!element.target.innerHTML) {
        if (currentPlayer == 1) {
            element.target.innerHTML = 'x';
            currentPlayer = 2;
            $('.player-turn').text('Player 2 Turn (O)');
        }
        else {
            element.target.innerHTML = 'o';
            currentPlayer = 1;
            $('.player-turn').text('Player 1 Turn (X)');
        }
    }

    checkWin();
})

$('#restart-btn').click(function(){
    restart();
})

function checkWin(player) {
// In Tic Tac Toe, there are eight possible ways to win:

// Three in a row horizontally on the top row.
// Three in a row horizontally on the middle row.
// Three in a row horizontally on the bottom row.
// Three in a column on the left column.
// Three in a column on the middle column.
// Three in a column on the right column.
// Three in a diagonal from the top left to the bottom right.
// Three in a diagonal from the top right to the bottom left.

// Take the tiles for the current player (player)

}

function restart() {
    currentPlayer = 1;
    $('.player-turn').text('Player 1 to Start (X)');
    $('.game-board > div').text('');
}