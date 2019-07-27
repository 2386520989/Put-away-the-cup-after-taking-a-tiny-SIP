function showText(whichText){
	var source = whichText.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	// placeholder.setAttributeByTageName("p",source);
}