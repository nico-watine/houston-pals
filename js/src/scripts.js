$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	focusOnSelect: true
});

// This file is to show how 'app.js' is for importing all of the Foundation-specific files
// 'scripts.js' is a placehold file for any other script files
// 'scripts.js' is minified via codekit, not via 'npm run build'
// when 'npm run build' is executed, 'scripts-min.js' is simply copied over and not processed in any way