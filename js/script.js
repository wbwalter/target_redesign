$function () {
	var menu       = $( ".nav_icon" );
    var cat_links  = $( ".primary-nav-wrap > ul > li > a" );
    var sub        = $( ".sub_nav" );
    var sub_nav    = $( ".sub-links ul li a")
    var wrapper    = $( ".wrapper" );
    var back       = $(".back");

    .menu.on("click" function( e ) ){
    	wrapper.addClass( "cat-nav");
    	e.preventDefault();
    )};
	.cat_links.on("click" function( e ) {
		wrapper.removeClass("cat-nav");
		wrapper.addClass("sub-nav");
		e.preventDefault();
	)};
	sub.on("click" function( e ) {
		wrapper.removeClass("sub-nav");
		wrapper.addClass("sub_links");
		e.preventDefault();
	});
	sub_nav.on("click" function( e ) {
		wrapper.removeClass("sub_sub_nav");
		e.preventDefault();
	});
	back.on("click" function( e ) {
		wrapper.removeClass( "cat_nav_state sub_nav_state" );
        e.preventDefault();
    });
});
