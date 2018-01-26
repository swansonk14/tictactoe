var gameOver = false;
var turn = 'x';

function setTurnText() {
    $('#game-info')[0].innerHTML = 'Player ' + turn + '\'s turn';
}

function changeTurns() {
    turn = (turn == 'x') ? 'o' : 'x';
    setTurnText();
}

function endGame(info) {
    gameOver = true;
    
    $('#game-info')[0].innerHTML = info;

    // Clear all boxes of cursor
    for (var row = 0; row <= 2; row++) {
        for (var col = 0; col <= 2; col++) {
            $('#board-' + row + '-' + col)[0].style.cursor = null;
        }
    }
}

function isWinner() {
    var board = [];

    // Get HTML for each box in board
    for (var row = 0; row <= 2; row++) {
        var boardRow = [];

        for (var col = 0; col <= 2; col++) {
            boardRow.push($('#board-' + row + '-' + col)[0].innerHTML);
        }

        board.push(boardRow);
    }

    // Check for winner
    console.log(board[0][0]);

    if (board[0][0] != '' && board[0][0] == board[0][1] && board[0][1] == board[0][2] ||
        board[1][0] != '' && board[1][0] == board[1][1] && board[1][1] == board[1][2] ||
        board[2][0] != '' && board[2][0] == board[2][1] && board[2][1] == board[2][2] ||
        board[0][0] != '' && board[0][0] == board[1][0] && board[1][0] == board[2][0] ||
        board[0][1] != '' && board[0][1] == board[1][1] && board[1][1] == board[2][1] ||
        board[0][2] != '' && board[0][2] == board[1][2] && board[1][2] == board[2][2] ||
        board[0][0] != '' && board[0][0] == board[1][1] && board[1][1] == board[2][2] ||
        board[2][0] != '' && board[2][0] == board[1][1] && board[1][1] == board[0][2]) {
        
        endGame('Player ' + turn + ' wins!');

        return true;
    }

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
    endGame('Tie game!');

    return true;
}

function takeTurn() {
    if (gameOver) {
        return;
    }

    var box = $(this)[0];

    if (box.innerHTML == '') {
        box.innerHTML = '<img src="images/' + turn + '.png" \>';
        box.style.cursor = null;
        console.log(box.style.cursor);

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
            var box = $('#board-' + row + '-' + col)[0];

            box.innerHTML = '';
            box.style.cursor = 'pointer';
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
