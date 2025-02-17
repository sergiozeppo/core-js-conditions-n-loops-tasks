/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  const result = number >= 0;
  return result;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max;
  if (a > b && a > c) max = a;
  else if (b > a && b > c) max = b;
  else max = c;
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let horizontal;
  let vertical;
  if (queen.y === king.y) {
    return true;
  }
  if (queen.x === king.x) {
    return true;
  }
  if (queen.x - king.x > 0) {
    horizontal = queen.x - king.x;
  } else horizontal = king.x - queen.x;
  if (queen.y - king.y > 0) {
    vertical = queen.y - king.y;
  } else vertical = king.y - queen.y;
  if (horizontal === vertical) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let result = false;
  function checkSumOfSide(first, second, third) {
    return first + second > third;
  }
  if (a > 0 && b > 0 && c > 0) {
    if (a === b) result = checkSumOfSide(a, b, c);
    if (b === c) result = checkSumOfSide(b, c, a);
    if (a === c) result = checkSumOfSide(a, c, b);
  }
  return result;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  const tens = ['', 'X', 'XX', 'XXX'];
  const lastDigit = num % 10;
  const firstDigit = (num - lastDigit) / 10;
  return tens[firstDigit] + ones[lastDigit];
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '1': {
        result += 'one';
        break;
      }
      case '2': {
        result += 'two';
        break;
      }
      case '3': {
        result += 'three';
        break;
      }
      case '4': {
        result += 'four';
        break;
      }
      case '5': {
        result += 'five';
        break;
      }
      case '6': {
        result += 'six';
        break;
      }
      case '7': {
        result += 'seven';
        break;
      }
      case '8': {
        result += 'eight';
        break;
      }
      case '9': {
        result += 'nine';
        break;
      }
      case '0': {
        result += 'zero';
        break;
      }
      case '-': {
        result += 'minus';
        break;
      }
      case ',':
      case '.': {
        result += 'point';
        break;
      }
      default: {
        break;
      }
    }
    if (i < numberStr.length - 1) result += ' ';
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let isPal = true;
  const arr = [...str];
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] !== arr[arr.length - 1 - i]) isPal = false;
  }
  return isPal;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let result = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) result = i;
  }
  return result;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let result = false;
  let descendingNum = num;
  while (descendingNum !== 0) {
    if (descendingNum % 10 === digit) {
      result = true;
      break;
    } else descendingNum = Math.trunc(descendingNum / 10);
  }
  return result;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let balanceIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    let prevSum = 0;
    let nextSum = 0;
    for (let h = 0; h < i; h += 1) {
      prevSum += arr[h];
    }
    for (let j = i + 1; j < arr.length; j += 1) {
      nextSum += arr[j];
    }
    if (prevSum === nextSum) {
      balanceIndex = i;
      break;
    }
  }
  return balanceIndex;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arrayCreate = [];
  for (let i = 0; i < size; i += 1) {
    arrayCreate[i] = [];
  }
  let r = 0;
  let c = 0;
  let rEnd = size - 1;
  let cEnd = size - 1;
  let counter = 1;
  while (c <= cEnd && r <= rEnd) {
    for (let i = c; i <= cEnd; i += 1) {
      arrayCreate[r][i] = counter;
      counter += 1;
    }
    r += 1;
    for (let i = r; i <= rEnd; i += 1) {
      arrayCreate[i][cEnd] = counter;
      counter += 1;
    }
    cEnd -= 1;
    for (let i = cEnd; i >= c; i -= 1) {
      arrayCreate[rEnd][i] = counter;
      counter += 1;
    }
    rEnd -= 1;
    for (let i = rEnd; i >= r; i -= 1) {
      arrayCreate[i][c] = counter;
      counter += 1;
    }
    c += 1;
  }
  return arrayCreate;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  let c = 0;
  let cEnd = matrix.length - 1;
  const result = matrix;
  while (c < cEnd) {
    for (let i = 0; i < cEnd - c; i += 1) {
      const r = c;
      const rEnd = cEnd;
      const temp = matrix[r][c + i];
      result[r][c + i] = matrix[rEnd - i][c];
      result[rEnd - i][c] = matrix[rEnd][cEnd - i];
      result[rEnd][cEnd - i] = matrix[r + i][cEnd];
      result[r + i][cEnd] = temp;
    }
    c += 1;
    cEnd -= 1;
  }
  return result;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const result = arr;
  if (arr.length < 1) {
    return arr;
  }
  const element = arr[arr.length - 1];
  const lessThanEl = [];
  const greatThanEl = [];
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] >= element) {
      greatThanEl[greatThanEl.length] = arr[i];
    } else {
      lessThanEl[lessThanEl.length] = arr[i];
    }
  }
  const sorted = [...sortByAsc(lessThanEl), element, ...sortByAsc(greatThanEl)];
  for (let i = 0; i < arr.length; i += 1) {
    result[i] = sorted[i];
  }
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let str1 = str;
  let left = '';
  let right = '';
  let steps = iterations;
  while (steps > 0) {
    for (let i = 0; i < str1.length; i += 1) {
      if ((i + 1) % 2 === 0) {
        right += str1[i];
      } else {
        left += str1[i];
      }
    }
    str1 = left + right;
    left = '';
    right = '';
    steps -= 1;
    if (str1 === str) {
      return shuffleChar(str, iterations % (iterations - steps));
    }
  }
  return str1;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const str = String(number);
  const result = [];
  const remainder = [];
  let indexOfMin;
  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (str[i] < str[i + 1]) {
      indexOfMin = i;
      break;
    }
  }
  for (let i = 0; i < indexOfMin; i += 1) {
    result.push(str[i]);
  }
  for (let i = indexOfMin + 1; i < str.length; i += 1) {
    remainder.push(str[i]);
  }
  remainder.sort();
  for (let i = 0; i < remainder.length; i += 1) {
    if (remainder[i] > str[indexOfMin]) {
      result.push(remainder[i]);
      remainder.splice(i, 1);
      break;
    }
  }
  remainder.push(str[indexOfMin]);
  remainder.sort();
  const output = Number(result.join('') + remainder.join(''));
  return output;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
