/**
 *  Author: Peter Ampudia
 *  Created: 11/7/2023
 */

// Adds a button to each section of index.html
$(".minor-section").append("<button class='pageButton'>CLICK");
//$(".minor-section").append("<button class='secretButto'>Secret");

//Adds eventlisteners to all buttons
$(".pageButton").click(
    function () {
        $(this).parent().toggleClass("special");
    }
);

// $(".secretButto").click(
//     function () {
//         $(".minor-section").toggleClass("hidden");
//     }
// );