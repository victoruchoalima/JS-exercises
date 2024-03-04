/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard. When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. */

let chessboard = "";
let size = 8;

for (let col = 1; col <= size; col++) {
  for (let line = 1; line <= size; line++) {
    // using nested loops one for columns one for lines
    if ((line + col) % 2 === 0) {
      chessboard = chessboard + "#";
    }
    if ((line + col) % 2 !== 0) {
      chessboard = chessboard + " ";
    }
  }
  chessboard = chessboard + "\n";
}
console.log(chessboard);
