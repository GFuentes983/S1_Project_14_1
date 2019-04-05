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
window.onload = setStyles;

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
   document.head.appendChild(link);

   // Element node figBox that will have attributes and be appended to a div with the id box
   // Element node parent of figBox called divBox
   var divBox = document.getElementById('box');
   var figBox = document.createElement("figure");
   figBox.setAttribute("id", "styleThumbs");
   divBox.appendChild(figBox);

   // For loop for preview images for the fancy style sheets
   for (var i = 0; i <= 4; i++) {
      var sheetImg = document.createElement("img");
      sheetImg.setAttribute('src', 'na_small_' + i + '.png');
      sheetImg.setAttribute('alt', 'na_style_' + i + '.css');
      sheetImg.addEventListener("click", function(e) {
         document.getElementById('fancySheet').setAttribute("href", e.target.alt);
         console.log(fancySheet);
         
      });

      figBox.appendChild(sheetImg);
   }

   // Element node that will be an embedded style sheet
   var fancySheet = document.createElement("style");
   document.head.appendChild(fancySheet);
   fancySheet.setAttribute('id', "fancySheet");


   // embedded stlye sheet that will be appended to the document head.
   var thumbStyles = document.createElement("style"); 
   document.head.appendChild(thumbStyles);
// Setting the position of the styleThumbs element.
   document.styleSheets[document.styleSheets.length-1].insertRule(" \
   figure#styleThumbs { \
      position: absolute; \
      left: 0px; \
      bottom: 0px; \
   }", 0);
// Changing the appearance of the styleThumbs image.
   document.styleSheets[document.styleSheets.length-1].insertRule(" \
   figure#styleThumbs img { \
      outline: 1px solid black; \
      cursor: pointer; \
      opacity: 0.75; \
   }", 1);
// Create an outline when the styleThumbs image is hovered over.
   document.styleSheets[document.styleSheets.length-1].insertRule(" \
   figure#styleThumbs img:hover { \
      outline: 1px solid red; \
      opacity: 1.0; \
   }", 2);
}




// Parition -------------------------------------------------------------------
function randInt(size) {
   return Math.floor(size*Math.random());
}