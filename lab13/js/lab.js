/**
 *  Author: Peter Ampudia
 *  Created: 11/26/2023
 */

// 

var fullout = "";

function FizzBuzz(){
    for (var i = 1; i < 200; i++){
        var outputStr = " ";
        var num = i;

        if(i % 3 == 0){
            outputStr += "Fizz";
        }
        if(i % 5 == 0){
            outputStr += "Buzz";
        } 
        if(i % 7 == 0){
            outputStr += "Boom";
        }

        fullout += num + "" + outputStr + "<br>";
        $("#output").html(fullout);
    }

}


FizzBuzz();


