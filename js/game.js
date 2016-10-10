var Game = function(board){
  if(board){
    this.board = board;
  } else {
    var basic_boards = ['0000000000000024', '0000000000000022'];

    this.board = basic_boards.rand();
  }
}


Array.prototype.rand = function() {
   return this[~~(Math.random() * this.length)];
}


Game.prototype.to_i = function() {
  var i_board = []
  for(var i = 0; i < this.board.length; i++){
    i_board.push(parseInt(this.board[i], 10));
  }
  var n_board = []
   for(var i = 0; i < i_board.length; i++){
    n_board.push(i_board.splice(0,4));
  }
  return this.board = n_board;
}

Game.prototype.move = function(direction){
  this.to_i();
  if(direction === "right"){
    for(var x = 0; x <= 3; x++){
      for(var y = 0; y <=3; y++){
        if(this.board[x][y] === this.board[x][y+1] || this.board[x][y+1] === 0){
          this.board[x][y+1] = this.board[x][y] + this.board[x][y+1];
          this.board[x][y] = 0;
        }
      }
    }
  } else if(direction === "left"){
    for(var x = 0; x <= 3; x++){
      for(var y = 3; y >=0; y--){
        if(this.board[x][y] === this.board[x][y-1] || this.board[x][y-1] === 0){
          this.board[x][y-1] = this.board[x][y] + this.board[x][y-1];
          this.board[x][y] = 0;
        }
      }
    }
  } else if(direction === "up"){
    for(var y = 0; y <= 3; y++){
      for(var x = 3; x >=0; x--){
        debugger
        console.log(x)
        console.log(y)
        console.log(this.board)
        if(x > 0){
          if(this.board[x][y] === this.board[x-1][y]){
            this.board[x-1][y] = this.board[x][y] + this.board[x-1][y];
            this.board[x][y] = 0;
            debugger
          }
        // } else if(x === 0){

        }
      }
    }
  }

  return this.board;
}

///////////////////////////////////////////////////////////
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


Game.prototype.toString = function () {
 // var board_array = this.board.split("");
 var board_array = this.to_i();
  var nested = []
  for(var i = 0; i < board_array.length; i++){
    var sub_array = board_array.splice(0, 4)
    nested.push([sub_array.join("")]);
  }
  return nested;
}
//////////////////////////////////////////////////////////
