/**
 *  Author: Peter Ampudia
 *  Created: 11/7/2023
 */

// Adds buttons to each section of index.html
$("#Challenges").append("<button id='pageButton'>CLICK");
$("#Problems").append("<button id='pageButton2'>CLICK ME");
$("#Results").append("<button id='pageButton3'>CLICK HERE!");

//Adds eventlisteners to buttons
$("#pageButton").click(
    function () {
        $("#Challenges").css("background-color", "green");
    }
);

$("#pageButton2").click(
    function () {
        $("#Problems").css("background-color", "blue");
    }
);

$("#pageButton3").click(
    function () {
        $("#Results").css("background-color", "red");
    }
);