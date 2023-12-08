/**
 *  Author: Peter Ampudia
 *  Created: 12/5/2023
 */

// Makes quotes readable for html
function make_safe(str) {
    return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

function getStuff() {
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://xkcd.com/info.0.json",
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType: "json",
        // What do we do when the api call is successful
        //   all the action goes in here
        success: function (data) {
            var imageUrl = data.img;
            var title = data.title;
            title = make_safe(title);
            var alt = data.alt;
            alt = make_safe(alt);
            var comicNum = data.num;
            var html = `<div id="imageblock">
                <h2>${title}</h2>
                <img src="${imageUrl}" title="${alt}"><br>
                </div>`
            // console.log("My new html: \n", html);
            $("#output").html(html);

        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) {
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    })
}

getStuff();