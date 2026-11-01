/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const digits = n.split("-");

  function isNumber(char) {
    return char >= 48 && char <= 57;
  }

  function isLetter(char) {
    return char >= 65 && char <= 70;
  }

  for (let i = 0; i < digits.length; i += 1) {
    const d = digits[i];

    if (!isNumber(d.charCodeAt(0)) && !isLetter(d.charCodeAt(0)))
      return false;

    if (!isNumber(d.charCodeAt(1)) && !isLetter(d.charCodeAt(1)))
      return false;
  }

  return true;
}

module.exports = {
  isMAC48Address
};
