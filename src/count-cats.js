module.exports = function countCats(matrix) {
  let cats = 0;

  for (let a = 0; a < matrix.length; a++ ) {
    for (let b = 0; b < matrix[a].length; b++ ) {
      if (matrix[a][b] == '^^') {
        cats += 1;
        }
      }
  }


return cats;
};
