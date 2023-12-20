/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

// exercise 1
export function cookingStatus(parm) {
    if (parm === 0) {
        parm = 'Lasagna is done.'
    }else if (parm > 0) {
        parm = 'Not done, please wait.'
    }else {
        parm = 'You forgot to set the timer.'
    }
    return parm
}

// exercise 2
export function preparationTime(layers, timeperlayer = 2) {
    return layers.length * timeperlayer
}

// exercise 3
export function quantities (layers) {
    const GRAMS_OF_NOODLES = 50
    const LITERS_OF_SAUCE = 0.2
    const MOUNT_NOODLES = layers.filter(filterNoodle).length * GRAMS_OF_NOODLES
    const MOUNT_SAUCE = layers.filter(filterSauce).length * LITERS_OF_SAUCE
    
    return {noodles:MOUNT_NOODLES, sauce: MOUNT_SAUCE}
} 

const filterSauce = (value) => value === "sauce" 
const filterNoodle = (value) => value === "noodles"

// exercise 4
export function addSecretIngredient(friendsList, myList) {
    const SECRET_INGREDIENT = friendsList.slice(friendsList.length - 1)
    myList.push(SECRET_INGREDIENT[0])
}

// exercise 5
export function scaleRecipe(recipe, portions) {
    const RECEPIE_SCALED = {}
    for (const ingre in recipe) {
        RECEPIE_SCALED[ingre] = recipe[ingre] * (portions / 2) 
    }
    return RECEPIE_SCALED
}

