/**
 *  Author: Peter Ampudia
 *  Created: 11/23/2023
 */

// Sorts you into a house
function sortingHat(str) {
    len = str.length;
    mod = len % 4;

    if (mod == 0) {
        return "Gryffindor";
    }
    else if (mod == 1) {
        return "Ravenclaw";
    }
    else if (mod == 2) {
        return "Hufflepuff";
    }
    else {
        return "Slytherin";
    }
}

var button = document.getElementById("button");
button.addEventListener("click", function(){
    var name = document.getElementById("input").value;
    var house = sortingHat(name);

    newText = "<p>The sorting hat has decided you are " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
});