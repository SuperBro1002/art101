/**
 * Author: Peter Ampudia
 * Date: 10/31/2023
 */


var userName = prompt("Input name:");

// Takes an input from the user and sorts each letter alphabetically
function sortInput(input) {

    var sortedArray = input.split('').sort();

    return sortedArray.join('');
}

document.writeln("Here's your sorted name: ", sortInput(userName), "</br>");