// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export const twoSum = (array1, array2) => Number(array1.join("")) + Number(array2.join(""));



const convertToArray = (num) => Array.from(String(num));

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */

export const luckyNumber = (value) => {
  const palindrome = convertToArray(value);
  return palindrome.join("") === palindrome.reverse().join("");
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export const errorMessage = (input) => {
  if (Number(input)) {
    return "";
  } else if (!input) {
    return "Required field";
  } else {
    return "Must be a number besides 0";
  }
}
