"use strict";
// Edabit Challenges

// -1-
// Create a function that takes length and width and finds the perimeter of a rectangle.
alert("You can calculate Perimeter of rectangular via this page!")
alert("Open DevTools(F12) and go to Console to see your result")
let length;
let width;
function findPerimeter(length,width) {
  for (let i=0; i<1;i++){
     length=+prompt("Enter property of the length of the rectangular");
     width =+prompt("Enter property of the width of the rectangular");
    if(length!=="" && length!==null && !isNaN(length)&& width!==null&& width!=="" && !isNaN(width)){

       console.log(`Perimeter is ${length*2+width*2}`);
     }else{
       alert("Please , enter number!");
       i--;
     }
    }
}
findPerimeter()
