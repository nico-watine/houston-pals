$(document).foundation();

// Toggle Injury Solution options based on Affected Limb chosen

$('.front-affected-limb-toggle').click(function(){
	$('.front-injury-solution-option').removeClass('is-hidden');
	$('.rear-injury-solution-option').addClass('is-hidden');
	$('#injury-solution-notification').addClass('is-hidden');
});
$('.rear-affected-limb-toggle').click(function(){
	$('.rear-injury-solution-option').removeClass('is-hidden');
	$('.front-injury-solution-option').addClass('is-hidden');
	$('#injury-solution-notification').addClass('is-hidden');
});

// --------------------------------------------------------------




// Hide "white" Affected Limb after choosing Injury Solution

$('.front-injury-solution-option').click(function(){
	$('#affected-limb-img').addClass('is-hidden');
	$('#affected-limb-img').removeClass('is-visible');
	$('#injury-solution-img').removeClass('is-hidden');
	$('#injury-solution-img').addClass('is-visible');
	// Hide sample choices upon specifying Injury Solution
	$('#tailored-finish-prechoice-samples').addClass('is-hidden');
});

$('.rear-injury-solution-option').click(function(){
	$('#affected-limb-img').addClass('is-hidden');
	$('#affected-limb-img').removeClass('is-visible');
	$('#injury-solution-img').removeClass('is-hidden');
	$('#injury-solution-img').addClass('is-visible');
	// Hide sample choices upon specifying Injury Solution
	$('#tailored-finish-prechoice-samples').addClass('is-hidden');
});


$('#front-injury-orthotic-solution').click(function(){
	$('#front-orthotic-tailored-finish-option').removeClass('is-hidden');
});
$('#front-injury-prosthetic-solution').click(function(){
	$('#front-prosthetic-tailored-finish-option').removeClass('is-hidden');
});
$('#rear-injury-orthotic-solution').click(function(){
	$('#rear-orthotic-tailored-finish-option').removeClass('is-hidden');
});
$('#rear-injury-prosthetic-solution').click(function(){
	$('#rear-prosthetic-tailored-finish-option').removeClass('is-hidden');
});

// --------------------------------------------------------------





// Hide chosen limb & product options when retroactively clicking on Affected Limb

$('.front-affected-limb-toggle, .rear-affected-limb-toggle').click(function(){
	$('#injury-solution-img').removeClass('is-visible');
	$('#injury-solution-img').addClass('is-hidden');
	$('#affected-limb-img').addClass('is-visible');
	$('#affected-limb-img').removeClass('is-hidden');
	// Present the sample choices when resetting the builder
	$('#tailored-finish-prechoice-samples').removeClass('is-hidden');
	$('#front-orthotic-tailored-finish-option').addClass('is-hidden');
});

// --------------------------------------------------------------




