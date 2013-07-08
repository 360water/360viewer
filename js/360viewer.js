/* This file sets up the viewer display and controls */
$(document).ready(function() {
	/* Create the view */
	$('#view').html(views[currentView]);
	$('#component').hide();
	$('#screen').hide();

	/* Create the controls */
	$('#' + viewerId).append('<img src="/viewer/images/leftarrow.png" alt="leftarrow" class="controls"/>');
	$('#' + viewerId).append('<img src="/viewer/images/rightarrow.png" alt="rightarrow" class="controls"/>');
	$('#' + viewerId).append('<img src="/viewer/images/help.png" alt="help" class="controls"/>');

	/* Move the controls into place */
	$(window).load(function() {
		controlTop = $('#' + viewerId).height() / 2 - ($('img[alt=leftarrow]').height() / 2);
		$('img[alt=leftarrow]').css({ 'left' : '10px', 'top' : controlTop });
		$('img[alt=rightarrow]').css({ 'right' : '10px', 'top' : controlTop });
		$('img[alt=help]').css({ 'left' : '10px', 'bottom' : '10px' });
	});

	/* Set the CSS for the viewer */
	$('.viewer').css({
		'width': viewWidth,
		'height': viewHeight,
	});

	/* Set the initial click regions */
	$('.view' + $('#view > img').attr('id')).show();
	$('.view' + $('#view > img').attr('id')).css('background-image', 'url("' + views[currentView].src + '")');

	/* Hover over controls */
	$('.controls').hover(
		function() {
			if ($(this).attr('alt') == 'leftarrow') {
				$(this).attr('src', '/viewer/images/leftarrow-hover.png');
				$('#screen').fadeOut();
			} else if ($(this).attr('alt') == 'rightarrow') {
				$(this).attr('src', '/viewer/images/rightarrow-hover.png');
				$('#screen').fadeOut();
			} else if ($(this).attr('alt') == 'help') {
				$(this).attr('src', '/viewer/images/help-hover.png');
				$('#help').show(300);
			}
		},
		function() {
			if ($(this).attr('alt') == 'leftarrow') {
				$(this).attr('src', '/viewer/images/leftarrow.png');
				$('#screen').fadeIn();
			} else if ($(this).attr('alt') == 'rightarrow') {
				$(this).attr('src', '/viewer/images/rightarrow.png');
				$('#screen').fadeIn();
			} else if ($(this).attr('alt') == 'help') {
				$(this).attr('src', '/viewer/images/help.png');
				$('#help').hide(300);
			}
		}
	);

	$(document).hover(
		function() {
			$('#screen').fadeIn();
		},
		function() {
			$('#screen').fadeOut();
		}
	);

	/* Click on controls */
	$('.controls').click(function() {
		var previousView = currentView;
		if ($(this).attr('alt') == 'leftarrow') {
			if (currentView == 0) {
				currentView = views.length - 1;
			} else {
				currentView--
			}
		} else if ($(this).attr('alt') == 'rightarrow') {
			if (currentView == views.length - 1) {
				currentView = 0
			} else {
				currentView++;
			}
		}

		if (componentOn) {
			componentOn = false;
			$('img[alt=component]').unbind('click');
			$('#screen').remove();
			$('img[alt=component]').remove();
			$('#component').hide();
			$('#close').hide();
		}
		$('#view').html(views[currentView]);
		$('.hotspot').hide();
		$('.view' + $('#view > img').attr('id')).show();
		$('.view' + $('#view > img').attr('id')).css('background-image', 'url("' + views[currentView].src + '")');
	});

	$('#component, #close').click(function() {
		if (componentOn) {
			$('#component').hide();
			$('#close').hide();
			componentOn = false;
		}
	});

	/* Click on region */
	var componentOn = false;
	$('.hotspot').click(function() {
		if (componentOn == false) {
			for (i = 0; i < components.length; i++) {
				if ($(this).hasClass('component' + components[i].id)) {
					$('#component').html(components[i]);
					$('#component').show();
					componentHeight = $('#component').height();
					imageHeight = $('#component > img').height();
					imageTop = componentHeight / 2 - imageHeight / 2;

					$('.component').css({
						'border' : '1px solid #fff',
						'box-shadow' : '0 0 1em #000',
						'display' : 'block',
						'margin' : '0 auto',
						'position' : 'relative',
						'top' : imageTop + 'px'
					});

					closeLeft = $('#component').width() / 2 + $('#component > img').width() / 2;
					closeTop = imageTop;
					$('#close').css({ 'left' : closeLeft - 15, 'top' : closeTop - 15 });
					$('#close').show();
					$('#screen').show();
					componentOn = true;
				}
			}
		}
	});
});

