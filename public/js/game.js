var board = [['', '', ''], ['', '', ''], ['', '', '']];

$(document).ready(function() {
    for (var i = 0; i <= 2; i++) {
        for (var j = 0; j <= 2; j++) {
            console.log("board-" + i + "-" + j);
            var box = document.getElementById("board-" + i + "-" + j);
            console.log(box);
        }
    }
});
