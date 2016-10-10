var Game = function(board){
  if(board){
    this.board = board;
  } else {
    var basic_boards = ['0000000000000024', '0000000000000022'];

    this.board = basic_boards.rand();
  }
}

Game.prototype.shuffle = function () {

    var a = this.board.split("");
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

Array.prototype.rand = function() {
   return this[~~(Math.random() * this.length)];
}
