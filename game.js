let currentPlayer = 1;

$('.game-board > div').click(function(element) {
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

    
})