
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
	    $("nav").css("background" , "#12771c");
	  }

	  else{
		  $("nav").css("background" , "transparent");  	
	  }
  })
})

