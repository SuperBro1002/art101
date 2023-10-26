/**
 * lab.js - Arrays and Objects
 * Author: Peter Ampudia
 * Date: 10/26/2023
 **/

// Define variables
myTransport = ["Honda CR-V", "bus"];

// Create object for my main ride
var myMainRide = {
  make: "Honda",
  model: "CR-V",
  color: "Grey",
  year: 2010,
  age: function () {
    return 2023 - this.year;
  }
}

// Output
document.writeln("I get around with my " + myTransport[0] + " and the " + myTransport[1] + ".<br>");

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");