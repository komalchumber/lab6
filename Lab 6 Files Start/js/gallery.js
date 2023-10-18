// STEP 1: Initialize and declare variables
var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');


/* STEP 2: Loop 5 times to create the <img> elements */
	for (var i = 1; i < 6; i ++) {
		var newImage = document.createElement('img');
		newImage.setAttribute('src', 'images/pic' + i + '.jpg');
		thumbBar.appendChild(newImage);
		/* STEP 3: Build event handler for each <img> */
		// newImage.onclick = function(event) {
		// 	var imgSrc = event.target.getAttribute('src');
		// 	displayImage(imgSrc);
		// }
	}

/* STEP 4: Function to change the src of the main <img> */
function displayImage(value) {
	displayedImage.setAttribute('src', value);
}

/* STEP 5: Event Delegation
Instead of adding event handlers for each image, how about event delegation? Build a click handler on the parent element, and capture each target (and its attributes) from the event object */
thumbBar.onclick = function(event) {
	// event.target is the element that was clicked
	if (event.target && event.target.nodeName === 'IMG') {
		var imgSrc = event.target.getAttribute('src');
		displayImage(imgSrc);
		// Lab 6 STEP G: Call the clearWayfinding() function that you built below - and enjoy the result!
		clearWayfinding();  // Abin Byju
		// Lab 6 STEP A: Inside the thumbBar.onclick event handler function, and also inside the if statement, change the event.target CSS outline property to "5px solid red"
		newImage.style.outline = "5px solid red";  // Komal
		// Lab 6 STEP B: Next, change the event.target CSS position property to "relative"
		newImage.style.position = "relative"; // Abin Byju
		// Lab 6 STEP C: And then set the CSS z-index property to "10" so that the thumbnail clicked is on top of all the others
		newImage.style.zIndex = "10";  // Komal
	}
};
// Lab 6 STEP D: Initialize and declare a var called 'thumbImgs' using the querySelectorAll method to grab all the IMG elements inside the .thumb-bar
var thumbImgs = document.querySelectorAll('.thumb-bar img');  // Aryan Sharma

// Lab 6 STEP E: Build a function called 'clearWayfinding()' that loops through the thumbImgs array with a FOR loop
function clearWayfinding() {
    for (var i = 0; i < thumbImgs.length; i++) {   // Aryan Sharmma
	// Lab 6 STEP F: Inside the clearWayfinding function, for each thumbImgs IMG element, set the CSS outline-width property to "0", and the z-index property also to "0"
	thumbImgs[i].style.outlineWidth = "0";
	thumbImgs[i].style.zIndex = "0";    // Komal
}
}
// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery and https://davidwalsh.name/event-delegate
