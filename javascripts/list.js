"use strict";

// Functions for links in nav bar
$(document).ready(function(){

  var listLink = $("#link-list");
  var listView = $("#list-view");
  var addLink = $("#link-add");
  var addView = $("#add-view"); 
  // LIST MUSIC VIEW
  listLink.click(function(event){
    listView.removeClass("hidden");
    addView.addClass("hidden");
  });
  // ADD MUSIC FORM
  addLink.click(function(event){
    listView.addClass("hidden");
    addView.removeClass("hidden");
  });

});
