"use strict";

$(document).ready(function() {

  var songs = [];

  // XHR request for song list #1
  $.ajax({
    url: "javascripts/results.json"
   }).done(function(data) {
      var data = JSON.parse(event.target.responseText);;
      // console.log("song list number one!", data);
      showData(data);
  }); 

  // Function for if song list #1 fails
  function dataRequestFailed(event) {
    console.log("data failed to load");
  };

  // Function to show song list #1
  function showData(data) {
    // Looping over the array
    for (songs in data) {
      var artistData = ``;
      var artistItem = data[songs];
      // Building up the DOM string
      artistData += 

        `<div>
          <h4><b>${artistItem.Song}</b> - By: ${artistItem.Artist} - on the album: ${artistItem.Album}
          </h4>
          <input type='button' value='Delete' class='deleteButton'>
        </div>`;

      // console.log("Artist Data #1:",artistData);
      // Attaching Array to DOM element
      $("#artistList").append(artistData);
    };

    // Adding more button to end of artist list
    $("#artistList").append(`<br><input type="button" value="More =>" class="moreButton">`);
    
    };

///////////////////////////////////////////////////////////

    // XHR request for song list #2
    $.ajax({
      url: "javascripts/results-2.json"
    }).done(function(data2) {
      var data2 = JSON.parse(event.target.responseText);
      // console.log("song list number two!", data2);
      showData2(data2);
  }); 

   // Function for if song list #2 fails
  function dataRequest2Failed(event) {
    console.log("data2 failed to load");
  }; 

  // Function to show list #2
  function showData2(data2) {
    // Looping over array #2
    for (songs in data2) {
      var artistData2 = ``;
      var artistItem2 = data2[songs];
      // Building up the DOM string
      artistData2 += 

        `<div>
          <h4><b>${artistItem2.Song}</b> - By: ${artistItem2.Artist} - on the album: ${artistItem2.Album}
          </h4>
          <input type="button" value="Delete" class="deleteButton">
        </div>`;

      // console.log("Artist Data number 2:", artistData2);

      // List #2 will only show when user pressed more-button
      var moreButton = $(".moreButton").click(function(event){
        if (event.target.className === "moreButton") {
          // console.log("more button clicked", moreButton);
          $("#artistList").append(artistData2);
          $("#artistList").append(`<br>`).append(moreButton);
        };

      });
    

    };

  };
      
});

