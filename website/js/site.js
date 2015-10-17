// Main Navigation
var JQVMap = {
	init: function() {

        var map_width = (jQuery('#pages').width());

		if(map_width > 480)
		{
			map_width -= 40;
		}

		jQuery('.map').css({ 'width': map_width + 'px', 'height': (map_width*.75)+ 'px' });
		jQuery('#pages dd, #pages p, #pages div.inner').css({ 'width': map_width + 'px' });

        jQuery('#world_map').vectorMap({
			map: 'world_en',
			backgroundColor: null,
			color: '#ffffff',
			hoverOpacity: 0.7,
			selectedColor: '#666666',
			enableZoom: true,
			showTooltip: true,
			values: sample_data,
			scaleColors: ['#C8EEFF', '#006491'],
			normalizeFunction: 'polynomial'
		});

		jQuery('#usa_map').vectorMap({
			map: 'usa_en',
			backgroundColor: null,
			color: '#ffffff',
			hoverColor: '#999999',
			selectedColor: '#666666',
			enableZoom: true,
			showTooltip: true,
			selectedRegions: ['MO', 'FL', 'OR']
		});

        jQuery('#europe_map').vectorMap({
			map: 'europe_en',
			backgroundColor: null,
			color: '#ffffff',
			hoverColor: '#999999',
			enableZoom: false,
			showTooltip: false
		});

        jQuery('#germany_map').vectorMap({
			map: 'germany_en',
			onRegionClick: function(element, code, region)
			{
				var message = 'You clicked "'
					+ region
					+ '" which has the code: '
					+ code.toUpperCase();

				alert(message);
			}
		});

		jQuery("a[href*=#]").click(function(e) {
			e.preventDefault();
			if(jQuery(this).attr("href").split("#")[1]) {
				JQVMap.goTo(jQuery(this).attr("href").split("#")[1]);
			}
		});

		this.goTo("home");

		SyntaxHighlighter.defaults['gutter'] = false;
		SyntaxHighlighter.all();

		setTimeout(function(){ jQuery('.toolbar').hide(); }, 500 );
	},
	goTo: function(page) {
		var next_page = jQuery("#"+page);
		var nav_item = jQuery('nav ul li a[href=#'+page+']');
		jQuery("nav ul li").removeClass("current");
		nav_item.parent().addClass("current");
		JQVMap.resizePage((next_page.height() + 40), true, function() {
			 jQuery(".page").removeClass("current"); next_page.addClass("current");
		});
		jQuery(".page").fadeOut(500);
		next_page.fadeIn(500);

		JQVMap.centerArrow(nav_item);

	},
	centerArrow: function(nav_item, animate) {
		var left_margin = (nav_item.parent().position().left + nav_item.parent().width()) + 24 - (nav_item.parent().width() / 2);
		if(animate != false) {
			jQuery("nav .arrow").animate({
				left: left_margin - 8
			}, 500, function() { jQuery(this).show(); });
		} else {
			jQuery("nav .arrow").css({ left: left_margin - 8 });
		}
	},
	resizePage: function(size, animate, callback) {
		if(size) { var new_size = size; } else { var new_size = jQuery(".page.current").height() + 40; }
		if(!callback) { callback = function(){}; }
		if(animate) {
			jQuery("#pages").animate({ height: new_size }, 400, function() { callback.call(); });
		} else {
			jQuery("#pages").css({ height: new_size });
		}

        var map_width = (jQuery('#pages').width());

		if(map_width > 480)
		{
			map_width -= 40;
		}

		jQuery('.map').css({ 'width': map_width + 'px', 'height': (map_width*.75)+ 'px' });
		jQuery('#pages dd, #pages p, #pages div.inner').css({ 'width': map_width + 'px' });
	}
};

// Fix page height and nav on browser resize
jQuery(window).resize(function() {
		JQVMap.resizePage();
		JQVMap.centerArrow(jQuery("nav ul li.current a"), false);
});

jQuery(document).ready(function() {

	// Initialize navigation
	JQVMap.init();

	// Enable mobile drop down navigation
	jQuery("nav ul").mobileMenu();

	// Form hints
	jQuery("label").inFieldLabels({ fadeOpacity: 0.4 });

	jQuery("nav select").change(function() {
		if(this.options[this.selectedIndex].value != "#") {
			var page = this.options[this.selectedIndex].value.split("#")[1];
	 		JQVMap.goTo(page);
			jQuery("html,body").animate({ scrollTop:jQuery('#'+page).offset().top }, 700);
		}
	});

	// Toggle lists
	jQuery(".toggle_list ul li .title").click(function() {
		var content_container = jQuery(this).parent().find(".content");
		if(content_container.is(":visible")) {
			var page_height = jQuery(".page.current").height() - content_container.height();
			JQVMap.resizePage(page_height, true);
			content_container.slideUp();
			jQuery(this).find("a.toggle_link").text(jQuery(this).find("a.toggle_link").data("open_text"));
		} else {
			var page_height = jQuery(".page.current").height() + content_container.height() + 40;
			JQVMap.resizePage(page_height, true);
			content_container.slideDown();
			jQuery(this).find("a.toggle_link").text(jQuery(this).find("a.toggle_link").data("close_text"));
		}
	});

	jQuery(".toggle_list ul li .title").each(function() {
		jQuery(this).find("a.toggle_link").text(jQuery(this).find("a.toggle_link").data("open_text"));
		if(jQuery(this).parent().hasClass("opened")) {
			jQuery(this).parent().find(".content").show();
		}
	});

	// Tooltips
	jQuery("a[rel=tipsy]").tipsy({fade: true, gravity: 's', offset: 5, html: true});

	jQuery("ul.social li a").each(function() {
		if(jQuery(this).attr("title")) {
			var title_text = jQuery(this).attr("title");
		} else {
			var title_text = jQuery(this).text();
		}
		jQuery(this).tipsy({
				fade: true,
				gravity: 'n',
				offset: 5,
				title: function() {
					return title_text;
				}
		});
	});
});
