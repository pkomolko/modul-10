$(function(){
	var carouselList = $("#carousel ul");
	//setInterval(changeSlide, 3000);
	var rightButton = $(".prawo"); 
	var leftButton = $(".lewo");

	$(rightButton).click(function() { 
		changeSlideRight();
	 });
		$(leftButton).click(function() { 
		changeSlideLeft();
	 });


	function changeSlideRight(){
		carouselList.animate({'marginLeft':-760}, 500, moveFirstSlide);
	};
	function changeSlideLeft(){
		carouselList.animate({'marginLeft':-40}, 500, moveLastSlide);
	};


	function moveFirstSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");

		lastItem.after(firstItem);
		carouselList.css({marginLeft:-440});
	};
	
	function moveLastSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");

		firstItem.before(lastItem);
		carouselList.css({marginLeft:-440});
	};

});

