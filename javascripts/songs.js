"use strict";


$(document).ready(function(){

  var userSongs = [];
  var moreButton = $(".moreButton");
  var artistList = $("#artistList");
  var deleteButton = $(".deleteButton");

  // Loop for user to add songs
  for (var i = 0; i < userSongs.length; i ++) {
    var userList = $("#artistList");
    $("#artistList").html(`<p>${userSongs[i]}</p>`);
  };

  // Add button for user to add songs to artist list
  $("#addButton").click(function(event){
    console.log(event);
    userSongs = ("<b>" + songName.value + "</b>" + " - By: " + artistName.value + " - on the album: " + albumName.value);
    // Div to hold user songs
    $("<div class='musicAddedByUserDiv'/>").appendTo("#artistList");
    // h4 to hold the actual artist info added by user
    $("<h4 class='musicAddedByUserH4'/>").appendTo(".musicAddedByUserDiv").html(userSongs);
    // Creating delete button and attaching it to div
    $("<input class='deleteButton'/>").attr({ 
      type: "button",
      value: "Delete" }).appendTo(".musicAddedByUserDiv");
    // More button needs to be moved to after user songs have been added
    $("#artistList").append("<br>");
    $(".moreButton").insertAfter(artistList);
  
  });

  // Delete button function
  $(document).click(function(event){
    console.log("delete button clicked", event);
    // Deletes specific song, artist, and album that user clicks on
    if (event.target.className === "deleteButton") {
      event.target.parentElement.remove();
    }

  });

});

