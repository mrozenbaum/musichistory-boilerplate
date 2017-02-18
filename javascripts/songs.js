"use strict";
var songName = document.getElementById("songName");
var artistName = document.getElementById("artistName");
var albumName = document.getElementById("albumName");
var addButton = document.getElementById("addButton");

// recieving data from results.json 
var dataRequest = new XMLHttpRequest();

// recieving data from results-2.json
var dataRequest2 = new XMLHttpRequest();

// adding event listeners to results.json
dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed);

// adding event listeners to results2.json
dataRequest2.addEventListener("load", dataRequestComplete);
dataRequest2.addEventListener("error", dataRequestFailed);



// pushing array into html div
var songs = [];
// Adding new array to existing array
for (var i = 0; i < songs.length; i ++) {
  var artistList = document.getElementById("artistList");
  artistList.innerHTML += `<p>${songs[i]}</p>`;
};

// Add button for when user adds music to their list
addButton.addEventListener("click", function(event){
  songs.push(songName.value + " - By " + artistName.value + " on the album " + albumName.value);
  var artistList = document.getElementById("artistList");
  var moreButton = document.getElementById("moreButton");
  var newDiv = document.createElement("div");
  var newHtwo = document.createElement("h2");
  newHtwo.className = "musicAddedByUser";
  var newDeleteBtn = document.createElement("input");
  newDeleteBtn.setAttribute("type", "button");
  newDeleteBtn.setAttribute("value", "Delete");
  newDeleteBtn.className = "deleteButton";
  newDiv.append(newHtwo);
  newDiv.append(newDeleteBtn);
  artistList.append(newDiv);
  newHtwo.innerHTML += songs;
  // artistList.innerHTML = songs;
  artistList.insertBefore(newDiv, artistList.childNodes[0]);
});


// function to see if we have recieved data from results.json
function dataRequestComplete(event){
  console.log("We have songs!");
  var data = JSON.parse(event.target.responseText);
  console.log("songs", data);
  showData(data);
};

// function to see if the data request from results.json failed
function dataRequestFailed(event) {
  console.log("oops, an error has occured while transferring the file");
};


// function to display songs from results.json
function showData(data) {
var artistListDiv = document.getElementById("artistList");
for (song in data) {
  var artistData = ``;
  var artistItem = data[song];
  artistData += `<div><h2>${artistItem.Song} - By: ${artistItem.Artist} - on the album: ${artistItem.Album}</h2><input type="button" value="Delete" class="deleteButton"></div>`;
  artistListDiv.innerHTML += artistData;
  console.log(artistData);
}


/////////////////// -- MORE BUTTON --////////////////////////
artistListDiv.innerHTML += `<br><input type="button" value="More =>" class="moreButton">`;
};

// requesting data to load from results.json
dataRequest.open("GET", "javascripts/results.json");
dataRequest.send();// add it to the event loop


//////////////////-- DELETE BUTTON --////////////////////////////
document.addEventListener("click", function(event){
  console.log("event", event);
// when delete button is pressed, delete the whole song list  
if (event.target.className === "deleteButton") {
  event.target.parentElement.remove();
} 
});


// function to see if we have recieved data from results-2.json
function dataRequest2Complete(event){
  console.log("We have songs 2!");
  var data2 = JSON.parse(event.target.responseText);
  console.log("data2", data2);
  showData2(data2);
};

// function to see if the data request from results-2.json failed
function dataRequest2Failed(event) {
  console.log("oops, an error has occured while transferring the file");
};


// function to display songs from results-2.json
function showData2(data2) {
var artistListDiv = document.getElementById("artistList");
for (song in data2) {
  var artistData2 = ``;
  var artistItem2 = data2[song];
  artistData2 += `<div><h2>${artistItem2.Song} - By: ${artistItem2.Artist} - on the album: ${artistItem2.Album}</h2><input type="button" value="Delete" class="deleteButton"></div>`;
  artistListDiv.innerHTML += artistData2;
  console.log(artistData2);
}
};


// WHEN MORE-BUTTON IS PRESSED
document.addEventListener ("click", function(event) {
  console.log("event", event);
  // WITH THIS SPECIFIC CLASS NAME
  if (event.target.className === "moreButton") {
    console.log(event);
    // OPEN AND SEND THE XMLHttpRequest FROM RESULTS-2.JSON
    dataRequest2.open("GET", "javascripts/results-2.json");
    dataRequest2.send();
    // THIS VAR TAKES THE INFO FROM JSON FILE TWO
    var artistInfo2 = dataRequest2;
    console.log(artistInfo2);
    // AND ADDS IT TO THE ARTIST LIST
    var artistList = document.getElementById("artistList");
    artistList.append(artistInfo2.responseText);
    event.target.remove();
  }

});



