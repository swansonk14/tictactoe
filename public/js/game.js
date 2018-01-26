var gameOver = false;
var turn = 'x';

function setTurnText() {
    $('#game-info')[0].innerHTML = 'Player ' + turn + '\'s turn';
}

function changeTurns() {
    turn = (turn == 'x') ? 'o' : 'x';
    setTurnText();
}

function isWinner() {
    return false;
}

function isTie() {
    // Check if any boxes are still empty
    for (var row = 0; row <= 2; row++) {
        for (var col = 0; col <= 2; col++) {
            if ($('#board-' + row + '-' + col)[0].innerHTML == '') {
                return false;
            }
        }
    }

    // Game is tied
    $('#game-info')[0].innerHTML = 'Tie game!';
    gameOver = true;
    return true;
}

function takeTurn() {
    if (gameOver) {
        return;
    }

    var box = $(this)[0];

    if (box.innerHTML == '') {
        box.innerHTML = '<img src="images/' + turn + '.png" \>';

        if (!isWinner() && !isTie()) {
            changeTurns();
        }
    }
}

function restartGame() {
    gameOver = false;
    turn = 'x';
    setTurnText();

    // Remove x and o from boxes
    for (var row = 0; row <= 2; row++) {
        for (var col = 0; col <= 2; col++) {
            $('#board-' + row + '-' + col)[0].innerHTML = '';
        }
    }
}

$(document).ready(function() {
    $('#restart').click(restartGame);

    // Set up click handlers for boxes
    for (var row = 0; row <= 2; row++) {
        for (var col = 0; col <= 2; col++) {
            $('#board-' + row + '-' + col).click(takeTurn);
        }
    }

    restartGame();
});
