/**
 *  Author: Peter Ampudia
 *  Created: 11/14/2023
 */

function makeRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 150;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
}

// Click button listener
$("#make-convo").click(function () {
    // Get fake dialogue
    const newText = makeRandomText();
    // Append a new div to the output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});