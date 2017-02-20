 # Music History Part 1:

## Individual Assignment

You will be building the basic structure of your Music History application in HTML and making it look good with the skills you learned in CSS.

Visit the [Music History mockup](https://moqups.com/chortlehoort/1E8LJX7r/) that I created. You will be recreating that document in your own HTML file.

### Criteria 

1. Create five options for the artist select element of any artist that you enjoy.
1. Create at least five options for the album select element. One, or more, album for each artist.
1. The links in the navigation bar don't need to link to anything just yet, you can use `<a href="#">View music</a>` for now
1. Pick your four favorite songs from the artists you have chosen and use the information for each in the list that's on the right-hand side. You can use `h1` tags, `div` tags, `section` tags... whatever you like.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Music History Part 2

Setup

Requirements

Use JavaScript arrays, loops, and innerHTML to show the music you love.

Students must use JavaScript to create a list of songs in the index.html file for their Music History project. Have them download the songs.js file, which contains an array of strings with song information.

Each student must add one song to the beginning and the end of the array.
Loop over the array and remove any words or characters that obviously don't belong.
Students must find and replace the > character in each item with a - character.
Must add each string to the DOM in index.html in the main content area.

{Song name} by {Artist} on the album {Album}
Merging your branch

After you've got all of the requirements completed, follow these steps.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Music History Part 3

Instructions

In the navigation bar, make sure you have two links labeled "List Music", and "Add Music".

Add a DOM element that contains some input fields for the user to enter in the name of a song, the artist for the song, and the album. You do not need to enclose them in a <form> element because we're not actually submitting this form anywhere.

Add a <button> element at the bottom of the input fields labeled "Add".
The input fields and the add button make up the Add Music View.

The existing view - the combination of the filter form and the song list - will be referred to as the List Music View.

The Add Music View should not appear when the user first visits your page. The song list with the corresponding filter form should be visible.

When the user clicks on "Add Music" in the navigation bar, the List Music View should be hidden, and the Add Music View should be shown (see example wireframe).

When the user clicks on "List Music" in the navigation bar, the Add Music View should be hidden, and the List Music View should be shown (see example wireframe).

Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

 Music History Part 4:

Part One:

Read from local JSON file with an XHR.
Loop over results and inject into Music History list view.
Add delete button DOM to each row and, when it is clicked, delete the entire row in the DOM.

Part Two:

Take your music and split it into two JSON file instead of them all living on one file.
Add a button at the bottom of your music list and label it "More >".
Load the songs from the first list and inject the DOM into the document as you've already done.
When the user clicks that button, load the songs from the second JSON file and append them to the bottom of the existing music, but before the More button.

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

Music History Part 5

Instructions:

Implement jQuery in your Music History code. Every innerHTML, getElementById, getElementByClassName, event listener and XHR request. Convert 'em all.
