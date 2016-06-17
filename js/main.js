// Run function once document has been loaded
  $(function(){
  		//home page
      $("#typed").typed({
        strings: ["^1000 Design and Development solutions."],
        typeSpeed: 0
      });

      //Contact page
      $("#contactText").typed({
      	strings: ["^1000 Lets work together.", "Contact Us today to get started!"],
      	typeSpeed: 0
      });

  });




//Lightbox Gallery

//Create DOM elements to be added
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $video = $('<video controls src=""/>');
var $caption = $('<p class="overlay-caption"></p>');
var $icons = $('<div><i></i></div>');


function appendImage() {
//append image within overlay
$overlay.append($image);
//append caption onto overlay underneath image
$overlay.append($caption);
//append Div for icons
$overlay.append($icons);



//append overlay dom element as a child of body
$('body').append($overlay);

//add click listener to images
$('#imageGallery img').on('click', function(event) {

  //Store current images link href attribute 
  var imgLocation = $(this).attr('src');

  $image.show();

  //prevent default click action
  event.preventDefault();

  //get image attribute value
  var captionText = $(this).attr('alt');

  //append value from alt attribute into the $caption 
  $caption.text(captionText);

  $image.attr('src', imgLocation);

  $overlay.show();
});

}





function appendVideo() {

  // // if overlay has image remove it
  // $overlay.children($image) ? $overlay.remove($image) : $overlay.append($image);

    //append overlay to body
    $overlay.append($video);

//Vi33deo click event
$('#imageGallery video').on('click', function(event) {
    //prevent link taking you to a new page
    event.preventDefault();

    $image.hide();
    //get src attributes value
    var videoLocation = $(this).attr('src');

    //set src attributes value
    $video.attr('src', videoLocation);

    $('body').append($overlay);

    $overlay.show();
});

}
//Call to enable overlay on images
appendImage();

//Call to enable overlay for videos
appendVideo();


//When overlay is clicked, hide the overlay
$overlay.on('click', function() {
  $(this).hide();
});





