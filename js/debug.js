/* This file creates debug text which is helpful for clickable region placement */
$(window).load(function() {
	/********** DEBUG TO GET REGION PLACEMENT **********/
	$("#viewer").after("<p id=\"debug\"></p>");
	$("#debug").after("<p>Click Region Code: <span id=\"clickregion\"></span></p>");

	$("#viewer").mousemove(function(event){
		var left = event.pageX - $("#viewer").offset().left;
		var top = event.pageY - $("#viewer").offset().top;
		$("#debug").text(left + ", " + top);
	});

	var newClick = true;
	var pinTop;
	var pinLeft;
	$("#viewer").click(function(event) {
		if (newClick) {
			pinLeft = event.pageX - $("#viewer").offset().left;
			pinTop = event.pageY - $("#viewer").offset().top;
			$("#clickregion").text("");
			newClick = false;
		} else {
			newClick = true;
			var newLeft = event.pageX - $("#viewer").offset().left;
			var newTop = event.pageY - $("#viewer").offset().top;
			var view = views[currentView].name;
			var code = "$(\"." + view + "[title='']\").css({ \"left\" : \"" +
				pinLeft + "px\", \"top\" : \"" + pinTop + "px\" }).width(" +
				(newLeft - pinLeft) + ").height(" + (newTop - pinTop) + ");";
			$("#clickregion").text(code);
		}
	});
	/********** ********** **********/
});
