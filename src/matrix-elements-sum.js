/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;

  const rows = matrix.length;
  const columns = matrix[0].length;

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
      if (i === 0) {
        sum += matrix[i][j];
      } else {
        const element = matrix[i - 1][j];

        if (element === null || element !== 0)
          sum += matrix[i][j];
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
