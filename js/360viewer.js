/* This file sets up the viewer display and controls */
$(document).ready(function() {
	/* Create the view */
	$('#view').html(views[currentView]);
	$('#component').hide();
	$('#screen').hide();

	/* Create the controls */
	$('#' + viewerId).append('<img src="/images/viewer/leftarrow.png" alt="leftarrow" class="controls"/>');
	$('#' + viewerId).append('<img src="/images/viewer/rightarrow.png" alt="rightarrow" class="controls"/>');
	$('#' + viewerId).append('<img src="/images/viewer/help.png" alt="help" class="controls"/>');

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
		'height': viewHeight
	});

	/* Set the initial click regions */
	$('.view' + $('#view > img').attr('id')).show();
	$('.view' + $('#view > img').attr('id')).css('background-image', 'url("' + views[currentView].src + '")');

	/* Hover over controls */
	$('.controls').hover(
		function() {
			if ($(this).attr('alt') == 'leftarrow') {
				$(this).attr('src', '/images/viewer/leftarrow-hover.png');
				$('#screen').fadeOut();
			} else if ($(this).attr('alt') == 'rightarrow') {
				$(this).attr('src', '/images/viewer/rightarrow-hover.png');
				$('#screen').fadeOut();
			} else if ($(this).attr('alt') == 'help') {
				$(this).attr('src', '/images/viewer/help-hover.png');
				$('#help').show(300);
			}
		},
		function() {
			if ($(this).attr('alt') == 'leftarrow') {
				$(this).attr('src', '/images/viewer/leftarrow.png');
				$('#screen').fadeIn();
			} else if ($(this).attr('alt') == 'rightarrow') {
				$(this).attr('src', '/images/viewer/rightarrow.png');
				$('#screen').fadeIn();
			} else if ($(this).attr('alt') == 'help') {
				$(this).attr('src', '/images/viewer/help.png');
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

	$(window).load(function() {
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
				$('#component').fadeOut();
				$('#close').fadeOut();
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
						$('#component').fadeIn();
						componentHeight = $('#component').height();
						imageHeight = $('#component > img').height();
						imageTop = componentHeight / 2 - imageHeight / 2;

						$('.component').css({
							'top' : imageTop + 'px'
						});

						closeLeft = $('#component').width() / 2 + $('#component > img').width() / 2;
						closeTop = imageTop;
						$('#close').css({ 'left' : closeLeft - 15, 'top' : closeTop - 15 });
						$('#close').fadeIn();
						$('#screen').fadeIn();
						componentOn = true;
					}
				}
			}
		});
	});
});

