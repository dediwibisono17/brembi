$('.why .owl-carousel').owlCarousel({
	    stagePadding: 200,
	    loop:true,
	    margin:10,
	    nav:false,
	    autoHeight: true,
	    items:1,
	    lazyLoad: true,
	    nav:true,
	  	responsive:{
	        0:{
	            items:1,
	            stagePadding: 60
	        },
	        600:{
	            items:1,
	            stagePadding: 100
	        },
	        1000:{
	            items:1,
	            stagePadding: 200
	        },
	        1200:{
	            items:1,
	            stagePadding: 250
	        },
	        1400:{
	            items:1,
	            stagePadding: 300
	        },
	        1600:{
	            items:1,
	            stagePadding: 350
	        },
	        1800:{
	            items:1,
	            stagePadding: 400
	        }
	    }
	})
	$(window).scroll(function() {
	  if ($(document).scrollTop() > 50) {
	    $('nav').removeClass("menu-top").addClass('menu-top-small');
	  } else {
	    $('nav').removeClass('menu-top-small').addClass('menu-top');
	  }
	});
    $('.owl-carousel').owlCarousel({
	    items: 1,
	    margin: 10,
	    autoHeight: true,
	    nav:true,
	    loop:true
	  });
    $(function () {
	    function isScrolledIntoView($elem) {
	        var docViewTop = $(window).scrollTop();
	        var docViewBottom = docViewTop + $(window).height();
	        var elemTop = $elem.offset().top;
	        var elemBottom = elemTop + $elem.height();
	        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	    }

	    function count($this) {
	        var current = parseInt($this.html(), 10);
	        if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
	            $this.html(++current);
	            $this.data("isCounting", true);
	            setTimeout(function () {
	                $this.data("isCounting", false);
	                count($this);
	            }, 1);
	        }
	    }

	    $(".count").each(function () {
	        $(this).data('count', parseInt($(this).html(), 10));
	        $(this).html('1900');
	        $(this).data("isCounting", false);
	    });

	    function startCount() {
	        $(".count").each(function () {
	            count($(this));
	        });
	    };
	    $(window).scroll(function () {
	        startCount();
	    });
	  });

	  $("#scroll-top").hide();
		// fade in #back-top
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('#scroll-top').fadeIn();
				} else {
					$('#scroll-top').fadeOut();
				}
			});
			// scroll body to 0px on click
			$('#scroll-top button').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 800);
			});
		});

		//faq
	    $('.collapsible').collapsible();
 		
        function setCookie(cname,cvalue,exdays) {
		    var d = new Date();
		    d.setTime(d.getTime() + (exdays*24*60*60*1000));
		    var expires = "expires=" + d.toGMTString();
		    document.cookie = cname + "=" + cvalue + ";" + expires + ";domain=.brembi.com;path=/";
		}

		function getCookie(cname) {
		    var name = cname + "=";
		    var decodedCookie = decodeURIComponent(document.cookie);
		    var ca = decodedCookie.split(';');
		    for(var i = 0; i < ca.length; i++) {
		        var c = ca[i];
		        while (c.charAt(0) == ' ') {
		            c = c.substring(1);
		        }
		        if (c.indexOf(name) == 0) {
		            return c.substring(name.length, c.length);
		        }
		    }
		    return "";
		}