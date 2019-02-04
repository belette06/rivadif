// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

$(document).ready(function(){

		var scrollLink = $('.scroll');
    
	scrollLink.click(function(event){
	    event.preventDefault(); //prevents default jump to section.
	    $('body,html').animate({
	      scrollTop: $(this.hash).offset().top
	    }, 1000);
	 });





$(window).scroll(function() {

	var scrollLink = $('.scroll');
     var scrollBarLocation = $(this).scrollTop();
 
	 
    if ($(window).scrollTop() > 900) {
        $('nav').addClass('fixed-top');        
    } 
    else {
        $('nav').removeClass('fixed-top');
    }

    scrollLink.each(function(){

      //creates a variable for the offset from the window top to the section with the link id
      var  sectionOffset = $(this.hash).offset().top-30;

      //if scrolled further/equal to the id of the link, add active class to anchor parent(li) and remove active class from anchor parent siblings (other li). Else remove active class,
      if(sectionOffset <= scrollBarLocation){
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
 
});

});