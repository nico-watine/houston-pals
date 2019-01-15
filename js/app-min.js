$(document).foundation(),
// ----------------------------------------------------------------------
// Resetting the Builder ------------------------------------------------
// ----------------------------------------------------------------------
// Selecting "Front Limb" or "Rear Limb"
// ----------------------------------------------------------------------
$(".front-affected-limb-toggle, .rear-affected-limb-toggle").click(function(){$("#injury-solution-notification").addClass("is-hidden"),// Remove "Please specify the Affected Limb first." after choosing Front or Rear limb
$("#tailored-finish-prechoice-samples").removeClass("is-hidden").addClass("is-visible"),// Show prechoice samples
$("#tailored-finish-img, #injury-solution-img").removeClass("is-visible").addClass("is-hidden"),// Hide colored & gray device image
$(".tailored-finish-options").removeClass("is-visible").addClass("is-hidden"),// Hide colored finish options
$("#affected-limb-img").removeClass("is-hidden").addClass("is-visible")}),
// --------------------------------------------------------------
// Step #1 ------------------------------------------------------
// --------------------------------------------------------------
// Toggle Injury Solution options based on Affected Limb chosen
// --------------------------------------------------------------
// Front
$(".front-affected-limb-toggle").click(function(){// Select "Front Affected Limb"
$(".front-injury-solution-option").removeClass("is-hidden"),// Show "Front Orthotic" and "Front Prosthetic"
$(".rear-injury-solution-option").addClass("is-hidden")}),
// Rear
$(".rear-affected-limb-toggle").click(function(){// Select "Rear Affected Limb"
$(".rear-injury-solution-option").removeClass("is-hidden"),// Hide "Front Orthotic" and "Front Prosthetic"
$(".front-injury-solution-option").addClass("is-hidden")}),
// -------------------------------------------------------------------------------------
// Step #2 -----------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// Hide "white" Affected Limb after choosing Injury Solution ("Orthotic" or "Prosthetic")
// -------------------------------------------------------------------------------------
$(".front-injury-solution-option, .rear-injury-solution-option").click(function(){$("#affected-limb-img").removeClass("is-visible").addClass("is-hidden")}),
// ----------------------------------------------------------------------------
// Step #4 --------------------------------------------------------------------
// ----------------------------------------------------------------------------
// Show gray "Orthotic" or "Prosthetic" device on chosen limb
// ----------------------------------------------------------------------------
$(".front-injury-solution-option, .rear-injury-solution-option").click(function(){$("#injury-solution-img").removeClass("is-hidden").addClass("is-visible");// Show gray "Orthotic" or "Prosthetic" device
}),
// ----------------------------------------------------------------------------
// Step #5 --------------------------------------------------------------------
// ----------------------------------------------------------------------------
// Hide "Please specify the Injury Solution." & Tailored Finish example options
// ----------------------------------------------------------------------------
$(".front-injury-solution-option, .rear-injury-solution-option").click(function(){$("#tailored-finish-prechoice-samples").removeClass("is-visible").addClass("is-hidden")}),
// ------------------------------------------------------------------------------------
// Step #6 ----------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// Display "Tailored Options" and "Tailored Finish Image" based on chosen Limb & Device
// ------------------------------------------------------------------------------------
// Front - Orthotic
$("#front-injury-orthotic-solution").click(function(){$(".tailored-finish-options").addClass("is-hidden"),$(".tailored-finish-options#front-orthotic-tailored-finish-option").removeClass("is-hidden")}),
// Front - Prosthetic
$("#front-injury-prosthetic-solution").click(function(){$(".tailored-finish-options").addClass("is-hidden"),$(".tailored-finish-options#front-prosthetic-tailored-finish-option").removeClass("is-hidden")}),
// Rear - Orthotic
$("#rear-injury-orthotic-solution").click(function(){$(".tailored-finish-options").addClass("is-hidden"),$(".tailored-finish-options#rear-orthotic-tailored-finish-option").removeClass("is-hidden")}),
// Rear - Prosthetic
$("#rear-injury-prosthetic-solution").click(function(){$(".tailored-finish-options").addClass("is-hidden"),$(".tailored-finish-options#rear-prosthetic-tailored-finish-option").removeClass("is-hidden")}),
// -------------------------------------------------------------
// Step #7 -----------------------------------------------------
// -------------------------------------------------------------
// Display "Tailored Finish Image" based on chosen Limb & Device
// -------------------------------------------------------------
$("#front-injury-orthotic-solution, #front-injury-prosthetic-solution, #rear-injury-orthotic-solution, #rear-injury-prosthetic-solution").click(function(){$("#tailored-finish-img").removeClass("is-hidden").addClass("is-visible");// Show "colored" device
}),
// ------------------------------------------------------------------------------------
// Toggling .active to spans when clicked
// ------------------------------------------------------------------------------------
// Coat-Color
$("#tan-coat").click(function(){$("#tan-coat").addClass("active"),$("#black-coat, #brown-coat, #mixed-coat").removeClass("active")}),$("#black-coat").click(function(){$("#black-coat").addClass("active"),$("#brown-coat, #tan-coat, #mixed-coat").removeClass("active")}),$("#brown-coat").click(function(){$("#brown-coat").addClass("active"),$("#black-coat, #tan-coat, #mixed-coat").removeClass("active")}),$("#mixed-coat").click(function(){$("#mixed-coat").addClass("active"),$("#black-coat, #tan-coat, #brown-coat").removeClass("active")}),
// Affected Limb
$("#front-limb").click(function(){$("#front-limb").addClass("active"),$("#rear-limb, #front-prosthesis, #rear-orthosis, #rear-prosthesis, #front-orthosis").removeClass("active")}),$("#rear-limb").click(function(){$("#rear-limb").addClass("active"),$("#front-limb, #front-prosthesis, #rear-orthosis, #rear-prosthesis, #front-orthosis").removeClass("active")}),
// Injury Solution
$("#front-orthosis").click(function(){$("#front-orthosis").addClass("active"),$("#front-prosthesis, #rear-orthosis, #rear-prosthesis").removeClass("active")}),$("#front-prosthesis").click(function(){$("#front-prosthesis").addClass("active"),$("#front-orthosis, #rear-orthosis, #rear-prosthesis").removeClass("active")}),$("#rear-orthosis").click(function(){$("#rear-orthosis").addClass("active"),$("#rear-prosthesis, #front-orthosis, #front-prosthesis").removeClass("active")}),$("#rear-prosthesis").click(function(){$("#rear-prosthesis").addClass("active"),$("#rear-orthosis, #front-orthosis, #front-prosthesis").removeClass("active")}),
// -------------------------------------------------------------
// Tailored-Finish resets function
// -------------------------------------------------------------
$("#finish-1013").click(function(){$("#finish-1013").addClass("active"),$("#finish-1025, #finish-1026, #finish-1050, #finish-1053, #finish-1060, #finish-1071, #finish-1083, #finish-1090, #finish-1201").removeClass("active")}),$("#finish-1025").click(function(){$("#finish-1025").addClass("active"),$("#finish-1013, #finish-1026, #finish-1050, #finish-1053, #finish-1060, #finish-1071, #finish-1083, #finish-1090, #finish-1201").removeClass("active")}),$("#finish-1026").click(function(){$("#finish-1026").addClass("active"),$("#finish-1025, #finish-1013, #finish-1050, #finish-1053, #finish-1060, #finish-1071, #finish-1083, #finish-1090, #finish-1201").removeClass("active")}),$("#finish-1050").click(function(){$("#finish-1050").addClass("active"),$("#finish-1025, #finish-1026, #finish-1013, #finish-1053, #finish-1060, #finish-1071, #finish-1083, #finish-1090, #finish-1201").removeClass("active")}),$("#finish-1053").click(function(){$("#finish-1053").addClass("active"),$("#finish-1025, #finish-1026, #finish-1050, #finish-1013, #finish-1060, #finish-1071, #finish-1083, #finish-1090, #finish-1201").removeClass("active")}),$("#finish-1060").click(function(){$("#finish-1060").addClass("active"),$("#finish-1025, #finish-1026, #finish-1050, #finish-1053, #finish-1013, #finish-1071, #finish-1083, #finish-1090, #finish-1201").removeClass("active")}),$("#finish-1071").click(function(){$("#finish-1071").addClass("active"),$("#finish-1025, #finish-1026, #finish-1050, #finish-1053, #finish-1060, #finish-1013, #finish-1083, #finish-1090, #finish-1201").removeClass("active")}),$("#finish-1083").click(function(){$("#finish-1083").addClass("active"),$("#finish-1025, #finish-1026, #finish-1050, #finish-1053, #finish-1060, #finish-1071, #finish-1013, #finish-1090, #finish-1201").removeClass("active")}),$("#finish-1090").click(function(){$("#finish-1090").addClass("active"),$("#finish-1025, #finish-1026, #finish-1050, #finish-1053, #finish-1060, #finish-1071, #finish-1083, #finish-1013, #finish-1201").removeClass("active")}),$("#finish-1201").click(function(){$("#finish-1201").addClass("active"),$("#finish-1025, #finish-1026, #finish-1050, #finish-1053, #finish-1060, #finish-1071, #finish-1083, #finish-1090, #finish-1013").removeClass("active")}),
// -------------------------------------------------------------
// Replace all SVG images with inline SVG
// -------------------------------------------------------------
jQuery("img.svg").each(function(){var n=jQuery(this),o=n.attr("id"),t=n.attr("class"),i=n.attr("src");jQuery.get(i,function(i){
// Get the SVG tag, ignore the rest
var s=jQuery(i).find("svg");
// Add replaced image's ID to the new SVG
void 0!==o&&(s=s.attr("id",o)),
// Add replaced image's classes to the new SVG
void 0!==t&&(s=s.attr("class",t+" replaced-svg")),
// Remove any invalid XML tags as per http://validator.w3.org
s=s.removeAttr("xmlns:a"),
// Replace image with new SVG
n.replaceWith(s)},"xml")});