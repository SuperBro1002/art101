/**
 *  Author: Peter Ampudia
 *  Created: 11/2/2023
 */

// Finds the square of a number. 
function sqr(x) {
    var results = x ** 2;
    return results;
}

// Tests function sqr(x).
console.log("4 squared: ", sqr(4));
console.log("8 squared: ", sqr(8));
console.log("16 squared: ", sqr(16));

var nums = [2, 77, 43, 9, 555, 28];
console.log("Array of numbers: ", nums);

var result = nums.map(sqr);
// Returns the square of every number in the array.
console.log("Square of all numbers in array: ", result);

var result = nums.map(function(x) {
    return Math.sqrt(x);
})

// Returns the sqrt of each number.
console.log("Squareroot of the array: ", result);