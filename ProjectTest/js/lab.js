//Authors - Henry Tripp Barrick 
// Used to style and animate Extinction Timeline final project
// Date: 11-15

//Variables
//using this since jQuery isn't connecting properly to the slider
var slider = document.getElementById("slider")

$("#content").click(function(){
    //console.log("I'm over here straight stro...")
})

// Code for getting data from the slider
slider.oninput = function(){
    //Changes input value of heading currently depending on the current value of the slider
    $("#heading").text(slider.value);
}

//Sidebar code
$("#anm1").click(function(){
    $("#anmDesc").html("<h3>California Condor</h3> <img class='animal-image' src='./img/condor.jpg'></br> <p>The California Condor became extinct in the wild in 1987, with lead poisoning and habitat loss being leading causes of death. <br> However, with efforts by the U.S. Fish and Wildlife Service, </p>");
})
$("#anm2").click(function(){
    $("#anmDesc").text("testing 2");
})
$("#anm3").click(function(){
    $("#anmDesc").text("testing 3");
})
$("#anm4").click(function(){
    $("#anmDesc").text("testing 4");
})


//Intro page code
$("#start").click(function () {
    document.getElementById('overlay').style.animation = "fade 2s linear";
   // $(".overlay").toggleClass("overlay");
    //$(".overlay").toggleClass("start");
    this.style.display='none';
});