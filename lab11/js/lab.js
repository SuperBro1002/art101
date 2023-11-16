/**
 *  Author: Peter Ampudia
 *  Created: 11/16/2023
 */

// Sorts a string's characters in alphabetical order.
function sortString(inputString) {
    return inputString.split('').sort().join('');
}

// Button listener.
$("#submit").click(function(){
    // Get input field's value.
    const userName = $("#user-name").val();
    // Sort userName.
    var userNameSorted = sortString(userName);
    // Append new div to output div.
    $("#output").html("<div class='text'><p>" + userNameSorted + "</p></div>");
});