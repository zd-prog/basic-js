/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (str === "")
    return str;

  let currentLetter = str[0];
  let lettersCount = 1;
  let result = '';

  function updateResult() {
    result += lettersCount > 1 ? `${lettersCount}${currentLetter}` : currentLetter;
  }

  str = str.substring(1).split("");

  str.forEach(letter => {
    if (letter !== currentLetter) {
      updateResult();

      currentLetter = letter;
      lettersCount = 1;
    } else {
      lettersCount += 1;
    }
  });

  if (lettersCount != 0)
    updateResult();

  return result;
}

module.exports = {
  encodeLine
};
