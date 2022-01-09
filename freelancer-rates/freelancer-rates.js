// @ts-check



/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export const dayRate = (ratePerHour) => ratePerHour*8;

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export const daysInBudget = (budget, ratePerHour) => Math.floor(budget / dayRate(ratePerHour));

/**
 * The monthly rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
 export const monthlyRate = (ratePerHour) => dayRate(ratePerHour) * 22;
 /**
 * Applies a discount amount to the total price
 *
 * @param {number} totalAmount
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} returns the totalAmount discounted
 */

 export const applyDiscount = (totalAmount, discount) => totalAmount - (totalAmount * discount);

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */

export const priceWithMonthlyDiscount = (ratePerHour, numDays, discount) => {
  const discountedMonthlyRate = applyDiscount(monthlyRate(ratePerHour), discount);
  const numberOfFullMonths = Math.floor(numDays / 22); 
  const fullMonthsPriceWithDiscount = numberOfFullMonths * discountedMonthlyRate;
  const remainingDays = numDays % 22; 
  return Math.ceil(fullMonthsPriceWithDiscount + (remainingDays * dayRate(ratePerHour)));
}