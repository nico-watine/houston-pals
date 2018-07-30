$(document).foundation();

// Toggle Injury Solution options based on Affected Limb chosen

$('.front-affected-limb-toggle').click(function(){
	$('.front-injury-solution-option').removeClass('is-hidden');
	$('.rear-injury-solution-option').addClass('is-hidden');
});
$('.rear-affected-limb-toggle').click(function(){
	$('.rear-injury-solution-option').removeClass('is-hidden');
	$('.front-injury-solution-option').addClass('is-hidden');
});

// Hide "white" Affected Limb after choosing Injury Solution

	$('.front-injury-solution-option, .rear-injury-solution-option').click(function(){
		$('#affected-limb-img').addClass('is-hidden');
		$('#affected-limb-img').removeClass('is-visible');
		$('#injury-solution-img').removeClass('is-hidden');
		$('#injury-solution-img').addClass('is-visible');
	});

// Hide chosen limb & product options when retroactively clicking on Affected Limb

	$('.front-affected-limb-toggle, .rear-affected-limb-toggle').click(function(){
		$('#injury-solution-img').removeClass('is-visible');
		$('#injury-solution-img').addClass('is-hidden');
		$('#affected-limb-img').addClass('is-visible');
		$('#affected-limb-img').removeClass('is-hidden');
	});
