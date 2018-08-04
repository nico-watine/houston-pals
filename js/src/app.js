$(document).foundation();

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

// Remove "Please specify the Affected Limb first." after choosing Front or Rear limb
$('.front-affected-limb-toggle, .rear-affected-limb-toggle').click(function(){
	$('#injury-solution-notification').addClass('is-hidden');
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
	// $('#injury-solution-img').removeClass('is-visible').addClass('is-hidden'); // Hide "gray" device
});

// -------------------------------------------------------------
// Step #8 -----------------------------------------------------
// -------------------------------------------------------------
// Hide alternate gray image upon selecting 1 option
// -------------------------------------------------------------
// $('#front-injury-orthotic-solution').click(function(){
	// $('#injury-solution-img').removeClass('is-visible').addClass('is-hidden'); // Hide opposite "gray" device
// });

// ----------------------------------------------------------------------
// Resetting the Builder ------------------------------------------------
// ----------------------------------------------------------------------
// Select "Front Limb" or "Rear Limb"
// ----------------------------------------------------------------------
$('.front-affected-limb-toggle, .rear-affected-limb-toggle').click(function(){
	$('#tailored-finish-img, #injury-solution-img').removeClass('is-visible').addClass('is-hidden'); // Hide colored & gray device image
	$('#affected-limb-img').removeClass('is-hidden').addClass('is-visible'); // Show white limb
});
