$(document).ready(function() {
	var scrollPosition = {},
		scrollAnchor = {},
		scrollElement = {},
		firstAnchor = document.URL.indexOf('#') < 0,
		urlAnchor = false,

		scrollTo = function(t) {
			$('.mdl-layout__content').animate({
				scrollTop: t
			}, 500);
		};

	var scrollToId = function(id) {
		if (scrollElement[id])
			scrollTo(scrollElement[id].offset().top - 60);
	};

	// Get each anchor in the page

	var updatePositions = function() {
		$('[data-ref]').each(function() {
			var ref = $(this),
				id = ref.data('ref');

			scrollPosition[id] = ref.offset().top;
			console.log(id + ' - ' + scrollPosition[id]);
		});
	};

	$('[data-ref]').each(function() {
		var ref = $(this),
			id = ref.data('ref');

		scrollElement[id] = ref;
		scrollPosition[id] = ref.offset().top;
		scrollAnchor[id] = $('<p></p>').append(ref.data('text'))
			.addClass('mdl-anchor mdl-anchor--level-' + ref.data('level'))
			.click(function() {
				//updatePositions();
				scrollTo(scrollPosition[id] - 60);
			});

		if (firstAnchor) {
			scrollAnchor[id].addClass('active');
			firstAnchor = false;
		}

		$('#toolbar').append(scrollAnchor[id]);
	});

	// Check for URL reference
	if (document.URL.indexOf('#') > 0) {
		urlAnchor = true;
		var urlRef = document.URL.substring(document.URL.indexOf('#') + 1);
		setTimeout(function() {
			scrollToId(urlRef);
		}, 300);
		// if (scrollAnchor[urlRef]) {
		// 	scrollTo(scrollPosition[urlRef] - 60);
		// }
	}

	// Scroll handler
	$('.mdl-layout__content').scroll(function() {
		if (urlAnchor) {
			urlAnchor = false;
			return;
		}
		var min = null,
			minId,
			scroll = $('.mdl-layout__content').scrollTop();

		$.each(scrollPosition, function(id, top) {
			if (min === null || (top > min && top <= scroll + 100)) {
				min = top;
				minId = id;
			}
		});

		$('#toolbar .mdl-anchor').removeClass('active');
		scrollAnchor[minId].addClass('active');
		if (window.history.replaceState)
			window.history.replaceState(null, null, '#' + minId);

		var toolbarOffset = scroll + $('.mdl-layout__content').height() - $('.content').height() - 50;
		$('#toolbar').css('top', (toolbarOffset > 0) ? (-1 * toolbarOffset + 'px') : '0px' );
	});
});

$(document).ready(function() {
	$('[data-definition]').each(function() {
		var def = $(this),
			defView, defArrow,
			showDef, hideDef,
			visibleDef = false,
			clickDef = false;

		def.css('position', 'relative');

		showDef = function() {
			if (visibleDef) return;
			visibleDef = true;

			if (! defView) {
				defViewData = $('[data-define="' + def.data('definition') + '"]');
				if (defViewData.length > 0) {
					var defText = defViewData.data('text'),
						defImage = defViewData.data('image');

					defArrow = $('<div></div>').addClass('mdl-definition-arrow');

					defView = $('<div></div>')
						.append($('<p></p>').append(defText))
						.addClass('mdl-definition-popover')
						.addClass('mdl-shadow--4dp');

					if (defImage) {
						defView.append($('<img>').attr('src', defImage));
					}
				}
			}
			var left = 0, width = 250;
			while (def.offset().left + left + width > $(document).width() - 40 ) {
				left--;
			}
			defView.css('left', left + 'px');
			defView.css('width', width + 'px');
			def.append(defArrow.hide().fadeIn('fast'));
			def.append(defView.hide().fadeIn('fast'));
		};

		hideDef = function() {
			if (! visibleDef) return;
			visibleDef = false;

			defArrow.hide();
			defView.fadeOut('fast', function() {
				defView.remove();
				defArrow.remove();
			});
		};

		def.hover(showDef, hideDef);

		// mobile devices
		def.click(function() {
			if (clickDef) hideDef();
			else showDef();
			clickDef = ! clickDef;
		})
	});
});