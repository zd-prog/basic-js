/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digits = String(n).split('').map(Number);

  return Math.max(...digits.map((_, i) => {
    let digitsCopy = digits.slice();
    digitsCopy.splice(i, 1);

    return Number(digitsCopy.join(''))
  }));
}

module.exports = {
  deleteDigit
};
