/* This file sets up the viewer display and controls */
$(document).ready(function() {
	/* Create the view */
	$('#view').html(views[currentView]);
	$('#component').hide();

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
	$('body').css({
		'margin' : '0',
		'padding' : '0'
	})

	$('#' + viewerId).css({
		'position' : 'relative',
		'width': viewWidth,
		'height': viewHeight,
		'margin': '0 auto'
	});

	$('#view').css({
		'height' : '100%',
		'width' : '100%'
	});

	$('#component').css({
		'height' : '100%',
		'left' : '0',
		'position' : 'absolute',
		'top' : '0',
		'width' : '100%',
		'z-index' : '25'
	});

	$('#component > img').css({
		'display' : 'block'
	});

	$('img').css('border', '0');

	$('.view').css({
		'height' : '100%',
		'width' : '100%'
	});
	$('.controls').css({
		'cursor' : 'pointer',
		'filter' : 'alpha(opacity=75)',
		'opacity' :'0.75',
		'position' : 'absolute',
		'width' : '50px',
		'z-index' : '50'
	});

	$('.hotspot').css({
		'border' : '1px solid white',
		'cursor' : 'pointer',
		'display' : 'none',
		'position' : 'absolute',
		'z-index' : '20'
	});

	$('.hotspot > div').css({
		'height' : '100%',
		'width' : '100%'
	});

	$('.hotspot > div').hover(
		function() {
			$(this).css({
				'background-color' : 'white',
				'filter' : 'alpha(opacity=30)',
				'opacity' : '0.3'
			});
		},
		function() {
			$(this).css('background-color', 'transparent');
		}
	);

	/* Set the initial click regions */
	$('.view' + $('#view > img').attr('id')).show();

	/* Hover over controls */
	$('.controls').hover(
		function() {
			if ($(this).attr('alt') == 'leftarrow') {
				$(this).attr('src', '/viewer/images/leftarrow-hover.png');
			} else if ($(this).attr('alt') == 'rightarrow') {
				$(this).attr('src', '/viewer/images/rightarrow-hover.png');
			} else if ($(this).attr('alt') == 'help') {
				$(this).attr('src', '/viewer/images/help-hover.png');
			}
		},
		function() {
			if ($(this).attr('alt') == 'leftarrow') {
				$(this).attr('src', '/viewer/images/leftarrow.png');
			} else if ($(this).attr('alt') == 'rightarrow') {
				$(this).attr('src', '/viewer/images/rightarrow.png');
			} else if ($(this).attr('alt') == 'help') {
				$(this).attr('src', '/viewer/images/help.png');
			}
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
		}
		$('#view').html(views[currentView]);
		$('.hotspot').hide();
		$('.view' + $('#view > img').attr('id')).show();
	});

	$('#component').click(function() {
		if (componentOn) {
			$('#component').hide();
			componentOn = false;
		}
	});

	/* Click on region */
	var componentOn = false;
	$('.hotspot').click(function() {
		console.log($(this).attr('class'));
		if (componentOn == false) {
			for (i = 0; i < components.length; i++) {
				if ($(this).hasClass('component' + components[i].id)) {
					$('#component').css({
						'background' : 'url(' + components[i].src + ') 50% 50% no-repeat'
					});
					$('#component').show();
					componentOn = true;
				}
			}
		}
	});
});

