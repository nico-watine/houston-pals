$(document).foundation(),$(".front-affected-limb-toggle, .rear-affected-limb-toggle").click(function(){$("#injury-solution-notification").addClass("is-hidden"),$("#tailored-finish-prechoice-samples").removeClass("is-hidden").addClass("is-visible"),$("#tailored-finish-img, #injury-solution-img").removeClass("is-visible").addClass("is-hidden"),$(".tailored-finish-options").removeClass("is-visible").addClass("is-hidden"),$("#affected-limb-img").removeClass("is-hidden").addClass("is-visible")}),$(".front-affected-limb-toggle").click(function(){$(".front-injury-solution-option").removeClass("is-hidden"),$(".rear-injury-solution-option").addClass("is-hidden")}),$(".rear-affected-limb-toggle").click(function(){$(".rear-injury-solution-option").removeClass("is-hidden"),$(".front-injury-solution-option").addClass("is-hidden")}),$(".front-injury-solution-option, .rear-injury-solution-option").click(function(){$("#affected-limb-img").removeClass("is-visible").addClass("is-hidden")}),$(".front-injury-solution-option, .rear-injury-solution-option").click(function(){$("#injury-solution-img").removeClass("is-hidden").addClass("is-visible")}),$(".front-injury-solution-option, .rear-injury-solution-option").click(function(){$("#tailored-finish-prechoice-samples").removeClass("is-visible").addClass("is-hidden")}),$("#front-injury-orthotic-solution").click(function(){$(".tailored-finish-options").addClass("is-hidden"),$(".tailored-finish-options#front-orthotic-tailored-finish-option").removeClass("is-hidden")}),$("#front-injury-prosthetic-solution").click(function(){$(".tailored-finish-options").addClass("is-hidden"),$(".tailored-finish-options#front-prosthetic-tailored-finish-option").removeClass("is-hidden")}),$("#rear-injury-orthotic-solution").click(function(){$(".tailored-finish-options").addClass("is-hidden"),$(".tailored-finish-options#rear-orthotic-tailored-finish-option").removeClass("is-hidden")}),$("#rear-injury-prosthetic-solution").click(function(){$(".tailored-finish-options").addClass("is-hidden"),$(".tailored-finish-options#rear-prosthetic-tailored-finish-option").removeClass("is-hidden")}),$("#front-injury-orthotic-solution, #front-injury-prosthetic-solution, #rear-injury-orthotic-solution, #rear-injury-prosthetic-solution").click(function(){$("#tailored-finish-img").removeClass("is-hidden").addClass("is-visible")}),$("#tan-coat").click(function(){$("#tan-coat").addClass("active"),$("#black-coat, #brown-coat, #mixed-coat").removeClass("active")}),$("#black-coat").click(function(){$("#black-coat").addClass("active"),$("#brown-coat, #tan-coat, #mixed-coat").removeClass("active")}),$("#brown-coat").click(function(){$("#brown-coat").addClass("active"),$("#black-coat, #tan-coat, #mixed-coat").removeClass("active")}),$("#mixed-coat").click(function(){$("#mixed-coat").addClass("active"),$("#black-coat, #tan-coat, #brown-coat").removeClass("active")});