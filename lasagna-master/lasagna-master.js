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

export function cookingStatus(time) {
    return (time === 0) ? "Lasagna is done." 
        : (time > 0) ? "Not done, please wait."
        : "You forgot to set the timer.";
}

export const preparationTime = function (layers, timePerLayer = 2) {
    return layers.length * timePerLayer;
}

export const quantities = function (layers) {
    const quantitiesForMeal = {
        noodles: 0,
        sauce: 0
    }

    for (let i = 0; i < layers.length; i++) {
        switch (layers[i]) {
            case "noodles":
                quantitiesForMeal.noodles += 50;
                break;
            case "sauce":
                quantitiesForMeal.sauce += 0.2;
                break;
            default: 
                quantitiesForMeal.noodles += 0;
                break;
        }
    }

    return quantitiesForMeal;
}

export const addSecretIngredient = function (myFriendList, myList) { myList.push(myFriendList[myFriendList.length - 1]) };

export const scaleRecipe = function (recipe, portions) {
    const scaledRecipe = {};
    Object.entries(recipe).forEach(([key, value]) => {
        scaledRecipe[key] = (value / 2) * portions;
    })
    return scaledRecipe;
}