/*
 * b4st JS
 */


(function ($) {

	'use strict';

	$(document).ready(function() {

		// Pagination fix for ellipsis

		$('.pagination .dots').addClass('page-link').parent().addClass('disabled');

		// Navbar

		// allows nested dropdowns to be open at the same time
		$('.dropdown-menu button.dropdown-toggle').on('click', function(e) {
			if (!$(this).next().hasClass('show')) {
				$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
			}
			var $subMenu = $(this).next(".dropdown-menu");
			$subMenu.toggleClass('show');

			$(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
				$('.dropdown-submenu .show').removeClass("show");
			});

			return false;
		});

	});

})(jQuery);


// Buttons

// set outline buttons to change colour on hover and revert after hover
var outlineButtons = document.getElementsByClassName("wp-block-button is-style-outline");

// set text colour to white and background to text colour on hover
var outlineButtonHover = function() {
	var btnColor = getComputedStyle(this.getElementsByTagName("a")[0]).color;
	this.getElementsByTagName("a")[0].style.setProperty("background-color", btnColor, "important")
	this.getElementsByTagName("a")[0].style.setProperty("color", "white", "important");
};

// revert hover colour to how they were before
var outlineButtonHoverOver = function() {
	var btnColor = getComputedStyle(this.getElementsByTagName("a")[0]).backgroundColor;
	this.getElementsByTagName("a")[0].style.setProperty("background-color", "transparent", "important")
	this.getElementsByTagName("a")[0].style.setProperty("color", btnColor, "important")
};

for (var i = 0; i < outlineButtons.length; i++) {
	outlineButtons[i].addEventListener('mouseover', outlineButtonHover, false);
	outlineButtons[i].addEventListener('mouseout', outlineButtonHoverOver, false);

	// if outline button has background, set background to transparent
	outlineButtons[i].getElementsByTagName("a")[0].style.setProperty("background-color", "transparent", "important");
}
