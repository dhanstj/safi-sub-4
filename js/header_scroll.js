
$(document).ready(function(){ 
	 $('#header_scroll .b').hide();
  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header_scroll').addClass('header-scrolled');
	  $('#header_scroll .a').fadeOut(0);
	  $('#header_scroll .b').fadeIn(0);
    } else {
      $('#header_scroll').removeClass('header-scrolled');
	   $('#header_scroll .b').fadeOut(0);
	  $('#header_scroll .a').fadeIn(0);
    }
  })

 });
