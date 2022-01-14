// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
      break;
    case 'Tropical Island':
      return 3;
      break;
    case 'All or Nothing':
      return 5;
      break;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */

const getWedges = (sizeOfLime) => {
  switch (sizeOfLime) {
    case 'small': 
      return 6;
      break;
    case 'medium':
      return 8;
      break;
    case 'large':
      return 10;
      break;
  }
}

export function limesToCut(wedgesNeeded, limes) {
  if (wedgesNeeded === 0) {
    return 0;
  } else {
    let wedgesAtHand = 0;
    let i = 0;
    while (i < limes.length) {
        wedgesAtHand += getWedges(limes[i]);

        if (wedgesAtHand >= wedgesNeeded) {
          break;
        }
        i++;
    }
    return (wedgesAtHand >= wedgesNeeded) ? i + 1 : i;
  }

  
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  throw new Error('Please implement the remainingOrders function');
}
