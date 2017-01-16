//Problem: User, when clicking on image, is taken to a dead end (poor experience).
//Solution: Create an overlay with the large image - lightbox.

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//Add image to overlay.
$overlay.append($image);

//Add a caption to overlay.f
$overlay.append($caption);

//Add overlay to page.
$("body").append($overlay);

//1. Capture the click event on a link to an image.
$("#gallery a").click(function(event) {
  event.preventDefault();
};
                      
var imageLocation = $(this).attr("href");
  
//Update overlay with the image linked in the link.
$image.attr("src", imageLocation);

//Add border.

//Show the overlay.

$overlay.show();

//Get child's alt attribute and set caption.
var captionText = $(this).children("img").attr("alt");
$caption.text(captionText);

//3. When overlay is clicked
$overlay.click(function(){
  
//3.1 Hide the overlay.$overlay
$overlay.hide();
});
       
  








