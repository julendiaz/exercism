// @ts-check

// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Build a sign that includes both of the parameters.
 *
 * @param {string} occasion
 * @param {string} name
 *
 * @returns {string} template string combining both parameters
 */

export const buildSign = (occasion, name) => `Happy ${occasion} ${name}!`;

/**
 * Build a birthday sign that conditionally formats the return string.
 *
 * @param {number} age
 *
 * @returns {string} template string based on age
 */

export const buildBirthdaySign = (age) => { 
  let ageAdjective = age >= 50 ? 'mature' : 'young' ;
  return `Happy Birthday! What a ${ageAdjective} fellow you are.`
}

/**
 * Build a graduation sign that includes multiple lines.
 *
 * @param {string} name
 * @param {number} year
 *
 * @returns {string} multi-line template string
 */

export const graduationFor = (name, year) => {
  return `Congratulations ${name}!
Class of ${year}`;
}

/**
 * Determine cost based on each character of sign parameter that builds
 * the template string that includes the currency parameter.
 *
 * @param {string} sign
 * @param {string} currency
 *
 * @returns {string} cost to create the sign
 */

export const costOf = (sign, currency) => {
  return `Your sign costs ${20 + (sign.length) * 2}.00 ${currency}.`
}
