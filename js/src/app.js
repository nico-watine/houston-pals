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


