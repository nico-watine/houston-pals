$(document).foundation(),$(".front-affected-limb-toggle").click(function(){$(".front-injury-solution-option").removeClass("is-hidden"),$(".rear-injury-solution-option").addClass("is-hidden")}),$(".rear-affected-limb-toggle").click(function(){$(".rear-injury-solution-option").removeClass("is-hidden"),$(".front-injury-solution-option").addClass("is-hidden")}),$(".front-affected-limb-toggle, .rear-affected-limb-toggle").click(function(){$("#injury-solution-notification").addClass("is-hidden")}),$(".front-injury-solution-option, .rear-injury-solution-option").click(function(){$("#affected-limb-img").removeClass("is-visible").addClass("is-hidden")}),$(".front-injury-solution-option, .rear-injury-solution-option").click(function(){$("#injury-solution-img").removeClass("is-hidden").addClass("is-visible")}),$(".front-injury-solution-option, .rear-injury-solution-option").click(function(){$("#tailored-finish-prechoice-samples").removeClass("is-visible").addClass("is-hidden")}),$("#front-injury-orthotic-solution").click(function(){$("#front-orthotic-tailored-finish-option").removeClass("is-hidden")}),$("#front-injury-prosthetic-solution").click(function(){$("#front-prosthetic-tailored-finish-option").removeClass("is-hidden")}),$("#rear-injury-orthotic-solution").click(function(){$("#rear-orthotic-tailored-finish-option").removeClass("is-hidden")}),$("#rear-injury-prosthetic-solution").click(function(){$("#rear-prosthetic-tailored-finish-option").removeClass("is-hidden")}),$("#front-injury-orthotic-solution, #front-injury-prosthetic-solution, #rear-injury-orthotic-solution, #rear-injury-prosthetic-solution").click(function(){$("#tailored-finish-img").removeClass("is-hidden").addClass("is-visible")}),$(".front-affected-limb-toggle, .rear-affected-limb-toggle").click(function(){$("#tailored-finish-img").removeClass("is-visible").addClass("is-hidden"),$("#injury-solution-img").removeClass("is-visible").addClass("is-hidden")});