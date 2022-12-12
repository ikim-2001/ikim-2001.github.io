let elementsArray = document.querySelectorAll(".tile");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeIn();
function scrollWin() {
  window.scrollBy(0, 100);
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}