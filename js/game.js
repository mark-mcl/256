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

Game.prototype.to_i = function() {
  var i_board = []
  for(var i = 0; i < this.board.length; i++){
    i_board.push(parseInt(this.board[i], 10));
  }
 return this.board = i_board;
}

Game.prototype.toString = function () {
  var board_array = this.board.split("");
  var nested = []
  for(var i = 0; i < board_array.length; i++){
    var sub_array = board_array.splice(0, 4)
    nested.push(sub_array.join(""));
  }
  return nested;
}

Game.prototype.move = function(direction){
 var row_array = this.to_i();
  //var row_array = this.toString();
  //console.log(row_array)
  if(direction === "right"){
    for(var i = 0; i <= 3; i++){
      var cell = row_array[i];
      console.log(cell)
      if(cell > 0){
        if(cell === row_array[i+1]){
          row_array[i+1] = cell + row_array[i+1];
          row_array[i] = 0;
          console.log(row_array)
        }

      }

      }
    }
    return row_array;
  }


// }
