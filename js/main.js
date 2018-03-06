$(document).ready(function(){

	//HP Scroll to
	$('aside nav ul li a').click(function(e){
		e.preventDefault();
		var div = '.' + $(this).attr('data-id');

		$('html, body').animate({
		    scrollTop: $(div).offset().top
		}, 850);

		$('aside nav ul li a').removeClass('on');
		$(this).addClass('on');
	});
	// HP icon down
	$('a.down').click(function(e){
		e.preventDefault();
		var div = '.' + $(this).attr('data-id');

		$('html, body').animate({
		    scrollTop: $(div).offset().top
		}, 850);
	});

	//OPEN LOGIN BLOCK
	$('.log').click(function(e){
		e.preventDefault();
		$('.login').fadeIn(500);
		$('.overlay').fadeIn(500);
	});

	$('.login a.close').click(function(e){
		e.preventDefault();
		$('.login').fadeOut(500);
		$('.overlay').fadeOut(500);
	})


		//OPEN DENUNCIO BLOCK
		$('.denuncio').click(function(e){
			e.preventDefault();
			$('.login1').fadeIn(500);
			$('.overlay1').fadeIn(500);
		});

		$('.login1 a.close').click(function(e){
			e.preventDefault();
			$('.login1').fadeOut(500);
			$('.overlay1').fadeOut(500);
		})


		//OPEN MENSAGEM BLOCK
		$('.openmensagem').click(function(e){
			e.preventDefault();
			$('.login2').fadeIn(500);
			$('.overlay2').fadeIn(500);
		});

		$('.login2 a.close').click(function(e){
			e.preventDefault();
			$('.login2').fadeOut(500);
			$('.overlay2').fadeOut(500);
		})




		//OPEN REVIEW BLOCK
		$('.openreview').click(function(e){
			e.preventDefault();
			$('.login3').fadeIn(500);
			$('.overlay3').fadeIn(500);
		});

		$('.login3 a.close').click(function(e){
			e.preventDefault();
			$('.login3').fadeOut(500);
			$('.overlay3').fadeOut(500);
		})









	//MANAGE ACC TASK
	$('.hub .row').click(function(e){
		/*e.preventDefault();*/
		$('.row').removeClass('open');
		$(this).addClass('open');
	});


	$('.hub2 .row').click(function(e){
		/*e.preventDefault();*/
		$('.row').removeClass('open');
		$(this).addClass('open');
	});






		if ($('body.home').length > 0){
  				//Aside state
				var hero = $('.hero').offset().top;
				var works = $('.works').offset().top;
				var why = $('.why').offset().top;
			    $window = $(window);

				$window.scroll(function() {
				    if ( $window.scrollTop() >= hero ) {
				        $('aside nav ul li a').removeClass('on');
				        $('aside nav ul li a.heroAnchor').addClass('on');
				    }
				    if ( $window.scrollTop() >= works ) {
				        $('aside nav ul li a').removeClass('on');
				        $('aside nav ul li a.worksAnchor').addClass('on');
				    }
				    if ( $window.scrollTop()  > works + 100 ) {
				        $('aside nav ul li a').removeClass('on');
				        $('aside nav ul li a.whyAnchor').addClass('on');
				    }
				});
		}



	//Userbar menus
	var toogleNotificationMenu = false;
	$('.userbar .wrapper ul li.notifications a').on('click', function(e){
		/*e.preventDefault();*/
	 if (!toogleNotificationMenu){
	  $('.userbar .wrapper ul li.notifications a').removeClass('selected');
		$(this).addClass('selected');
		$(this).parent().find('ul').slideDown(300);
	  toogleNotificationMenu = true;
	 }
	 else {
	  $('.userbar .wrapper ul li.notifications a').removeClass('selected');
		$(this).parent().find('ul').slideUp(300);
	  toogleNotificationMenu = false;
	 }
	});

	var toogleUserMenu = false;
	$('.userbar .wrapper ul li.user a').on('click', function(e){
		/*e.preventDefault();*/
	 if (!toogleUserMenu){
	  $('.userbar .wrapper ul li.user a').removeClass('selected');
		$(this).addClass('selected');
		$(this).parent().find('ul').slideDown(300);
	  toogleUserMenu = true;
	 }
	 else {
	  $('.userbar .wrapper ul li.user a').removeClass('selected');
		$(this).parent().find('ul').slideUp(300);
	  toogleUserMenu = false;
	 }
	});

	//Ranking


	$('.ranking a.star').click(function(e){
		e.preventDefault();
  		$( this ).toggleClass( "on" );

  		var stars = $('.ranking a.star.on').length

		$('#starRanking').val(stars)
	});



})
