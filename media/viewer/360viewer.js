/* This file sets up the viewer display and controls */
$(document).ready(function() {
	/* Create the view */
	$("#viewer").append("<img src=\"" + folder + "/View0.png\" alt=\"View\" />");

	/* Create the controls */
	$("#viewer").append("<img src=\"" + folder + "/leftarrow.png\" alt=\"leftarrow\" class=\"controls\"/>");
	$("#viewer").append("<img src=\"" + folder + "/rightarrow.png\" alt=\"rightarrow\" class=\"controls\"/>");
	$("#viewer").append("<img src=\"" + folder + "/help.png\" alt=\"help\" class=\"controls\"/>");

	/* Move the controls into place */
	$(window).load(function() {
		var left = $("#viewer").offset().left + 10;
		var top = $("#viewer").offset().top + ($("#viewer").height() / 2) - ($("img[alt=leftarrow]").height() / 2);
		$("img[alt=leftarrow]").offset({ left: left, top: top });
		left = $("#viewer").offset().left + $("#viewer").width() - $("img[alt=rightarrow]").width() - 10;
		$("img[alt=rightarrow]").offset({ left: left, top: top });
		left = $("#viewer").offset().left + 10;
		top = $("#viewer").offset().top + $("#viewer").height() - $("img[alt=help]").height() - 10;
		$("img[alt=help]").offset({ left: left, top: top });
	});

	/* Set the CSS for the viewer */
	$("#viewer").css({
		"position" : "relative",
		"width": viewWidth,
		"height": viewHeight,
		"margin": "0 auto"
	});

	$("img").css("border", "none");

	$("img[alt=View]").css({
		"width" : "100%",
		"height" : "100%"
	});
	$(".controls").css({
		"position" : "absolute",
		"width" : "50px",
		"opacity" :"0.75",
		"filter" : "alpha(opacity=75)",
		"cursor" : "pointer",
		"z-index" : "50"
	});

	$(".components").css({
		"display" : "none",
		"position" : "absolute",
		"border" : "1px solid white",
		"z-index" : "20"
	});

	$(".components > div").css({
		"width" : "100%",
		"height" : "100%",
		"cursor" : "pointer"
	});

	$(".components > div").hover(
		function() {
			$(this).css({
				"background-color" : "white",
				"opacity" : "0.3",
				"filter" : "alpha(opacity=30)"
			});
		},
		function() {
			$(this).css("background-color", "transparent");
		}
	);

	/* Set the intitial click regions */
	$(".View" + currentView).show();

	/* Hover over controls */
	$(".controls").hover(
		function() {
			if ($(this).attr("alt") == "leftarrow") {
				$(this).attr("src", folder + "/leftarrow-hover.png");
			} else if ($(this).attr("alt") == "rightarrow") {
				$(this).attr("src", folder + "/rightarrow-hover.png");
			} else if ($(this).attr("alt") == "help") {
				$(this).attr("src", folder + "/help-hover.png");
			}
		},
		function() {
			if ($(this).attr("alt") == "leftarrow") {
				$(this).attr("src", folder + "/leftarrow.png");
			} else if ($(this).attr("alt") == "rightarrow") {
				$(this).attr("src", folder + "/rightarrow.png");
			} else if ($(this).attr("alt") == "help") {
				$(this).attr("src", folder + "/help.png");
			}
		}
	);

	/* Click on controls */
	$(".controls").click(function() {
		var previousView = currentView;
		if ($(this).attr("alt") == "leftarrow") {
			if (currentView == 0) {
				currentView = views.length - 1;
			} else {
				currentView--
			}
		} else if ($(this).attr("alt") == "rightarrow") {
			if (currentView == views.length - 1) {
				currentView = 0
			} else {
				currentView++;
			}
		}

		if (componentOn) {
			componentOn = false;
			$("img[alt=component]").unbind("click");
			$("#screen").remove();
			$("img[alt=component]").remove();
		}
		$(".View" + previousView).hide();
		$("img[alt=View]").attr("src", views[currentView].src);
		$("img[alt=View]").load(function() {
			$(".View" + currentView).show();
		});
	});

	/* Click on region */
	var componentOn = false;
	$(".components").click(function() {
		if (componentOn == false) {
			var index = parseInt($(this).attr("class").split(" ")[2]);
			var component = "<img src=\"" + components[index].src +
				"\" alt=\"component\" />";
			$("#viewer").append(component);
			$("img[alt=component]").load(function() {
				$(this).css({ "width" : components[index].width,
					"height" : components[index].height, "z-index" : "1000" });
				var top = $("#viewer").offset().top + ($("#viewer").height() / 2) -
					($("img[alt=component]").height() / 2);
				var left = $("#viewer").offset().left + ($("#viewer").width() / 2) -
					($("img[alt=component]").width() / 2);
				$("img[alt=component]").offset({ left: left, top: top });
			});
			$("#viewer").append("<div id=\"screen\"></div>");
			$("#screen").css({
				"position" : "absolute",
				"top" : "0",
				"left" : "0",
				"width" : "100%",
				"height" : "100%",
				"background-color" : "#333",
				"opacity" : "0.5",
				"filter" : "alpha(opacity=50)",
				"z-index" : "5"
			});
			componentOn = true;

			$("img[alt=component]").click(function() {
				componentOn = false;
				$(this).unbind("click");
				$("#screen").remove();
				$(this).remove();
			});
		}
	});
});

