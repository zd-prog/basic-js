/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let resultStr = '';

  if (options.hasOwnProperty("repeatTimes")) {
    const repeatTimes = options.repeatTimes;

    for (let i = 0; i < repeatTimes; i += 1) {
      repeat(i === repeatTimes - 1);
    }
  } else {
    repeat(true);
  }

  return resultStr;

  function repeat(lastRepeat) {
    resultStr += str;

    if (options.hasOwnProperty("addition")) {
      const addition = options.addition;;

      if (options.hasOwnProperty("additionRepeatTimes")) {
        const additionRepeatTimes = options.additionRepeatTimes;

        for (let i = 0; i < additionRepeatTimes; i += 1) {
          additionRepeat(addition, i === additionRepeatTimes - 1);
        }
      } else {
        additionRepeat(addition, true);
      }
    }

    if (lastRepeat)
      return;

    if (options.hasOwnProperty("separator")) {
      resultStr += options.separator;
    } else {
      resultStr += '+';
    }
  }

  function additionRepeat(addition, lastRepeat) {
    resultStr += addition;

    if (lastRepeat)
      return;

    if (options.hasOwnProperty("additionSeparator")) {
      resultStr += options.additionSeparator;
    } else {
      resultStr += '|';
    }
  }
}

module.exports = {
  repeater
};
