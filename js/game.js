function Game (gameBoard = "0000202000000000") {
  this.boardArray = [gameBoard.split('').slice(0,4), gameBoard.split('').slice(4,8), gameBoard.split('').slice(8,12), gameBoard.split('').slice(12,16)];

};



Game.prototype.moveRight = function() {
  for (var row of this.boardArray) {
    console.log(row);
    for ( var i= row.length-1; i > 0; i--) {
      row[i] = move_tile(row, i);
    };
  };
};

function move_tile(row, i) {
  if (row[i] == "0" && (i != 0)) {
    return move_tile(row, i-1);
  } else {
    var value = row[i];
    row[i] = "0";
    return value;
  }
};

Game.prototype.mergeRight = function() {
  for (var row of this.boardArray) {
    if (row[0] === row[1] && row[2] === row[3]) {
      row[2] = (parseInt(row[0])*2).toString();
      row[3] = (parseInt(row[3])*2).toString();
      row[0] = "0";
      row[1] = "0";
    } else {
      for ( var i= 0; i < row.length; i++) {
        var j = (row.length - 1 - i);
        if (row[j] === row[j-1] && (j > 0)) {
          row[j-1] = "0";
          row[j] = (parseInt(row[j])*2).toString();
        } else if (row[j] === "0" && (j > 0)) {
          row[j] = row[j-1];
          row[j-1] = "0";
        };
    };
  };
};
};
