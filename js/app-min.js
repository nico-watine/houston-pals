$(document).foundation(),$(".front-affected-limb-toggle").click(function(){$(".front-injury-solution-option").removeClass("is-hidden"),$(".rear-injury-solution-option").addClass("is-hidden"),$("#injury-solution-notification").addClass("is-hidden")}),$(".rear-affected-limb-toggle").click(function(){$(".rear-injury-solution-option").removeClass("is-hidden"),$(".front-injury-solution-option").addClass("is-hidden"),$("#injury-solution-notification").addClass("is-hidden")}),$(".front-injury-solution-option").click(function(){$("#affected-limb-img").addClass("is-hidden"),$("#affected-limb-img").removeClass("is-visible"),$("#injury-solution-img").removeClass("is-hidden"),$("#injury-solution-img").addClass("is-visible"),$("#tailored-finish-prechoice-samples").addClass("is-hidden")}),$(".rear-injury-solution-option").click(function(){$("#affected-limb-img").addClass("is-hidden"),$("#affected-limb-img").removeClass("is-visible"),$("#injury-solution-img").removeClass("is-hidden"),$("#injury-solution-img").addClass("is-visible"),$("#tailored-finish-prechoice-samples").addClass("is-hidden")}),$("#front-injury-orthotic-solution").click(function(){$("#front-orthotic-tailored-finish-option").removeClass("is-hidden")}),$(".front-affected-limb-toggle, .rear-affected-limb-toggle").click(function(){$("#injury-solution-img").removeClass("is-visible"),$("#injury-solution-img").addClass("is-hidden"),$("#affected-limb-img").addClass("is-visible"),$("#affected-limb-img").removeClass("is-hidden"),$("#tailored-finish-prechoice-samples").removeClass("is-hidden")});