
var songName = document.getElementById("songName");
var artistName = document.getElementById("artistName");
var albumName = document.getElementById("albumName");
var addButton = document.getElementById("addButton");
// Array songs (Part 1)
var songs = [
"Legs > by Z*ZTop on the album Eliminator",
"The Logical Song > by Supertr@amp on the album Breakfast in America",
"Another Brick in the Wall > by Pink Floyd on the album The Wall",
"Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction",
"Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill"
]

songs.push("I Created Disco - By Calvin Harris on the album I Created Disco"); // adds this song to the end of the songs array
songs.unshift("Kashmir - By Led Zeppelin on the album Physical Graffiti"); // adds this song to the beginning of the songs array
for (var i = 0; i < songs.length; i ++) {
	console.log(songs[i]);	
};
// replacing typos in songs array (Part 2)
var newSongs = [ ];
for (var i = 0; i < songs.length; i ++) {
  songs[i] = songs[i].replace(">","-"); // replaces '>' with '-'
  songs[i] = songs[i].replace("*",""); // fixing typos
  songs[i] = songs[i].replace("@",""); // fixing typos
  songs[i] = songs[i].replace("(",""); // fixing typos
  songs[i] = songs[i].replace("!",""); // fixing typos
  newSongs.push(songs[i]); // pushing new array newSongs to original songs array
};
// Adding new array to existing array
for (var i = 0; i < songs.length; i ++) {
	var artistList = document.getElementById("artistList");
	artistList.innerHTML += `<p>${songs[i]}</p>`;
};

// Adding new song, artist, and album to an existing array (Part 3)
addButton.addEventListener("click", function (event){
  songs.push(songName.value + " - By " + artistName.value + " on the album " + albumName.value);
  console.log(songs);
  artistList.innerHTML += `<p>${songs[i]}</p>`;
});





