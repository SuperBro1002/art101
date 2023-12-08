/**
 *  Author: Peter Ampudia
 *  Created: 11/30/2023
 */

// 

$("#activate").click(function () {
    $.ajax({
        // URL for endpoint
        url: "http://www.yerkee.com/api/fortune/wisdom",

        type: "GET",

        dataType: "json",

        success: function (data) {
            console.log(data);
            var info = data.fortune;
            $("#output").append("<p>" + info);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }

    })
});

$("#APOD").click(function(){
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod?api_key=RgNBs4TjYNVjwPSQLLvkMtIj4zOflKWVB3TikTry",
        
        type: "GET",

        dataType: "json",

        success: function (data) {
            console.log(data);
            var outputInfo = "<p>" + data.explanation;
            var outputImg = "<p> <img id='APODIMG' src=" + data.url + ">";
            $("#output2").append(outputImg + outputInfo);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error: ", textStatus, errorThrown);
        }

    })
});