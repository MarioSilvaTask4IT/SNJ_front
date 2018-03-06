// JavaScript Document

	jQuery(document).ready(function(){
		var html = '<div class="mob-header"><span class="mob_button"><i class="fa fa-bars"></i></span></div>';
		jQuery("header .mainmenu").before(html);
		///
	  	jQuery("header").on('click', 'span.mob_button', (function(){
			jQuery('div.mainmenu').prepend('<div class="close"><i class="fa fa-times" aria-hidden="true"></i></div>');
			jQuery('div.close').fadeOut(0).fadeIn(2000);
			jQuery('div.mainmenu > ul').fadeOut(0).fadeIn(2000);
			jQuery('header .wrapper .mainmenu').addClass('open').fadeIn(2000);
			
	  	}));
	  ///
	  	jQuery("header").on('click', 'div.close', (function(){
			jQuery('div.close').fadeOut(2000);
			jQuery('div.mainmenu').fadeOut(2000);
			jQuery('header .mainmenu > ul').fadeOut(2000);
			//jQuery('div.mainmenu').wait(4000).removeClass('open');
			setTimeout(function(){
  			jQuery('div.mainmenu').removeClass('open');
			jQuery('div.close').remove();
			}, 2200);
	  	}));
	  ///
	  /* ----- dashboard ------ */
	  
	  var html2 = '<div class="mob-header"><span class="mobbtn"><i class="fa fa-bars"></i></span></div>';
	  jQuery(".white > .userbar > .wrapper > ul").before(html2);
	  ////
	  jQuery("body.white").on('click', 'span.mobbtn', (function(){
		jQuery(".white > .userbar > .wrapper > ul").fadeIn(600);
		///
		jQuery(".white > .userbar > .wrapper > ul").prepend('<div class="closebtn"><i class="fa fa-times" aria-hidden="true"></i></div>');
		
	  }));
	  ////
	  jQuery("body.white").on('click', '.closebtn', (function(){
		  jQuery(this).remove();
		jQuery(".white > .userbar > .wrapper > ul").fadeOut(600);
	  }));
	  
	  if (jQuery(window).width() < 768) {
		jQuery('#client-hub .hub > h2').insertBefore('#client-hub .hub .left > span ');
		jQuery('#client-hub .hub > h3').insertBefore('#client-hub .hub .center > p:first-child ');
	  }
	  ///// subbuton
	  /*var subbtn = '<span class="subul">+</span>';
	  jQuery(".white > .userbar > .wrapper > ul > li > ul").before(subbtn);
	  jQuery("body.white").on('click', '.subul', (function(){
		  jQuery(this).next('ul').slideDown();
		  jQuery(this).removeClass('subul').addClass('subulopen').text('-');
	  }));
	  jQuery("body.white").on('click', '.subulopen', (function(){
		  jQuery(this).next('ul').slideUp();
		  jQuery(this).removeClass('subulopen').addClass('subul').text('+');
	  }));*/
	  ///
	  
	  
	  
	  
	  
	});
