
/*
var span = $("span");

span.each(function(index, element){
	if(index % 2 == 0){
		$(element).css('color', 'red');
	}
});
*/

$("span:even").css('color', 'red');

//dlaczego?

var paragraphs = $('P');

paragraphs.each(function(index, element) {
	var button = '<button class-"btn" data-tmp="' + index + '">CLick me!</button>'
	$(element).append(button)
});

$("button").click(function(){
	alert($(this).attr("data-tmp"));
});