$(document).foundation();

// ----------------------------------------------------------------------
// Resetting the Builder ------------------------------------------------
// ----------------------------------------------------------------------
// Selecting "Front Limb" or "Rear Limb"
// ----------------------------------------------------------------------
$('.front-affected-limb-toggle, .rear-affected-limb-toggle').click(function(){
	$('#injury-solution-notification').addClass('is-hidden'); // Remove "Please specify the Affected Limb first." after choosing Front or Rear limb
	$('#tailored-finish-prechoice-samples').removeClass('is-hidden').addClass('is-visible'); // Show prechoice samples
	$('#tailored-finish-img, #injury-solution-img').removeClass('is-visible').addClass('is-hidden'); // Hide colored & gray device image
	$('.tailored-finish-options').removeClass('is-visible').addClass('is-hidden'); // Hide colored finish options
	$('#affected-limb-img').removeClass('is-hidden').addClass('is-visible'); // Show white limb
});

// --------------------------------------------------------------
// Step #1 ------------------------------------------------------
// --------------------------------------------------------------
// Toggle Injury Solution options based on Affected Limb chosen
// --------------------------------------------------------------
// Front
$('.front-affected-limb-toggle').click(function(){ // Select "Front Affected Limb"
	$('.front-injury-solution-option').removeClass('is-hidden'); // Show "Front Orthotic" and "Front Prosthetic"
	$('.rear-injury-solution-option').addClass('is-hidden'); // Hide "Rear Orthotic" and "Rear Prosthetic"
});
// Rear
$('.rear-affected-limb-toggle').click(function(){ // Select "Rear Affected Limb"
	$('.rear-injury-solution-option').removeClass('is-hidden'); // Hide "Front Orthotic" and "Front Prosthetic"
	$('.front-injury-solution-option').addClass('is-hidden'); // Show "Rear Orthotic" and "Rear Prosthetic"
});

// -------------------------------------------------------------------------------------
// Step #2 -----------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// Hide "white" Affected Limb after choosing Injury Solution ("Orthotic" or "Prosthetic")
// -------------------------------------------------------------------------------------
$('.front-injury-solution-option, .rear-injury-solution-option').click(function(){
	$('#affected-limb-img').removeClass('is-visible').addClass('is-hidden');
});

// ----------------------------------------------------------------------------
// Step #4 --------------------------------------------------------------------
// ----------------------------------------------------------------------------
// Show gray "Orthotic" or "Prosthetic" device on chosen limb
// ----------------------------------------------------------------------------
$('.front-injury-solution-option, .rear-injury-solution-option').click(function(){
	$('#injury-solution-img').removeClass('is-hidden').addClass('is-visible'); // Show gray "Orthotic" or "Prosthetic" device
});

// ----------------------------------------------------------------------------
// Step #5 --------------------------------------------------------------------
// ----------------------------------------------------------------------------
// Hide "Please specify the Injury Solution." & Tailored Finish example options
// ----------------------------------------------------------------------------
$('.front-injury-solution-option, .rear-injury-solution-option').click(function(){
	$('#tailored-finish-prechoice-samples').removeClass('is-visible').addClass('is-hidden');
});

// ------------------------------------------------------------------------------------
// Step #6 ----------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// Display "Tailored Options" and "Tailored Finish Image" based on chosen Limb & Device
// ------------------------------------------------------------------------------------
// Front - Orthotic
$('#front-injury-orthotic-solution').click(function(){
	$('.tailored-finish-options').addClass('is-hidden');
	$('.tailored-finish-options#front-orthotic-tailored-finish-option').removeClass('is-hidden');
});
// Front - Prosthetic
$('#front-injury-prosthetic-solution').click(function(){
	$('.tailored-finish-options').addClass('is-hidden');
	$('.tailored-finish-options#front-prosthetic-tailored-finish-option').removeClass('is-hidden');
});
// Rear - Orthotic
$('#rear-injury-orthotic-solution').click(function(){
	$('.tailored-finish-options').addClass('is-hidden');
	$('.tailored-finish-options#rear-orthotic-tailored-finish-option').removeClass('is-hidden');
});
// Rear - Prosthetic
$('#rear-injury-prosthetic-solution').click(function(){
	$('.tailored-finish-options').addClass('is-hidden');
	$('.tailored-finish-options#rear-prosthetic-tailored-finish-option').removeClass('is-hidden');
});

// -------------------------------------------------------------
// Step #7 -----------------------------------------------------
// -------------------------------------------------------------
// Display "Tailored Finish Image" based on chosen Limb & Device
// -------------------------------------------------------------
$('#front-injury-orthotic-solution, #front-injury-prosthetic-solution, #rear-injury-orthotic-solution, #rear-injury-prosthetic-solution').click(function(){
	$('#tailored-finish-img').removeClass('is-hidden').addClass('is-visible'); // Show "colored" device
});

// ------------------------------------------------------------------------------------
// Toggling .active to spans when clicked
// ------------------------------------------------------------------------------------

// Coat-Color
$('#tan-coat').click(function(){
	$('#tan-coat').addClass('active');
	$('#black-coat, #brown-coat, #mixed-coat').removeClass('active');
});
$('#black-coat').click(function(){
	$('#black-coat').addClass('active');
	$('#brown-coat, #tan-coat, #mixed-coat').removeClass('active');
});
$('#brown-coat').click(function(){
	$('#brown-coat').addClass('active');
	$('#black-coat, #tan-coat, #mixed-coat').removeClass('active');
});
$('#mixed-coat').click(function(){
	$('#mixed-coat').addClass('active');
	$('#black-coat, #tan-coat, #brown-coat').removeClass('active');
});

// Affected Limb
$('#front-limb').click(function(){
	$('#front-limb').addClass('active');
	$('#rear-limb, #front-prosthesis, #rear-orthosis, #rear-prosthesis, #front-orthosis').removeClass('active');
});
$('#rear-limb').click(function(){
	$('#rear-limb').addClass('active');
	$('#front-limb, #front-prosthesis, #rear-orthosis, #rear-prosthesis, #front-orthosis').removeClass('active');
});

// Injury Solution
$('#front-orthosis').click(function(){
	$('#front-orthosis').addClass('active');
	$('#front-prosthesis, #rear-orthosis, #rear-prosthesis').removeClass('active');
});
$('#front-prosthesis').click(function(){
	$('#front-prosthesis').addClass('active');
	$('#front-orthosis, #rear-orthosis, #rear-prosthesis').removeClass('active');
});
$('#rear-orthosis').click(function(){
	$('#rear-orthosis').addClass('active');
	$('#rear-prosthesis, #front-orthosis, #front-prosthesis').removeClass('active');
});
$('#rear-prosthesis').click(function(){
	$('#rear-prosthesis').addClass('active');
	$('#rear-orthosis, #front-orthosis, #front-prosthesis').removeClass('active');
});

$('#finish-1013').click(function(){
	$('#finish-1013').addClass('active');
	$('#finish-1025').removeClass('active');
});

$('#finish-1025').click(function(){
	$('#finish-1025').addClass('active');
	$('#finish-1013').removeClass('active');
});

/*
* Replace all SVG images with inline SVG
*/
jQuery('img.svg').each(function(){
	var $img = jQuery(this);
	var imgID = $img.attr('id');
	var imgClass = $img.attr('class');
	var imgURL = $img.attr('src');

	jQuery.get(imgURL, function(data) {
		// Get the SVG tag, ignore the rest
		var $svg = jQuery(data).find('svg');

		// Add replaced image's ID to the new SVG
		if(typeof imgID !== 'undefined') {
			$svg = $svg.attr('id', imgID);
		}
		// Add replaced image's classes to the new SVG
		if(typeof imgClass !== 'undefined') {
			$svg = $svg.attr('class', imgClass+' replaced-svg');
		}

		// Remove any invalid XML tags as per http://validator.w3.org
		$svg = $svg.removeAttr('xmlns:a');

		// Replace image with new SVG
		$img.replaceWith($svg);

	}, 'xml');

});
