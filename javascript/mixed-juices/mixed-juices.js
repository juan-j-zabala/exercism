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
      return 0.5
      break;
    case 'Energizer':
      return 1.5
      break
    case 'Green Garden':
      return 1.5
      break
    case 'Tropical Island':
      return 3
      break
    case 'All or Nothing':
      return 5
      break
    default:
      return 2.5
      break;
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
export function limesToCut(wedgesNeeded, limes) {
  let number_of_lime_to_cut = 0
  let i = 0
  const SMALL_LIME = 6
  const MEDIUM_LIME = 8
  const LARGE_LIME = 10

  while (number_of_lime_to_cut < wedgesNeeded) {
    switch (limes[i]) {
      case 'small':
        number_of_lime_to_cut += SMALL_LIME
        i++
        break;
      case 'medium':
        number_of_lime_to_cut += MEDIUM_LIME
        i++
        break
      case 'large':
        number_of_lime_to_cut += LARGE_LIME
        i++
        break
      default:
        return i
    }
  }
  // this code below do the same as the code up here 👆🏻 made with switch 
  // while (number_of_lime_to_cut < wedgesNeeded) {
  //   if (limes[i] === 'small') {
  //     number_of_lime_to_cut += SMALL_LIME
  //     i++
  //   }else if (limes[i] === 'medium') {
  //     number_of_lime_to_cut += MEDIUM_LIME
  //     i++
  //   }else if (limes[i] === 'large') {
  //     number_of_lime_to_cut += LARGE_LIME
  //     i++
  //   }else {
  //     return i
  //   }
  // }
  return i
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let i = 0
  let remaning_orders_couter = 0

  while (remaning_orders_couter < timeLeft) {
    switch (orders[i]) {
      case 'Pure Strawberry Joy':
        // return 0.5
        i++
        remaning_orders_couter += 0.5
        break;
      case 'Energizer':
      case 'Green Garden':
        // return 1.5
        i++
        remaning_orders_couter += 1.5
        break
        // return 1.5
        // i++
        // remaning_orders_couter += 1.5
        // break
      case 'Tropical Island':
        // return 3
        i++
        remaning_orders_couter += 3
        break
      case 'All or Nothing':
        // return 5
        i++
        remaning_orders_couter += 5
        break
      default:
        // return 2.5
        i++
        remaning_orders_couter += 2.5
        break;
    }
  }

  const REMANING_ORDERS = orders.slice(i)
  return REMANING_ORDERS
}
