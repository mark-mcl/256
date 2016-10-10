function Game (gameBoard = "0000202000000000") {
  this.boardArray = [gameBoard.split('').slice(0,4), gameBoard.split('').slice(4,8), gameBoard.split('').slice(8,12), gameBoard.split('').slice(12,16)];

};

function transpose(matrix){
    var newMatrix = [];
    for(var i = 0; i < matrix.length; i++){
        newMatrix.push([]);
    };
    for(var i = 0; i < matrix.length; i++){
        for(var j = 0; j < matrix.length; j++){
            newMatrix[j].push(matrix[i][j]);
        };
    };
    return(newMatrix);
};

Game.prototype.moveLeft = function() {
  for (var row of this.boardArray) {
    console.log(row);
    for ( var i= 0; i < row.length; i++) {
      row[i] = move_tile_left(row, i);
    };
  };
};

function move_tile_left(row, i) {
  if (row[i] == "0" && (i != 3)) {
    return move_tile_left(row, i+1);
  } else {
    var value = row[i];
    row[i] = "0";
    return value;
  }
};

Game.prototype.mergeLeft = function() {
  for (var row of this.boardArray) {
    if (row[0] === row[1] && row[2] === row[3]) {
      row[0] = (parseInt(row[0])*2).toString();
      row[1] = (parseInt(row[3])*2).toString();
      row[2] = "0";
      row[3] = "0";
    } else {
      for ( var i= 0; i < row.length; i++) {
        if (row[i] === row[i+1] && (i < row.length - 1)) {
          row[i+1] = "0";
          row[i] = (parseInt(row[i])*2).toString();
        } else if (row[i] === "0" && (i < row.length - 1)) {
          row[i] = row[i+1];
          row[i+1] = "0";
        };
    };
  };
};
};




Game.prototype.moveRight = function() {
  for (var row of this.boardArray) {
    console.log(row);
    for ( var i= row.length-1; i > 0; i--) {
      row[i] = move_tile_right(row, i);
    };
  };
};

function move_tile_right(row, i) {
  if (row[i] == "0" && (i != 0)) {
    return move_tile_right(row, i-1);
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

Game.prototype.moveDown = function() {
  this.boardArray = transpose(this.boardArray);
  this.moveRight();
  this.boardArray = transpose(this.boardArray);
};

Game.prototype.mergeDown = function() {
  this.boardArray = transpose(this.boardArray);
  this.mergeRight();
  this.boardArray = transpose(this.boardArray);
};

Game.prototype.moveUp = function() {
  this.boardArray = transpose(this.boardArray);
  this.moveLeft();
  this.boardArray = transpose(this.boardArray);
};

Game.prototype.mergeUp = function() {
  this.boardArray = transpose(this.boardArray);
  this.mergeLeft();
  this.boardArray = transpose(this.boardArray);
};

