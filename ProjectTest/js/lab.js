//Authors - Henry Tripp Barrick 
// Used to style and animate Extinction Timeline final project
// Date: 11-15

//Variables
//using this since jQuery isn't connecting properly to the slider
var slider = document.getElementById("slider");
var sliderYear =  0;

// Code for getting data from the slider
slider.oninput = function(){
    //Changes input value of heading currently depending on the current value of the slider
    sliderYear = slider.value;

    if (sliderYear == 0) {
        $(".highlight").css({opacity: "0%"});
        $("#anm1Y1").css({opacity: "100%"});
    }
    else if (sliderYear == 1) {
        $(".highlight").css({opacity: "0%"});
        $("#anm1Y2").css({opacity: "100%"});
    }
    else if (sliderYear == 2) {
        $(".highlight").css({opacity: "0%"});
        $("#anm1Y3").css({opacity: "100%"});
    }
    else if (sliderYear == 3) {
        $(".highlight").css({opacity: "0%"});
        $("#anm1Y4").css({opacity: "100%"});
    }
    else if (sliderYear == 4) {
        $(".highlight").css({opacity: "0%"});
        $("#anm1Y5").css({opacity: "100%"});
    }
}

//Sidebar code
$("#mySidenav").click(function(){
    $("#infoText").css({opacity: "100%"});
    var sideAnim = anime({
        targets: '#infoText',
        translateX: -450,
        duration: 100,
        easing: 'linear'
    });
})

$("#anm1").click(function(){ 
    $(".highlight").css({opacity: "0%"});
    $("#anm1Y5").css({opacity: "100%"});
    $("#anmDesc").html("<h3>California Condor</h3> <p>Scientific Name: <img class='animal-image' src='./img/condor.jpg'></br> <p>The California Condor became extinct in the wild in 1987 (with only 22 in captivity), with lead poisoning and habitat loss being leading causes of death.<br><br>However, with recovery efforts of the U.S. Fish and Wildlife Service, the number of California Condors has since increased to over 500 as of 2023.</p>");
})  
$("#anm2").click(function(){
    $(".highlight").css({opacity: "0%"});
    $("#anmDesc").html("<h3>Gray Wolf</h3> <p>As a species native to California, the Gray Wolf had disappeared from the state in the 1920s. In 2014, the species was listed as endangered, with possible causes being human activity such as hunting.<br><br>Just recently in 2022, Gray Wolves have returned back to California on their own.</p>");
})
$("#anm3").click(function(){
    $(".highlight").css({opacity: "0%"});
    $("#anmDesc").html("<h3>San Joaquin Kit Fox</h3> <p>The San Joaquin Kit Fox has been threatened with habitat loss and the use of pesticides, and was listed as endangered in 1967.</p>");
})
$("#anm4").click(function(){
    $(".highlight").css({opacity: "0%"});
    $("#anmDesc").html("<h3>Franklin's Bumblebee</h3> <p>The Franklins' Bumblebee has not been seen since 2006, and is a critically endangered species. It lives in an area in a 13,000 square mile area in Northern California and Southern Oregon.</p>");
})

$("#anm5").click(function(){
    $(".highlight").css({opacity: "0%"});
    $("#anmDesc").html("<h3>Lionfish</h3> <p>Invasive in the </p>");
})

$("#anm6").click(function(){
    $(".highlight").css({opacity: "0%"});
    $("#anmDesc").html("<h3>Zebra Mussel</h3> <p>Invasive in the </p>");
})

//Intro page code
$(".start").click(function () {
    document.getElementById('overlay').style.animation = "fade 1s linear";
    
    function hideIntro(){
        $("#overlay").hide(); 
    }

    setTimeout(hideIntro, 970);
});