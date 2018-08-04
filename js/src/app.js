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
// Step #3 --------------------------------------------------------------------
// ----------------------------------------------------------------------------
// Hide "Please specify the Injury Solution." & Tailored Finish example options
// ----------------------------------------------------------------------------
$('.front-injury-solution-option, .rear-injury-solution-option').click(function(){
	$('#tailored-finish-prechoice-samples').removeClass('is-visible').addClass('is-hidden');
});
