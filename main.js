$(function() {
	$(".mask").each(function(index) {
		$(this).click(function() {
			$("#card" + index).show();
			$(".cardtable").addClass("fadeIn");
		});
	});

	$(".cardContent").each(function(index) {
		$(this).click(function() {
			$("#card" + index).hide();
		});
	});

	$("nav a, footer a[href='#tos']").on("click", function(e) {
		if(this.hash !== "") {
			e.preventDefault();
			var hash = this.hash;
			$("html, body").animate({
				scrollTop: $(hash).offset().top
			}, 900, function() {
				window.location.hash = hash;
			});
		}
	});

	$(window).scroll(function() {
		$(".slideR").each(function() {
			if($(this).offset().top < $(window).scrollTop() + 400) {
				$(this).addClass("slideRight");
			}
		});
		$(".slideL").each(function() {
			if($(this).offset().top < $(window).scrollTop() + 400) {
				$(this).addClass("slideLeft");
			}
		});
		$(".slideU").each(function() {
			if($(this).offset().top < $(window).scrollTop() + 400) {
				$(this).addClass("slideUp");
			}
		});
	});

	$('[data-toggle="tooltip"]').tooltip(); 
});
