game = new Game;
$(document).ready(function() {
  Mousetrap.bind('up', function() {
    game.moveMergeUp();
    console.log(game.boardArray);
  });
  Mousetrap.bind('down', function() {
    game.moveMergeDown();
    console.log(game.boardArray);
  });
  Mousetrap.bind('left', function() {
    game.moveMergeLeft();
    console.log(game.boardArray);
  });
  Mousetrap.bind('right', function() {
    game.moveMergeRight();
    console.log(game.boardArray);
  });
});
