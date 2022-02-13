// init board function 
const init = (n) => {
    var board = [];
    for( var row = 0; row < n; row++){
        thisRow = [];
        for( var column = 0; column < n; column++){
            thisRow +=['O'];
        }
        board.push( thisRow );
    }
    return board;
}

// addQueen(board, row) => {board, success}
const addQueen = (board, row) => {
    console.log(`calling addQueen with`);
    console.log(board);
    console.log(row);
    //base case : if there are no more rows, then board is done! 
    if(row >= board.length){
        return {board:board, success:true};
    }

    //try each column 
    for( var column = 0; column < board[row].length; column++){
        //if this spot works so far 
        //assume yes for now 
            //make a copy of the board 
            var newBoard = JSON.parse( JSON.stringify(board) );
            // add the new queen 
            newBoard[row][column] = 'X';
            //send that to addQueen(board, row+1)
            var {nextBoard,nextSuccess} = addQueen(newBoard,row+1);
            if(nextSuccess){
                return {board:nextBoard,success:true};
            }
    }
    // none of the columns on this row worked. Return false;       
    return {board:board, success:false};  
}