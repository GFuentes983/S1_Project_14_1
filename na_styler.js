"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Gabriel Fuentes
   Date: 4.2.19 

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
// Event Listener that runs the setStyles function when the page loads
window.addEventListener('load', setStyles);

// SetStyles function 
function setStyles() {
   // body...
   // styleNum is to return a random number 
   var styleNum = randInt(5);

   // Element node for the link element and setting its attributes
   // Element node parent for link link called 
   var link = document.createElement("link");
   link.setAttribute('rel', "stylesheet");
   link.setAttribute('id', "fancySheet");
   link.setAttribute('href', "na_style_" + styleNum + ".css");

   // Element node figBox that will have attributes and be appended to a div with the id box
   // Element node parent of figBox called divBox
   var divBox = document.getElementById('box');
   var figBox = document.createElement("figure");
   figBox.setAttribute("id", "styleThumbs");
   divBox.appendChild(figBox);

   for (var i = 0; i < 4; i++) {
      var sheetImg = document.createElement("img");
      sheetImg.setAttribute('src', 'na_small_' + [i] + '.png');
      sheetImg.addEventListener("click", function() {
         link.setAttribute('href', e.target.alt);
         figBox.appendChild(sheetImg);
      });
   }
}




// Parition -------------------------------------------------------------------
function randInt(size) {
   return Math.floor(size*Math.random());
}