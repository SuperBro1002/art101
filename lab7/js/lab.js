/**
 * Author: Peter Ampudia
 * Date: 10/31/2023
 */


// Takes an input from the user and sorts each letter alphabetically
function sortInput() {
    var userName = prompt("Input name:");
    var sortedArray = userName.split('').sort();

    return sortedArray.join('');
}

document.writeln("Here's your sorted name: ", sortInput(), "</br>");