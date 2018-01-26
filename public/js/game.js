var board = [['', '', ''], ['', '', ''], ['', '', '']];
var turn = 'x';

function setTurnText() {
    $('#turn')[0].innerHTML = 'Player ' + turn + '\'s turn';
}

function changeTurns() {
    turn = (turn == 'x') ? 'o' : 'x';
    setTurnText();
}

function restartGame() {
    turn = 'x';
    setTurnText();

    for (var row = 0; row <= 2; row++) {
        for (var col = 0; col <= 2; col++) {
            $('boar-' + row + '-' + col)[0].innerHTML = '';
        }
    }
}

$(document).ready(function() {
    $('#restart').click(restartGame);

    // Set up click handlers for boxes
    for (var row = 0; row <= 2; row++) {
        for (var col = 0; col <= 2; col++) {
            $('#board-' + row + '-' + col).click(function () {
                var box = $(this)[0];

                if (box.innerHTML == '') {
                    box.innerHTML = '<img src="images/' + turn + '.png" \>';
                    changeTurns();
                }
            });
        }
    }

    restartGame();
});
