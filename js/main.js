//when the menu button is clicked
$("#menu-button").click(function() {
	//apply menu-open styles to the button
	$("#menu-button").toggleClass("menu-open")
	//apply menu-collapsed styles to the menu
	$("#menu").toggleClass("menu-collapsed")
	//apply hidden, animate, and fadeInLeft styles to menu and ul, li
	$("#menu ul li").toggleClass('hidden animate fadeInLeft')
})