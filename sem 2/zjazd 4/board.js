const board = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""]
];

const figures = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "+", "-", "_"];

function getRandonBoard() {
  const newBoard = board.map( row =>  row.slice() );
  figures.map( figure => {
    fillField(figure, newBoard);
    fillField(figure, newBoard);
  })
  return newBoard;
}

function fillField(figure, board){
  let set = false;
  while(!set){
    const randX = Math.floor(Math.random() * board.length);
    const randY = Math.floor(Math.random() * board[0].length);
    if(board[randX][randY]===""){
      board[randX][randY] = figure;
      set = true;
    } 
  }
}

module.exports = {
  getRandonBoard
};