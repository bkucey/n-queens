/**
 * A file to test n-queens with
 */

console.log(`Here is init(2):`); 
const board = init(2);
console.log(`${board}`);

console.log(`Trying addQueen`);
console.log(addQueen(board,0));