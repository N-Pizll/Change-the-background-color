// Variable construction for body and button
let body = document.body;
let btnkhasho = document.querySelector("#btnkhasho");

// Create a variable to change the background color
let colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "black",
    "gray",
    "pink",
    "orange",
  ];

   //A Lannister event to make the changes we want when we click on the button
//    And start from zero
   btnkhasho.addEventListener("click", changecolors);
   count = 0;

    //Color change function
  function changecolors() {
    body.style.backgroundColor = colors[count];
    count ++
  }
  