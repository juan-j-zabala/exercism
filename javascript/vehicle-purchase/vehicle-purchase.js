// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  const CAR = "car"
  const TRUCK = "truck"
  // if (kind === CAR || kind === TRUCK ) {
  //   return true
  // }else {
  //   return false
  // }
  return kind === CAR || kind === TRUCK
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  const BETTER_OPTION = " is clearly the better choice."
  if (option1 < option2) {
    return option1 + BETTER_OPTION
  }else {
    return option2 + BETTER_OPTION
  }
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  const LESS_OR_OLD_THAN_3_YEARS = 3
  const MORE_THAN_10_YEARS = 10
  const DISCOUNT_80 = 0.80
  const DISCOUNT_50 = 0.50
  const DISCOUNT_70 = 0.70

  if (age < LESS_OR_OLD_THAN_3_YEARS) {
    return originalPrice * DISCOUNT_80
  }else if (age > MORE_THAN_10_YEARS) {
    return originalPrice * DISCOUNT_50 
  }else {
    return originalPrice * DISCOUNT_70
  }
}
