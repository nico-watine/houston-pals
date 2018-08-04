$(document).foundation();

// Toggle Injury Solution options based on Affected Limb chosen
// Front
$('.front-affected-limb-toggle').click(function(){ // Select "Front Affected Limb"
	$('.front-injury-solution-option').removeClass('is-hidden'); // Show "Front Orthotic" and "Front Prosthetic"
	$('.rear-injury-solution-option').addClass('is-hidden'); // Hide "Rear Orthotic" and "Rear Prosthetic"
});
$('.rear-affected-limb-toggle').click(function(){
	$('.rear-injury-solution-option').removeClass('is-hidden');
	$('.front-injury-solution-option').addClass('is-hidden');
});

// Remove "Please specify the Affected Limb first." after choosing Front or Rear limb
$('.front-affected-limb-toggle, .rear-affected-limb-toggle').click(function(){
	$('#injury-solution-notification').addClass('is-hidden');
});

