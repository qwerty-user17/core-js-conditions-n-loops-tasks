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
  if (number >= 0) return true;
  return false;
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
  let x = a;
  if (a > b && a > c) {
    x = a;
  }
  if (b > a && b > c) {
    x = b;
  }
  if (c > a && c > b) {
    x = c;
  }
  return x;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 *
 * @param {Position} queen - The position of the queen.
 * @param {Position} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) return true;
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) return true;
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
  if (a <= 0 || b <= 0 || c <= 0) return false;
  if (a + b <= c || a + c <= b || b + c <= a) return false;
  return a === b || b === c || a === c;
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
/* const romDigits = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    11: 'XI',
    12: 'XII',
    13: 'XIII',
    14: 'XIV',
    15: 'XV',
    16: 'XVI',
    17: 'XVII',
    18: 'XVIII',
    19: 'XIX',
    20: 'XX',
    21: 'XXI',
    22: 'XXII',
    23: 'XXIII',
    24: 'XXIV',
    25: 'XXV',
    26: 'XXVI',
    27: 'XXVII',
    28: 'XXVIII',
    29: 'XXIX',
    30: 'XXX',
    31: 'XXXI',
    32: 'XXXII',
    33: 'XXXIII',
    34: 'XXXIV',
    35: 'XXXV',
    36: 'XXXVI',
    37: 'XXXVII',
    38: 'XXXVIII',
    39: 'XXXIX',
    40: 'XL',
  };
  const property = num;
  return romDigits[property]; */
function convertToRomanNumerals(num) {
  let result = '';

  const f = Math.floor(num / 10);
  const s = num % 10;

  if (f === 3) {
    result += 'XXX';
  } else if (f === 2) {
    result += 'XX';
  } else if (f === 1) {
    result += 'X';
  }

  if (s === 9) {
    result += 'IX';
  } else if (s >= 5) {
    result += 'V';
    for (let i = 0; i < s - 5; i += 1) {
      result += 'I';
    }
  } else if (s === 4) {
    result += 'IV';
  } else {
    for (let i = 0; i < s; i += 1) {
      result += 'I';
    }
  }

  return result;
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
  let space = false;

  for (let i = 0; i < numberStr.length; i += 1) {
    const ch = numberStr[i];
    let txt = '';

    switch (ch) {
      case '-':
        txt = 'minus';
        break;
      case '.':
      case ',':
        txt = 'point';
        break;
      case '0':
        txt = 'zero';
        break;
      case '1':
        txt = 'one';
        break;
      case '2':
        txt = 'two';
        break;
      case '3':
        txt = 'three';
        break;
      case '4':
        txt = 'four';
        break;
      case '5':
        txt = 'five';
        break;
      case '6':
        txt = 'six';
        break;
      case '7':
        txt = 'seven';
        break;
      case '8':
        txt = 'eight';
        break;
      case '9':
        txt = 'nine';
        break;
      default:
        txt = '';
    }

    if (txt) {
      if (space) {
        result += ' ';
      }
      result += txt;
      space = true;
    }
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
  let check = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    check += str[i];
  }
  return str === check;
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
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
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
  let n = Math.abs(num);

  while (n > 0) {
    const last = n % 10;
    if (last === digit) {
      return true;
    }
    n = Math.floor(n / 10);
  }

  return false;
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
  for (let i = 1; i < arr.length; i += 1) {
    let leftSum = 0;
    for (let j = i - 1; j >= 0; j -= 1) {
      leftSum += arr[j];
    }

    let rightSum = 0;
    for (let k = i + 1; k < arr.length; k += 1) {
      rightSum += arr[k];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
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
  const result = [];
  let counter = 1;
  let startCol = 0;
  let endCol = size - 1;
  let startRow = 0;
  let endRow = size - 1;

  for (let i = 0; i < size; i += 1) {
    result[i] = [];

    for (let j = 0; j < size; j += 1) {
      result[i][j] = 0;
    }
  }

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i += 1) {
      result[startRow][i] = counter;
      counter += 1;
    }
    startRow += 1;

    for (let j = startRow; j <= endRow; j += 1) {
      result[j][endCol] = counter;
      counter += 1;
    }
    endCol -= 1;

    for (let k = endCol; k >= startCol; k -= 1) {
      result[endRow][k] = counter;
      counter += 1;
    }
    endRow -= 1;

    for (let l = endRow; l >= startRow; l -= 1) {
      result[l][startCol] = counter;
      counter += 1;
    }
    startCol += 1;
  }

  return result;
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
  const n = matrix.length;
  const z = matrix;

  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      const temp = matrix[i][j];
      z[i][j] = matrix[j][i];
      z[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < Math.floor(n / 2); j += 1) {
      const temp = matrix[i][j];
      z[i][j] = matrix[i][n - 1 - j];
      z[i][n - 1 - j] = temp;
    }
  }

  return z;
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
  const z = arr;

  function quickSort(left, right) {
    if (left >= right) return;

    const pivot = arr[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
      while (arr[i] < pivot) i += 1;
      while (arr[j] > pivot) j -= 1;

      if (i <= j) {
        const temp = arr[i];
        z[i] = arr[j];
        z[j] = temp;
        i += 1;
        j -= 1;
      }
    }

    if (left < j) quickSort(left, j);
    if (i < right) quickSort(i, right);
  }

  quickSort(0, arr.length - 1);
  return z;
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
  if (!str || str.length < 2) {
    return str;
  }

  let result = str;
  const { length } = str;
  const seen = {};
  let cycleStart = 0;
  let cycleLength = 0;

  for (let i = 0; i < iterations; i += 1) {
    let even = '';
    let odd = '';

    for (let j = 0; j < length; j += 1) {
      if (j % 2 === 0) {
        even += result[j];
      } else {
        odd += result[j];
      }
    }

    result = even + odd;

    if (seen[result] !== undefined) {
      cycleStart = seen[result];
      cycleLength = i - cycleStart;
      const remaining = (iterations - i - 1) % cycleLength;
      for (let k = 0; k < remaining; k += 1) {
        let even2 = '';
        let odd2 = '';
        for (let l = 0; l < length; l += 1) {
          if (l % 2 === 0) {
            even2 += result[l];
          } else {
            odd2 += result[l];
          }
        }
        result = even2 + odd2;
      }
      break;
    }

    seen[result] = i;
  }

  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
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
 */
function getNearestBigger(number) {
  const digits = [];
  let temp = number;
  while (temp > 0) {
    digits.push(temp % 10);
    temp = Math.floor(temp / 10);
  }

  const len = digits.length;
  for (let i = 0; i < len / 2; i += 1) {
    const t = digits[i];
    digits[i] = digits[len - i - 1];
    digits[len - i - 1] = t;
  }

  let i = len - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i -= 1;
  }

  if (i < 0) {
    return number;
  }

  let j = len - 1;
  while (digits[j] <= digits[i]) {
    j -= 1;
  }

  const tempDigit = digits[i];
  digits[i] = digits[j];
  digits[j] = tempDigit;

  let start = i + 1;
  let end = len - 1;
  while (start < end) {
    const t2 = digits[start];
    digits[start] = digits[end];
    digits[end] = t2;
    start += 1;
    end -= 1;
  }

  let result = 0;
  for (let k = 0; k < len; k += 1) {
    result = result * 10 + digits[k];
  }

  return result;
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
