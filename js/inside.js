// Start Jquery 
$(function () {
    // cursor animation 
        $(document).on("mousemove",function(e){
            $(".cursor").css({"left":e.pageX + "px"});
            $(".cursor").css({"top":e.pageY + "px"});
        });
        // navbar 
        $(".links").on("mousemove", function() {
            $(".cursor").addClass("navlinks");
        });
        $(".links").on("mouseleave", function() {
            $(".cursor").removeClass("navlinks");
        });
        $(".activenavbar").on("mouseleave", function() {
            $(".cursor").removeClass("whitenavcursor");
        });
        // nav mobile 
        $(".btnMenu").on("click", function (){
            $(".nav").addClass("activenavmobile");
        });
        $(".closenav").on("click", function (){
            $(".nav").removeClass("activenavmobile");
        });
        // end navbar 
        // home 
        $(".home").on("mousemove",function(e){
            $(".cursor").addClass("cursorHome");
        });
        $(".home").on("mouseleave",function(e){
            $(".cursor").removeClass("cursorHome");
        });
        $(".social-link .scoialmedia").on("mousemove",function(e){
            $(".cursor").addClass("navlinksocial");
        });
        // end home 
        // hero-Section 
        $(".hero-section .title").on("mousemove",function(e){
            $(".cursor").addClass("navlinks");
        });
        $(".hero-section .title").on("mouseleave",function(e){
            $(".cursor").removeClass("navlinks");
        });
        // end hero-Section 
        // video show 
        $(".video-show").on("mousemove", function () {
            $(".cursor").addClass("videocursor");
        });
        // active-video 
        $(".video-show").on("click", function (){
            $(".model-video").addClass("active-video");
        });
        $(".closevideo").on("click", function (){
            $(".model-video").removeClass("active-video");
        });
        $(".video-show").on("mouseleave", function () {
            $(".cursor").removeClass("videocursor");
        });
    // end cursor animation

    // scolling effective
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();    
        // Navbar 
        if (scroll > 100) {
            // get nav element
            $('.innavbar').addClass("activenavbar");
        } else {
            $('.innavbar').removeClass("activenavbar");
        }
        // About Section 
        if (scroll >= 747) {
            // get about element
            $('.about').addClass("activeElements AnimatorAbout");
        } 
        // crousal 
        if(scroll >= 1400) {
            $(".about .carousel").addClass("activeElements carouselAni");
        }
        // end about
        // pricing 
        if (scroll >= 2166) {
            $(".price").addClass("activeElements AnimatorPrice");
            $(".price .partnership").addClass("partnershipactive activeElements");
        }
        // end pricig 
        // contact 
        if (scroll >= 3084) {
            $(".contact").addClass("activeElements AnimatorContact");
        }
        // end contact
    });
    // end scolling effective
    // Scrolling Navbar 
    let Pages = $(".links  a"),
        NavMobile = $(".nav a");
    // navbar desktop
    Pages.on("click",function(){
        let hashtag = $(this).attr("href");
        $("html,body").animate({
            scrollTop:$(hashtag).offset().top 
        },2000);
    });
    // navbar mobile
    NavMobile.on("click",function(){
        let hashtag = $(this).attr("href");
        $("html,body").animate({
            scrollTop:$(hashtag).offset().top 
        },2000);
        $(".nav").removeClass("activenavmobile");
    });
    // scrolling smoth body 
    $("body").niceScroll({
        cursorcolor:"black",
        cursorwidth:"7px"
    });


        
    // window loading 
    $(window).on("load", function () {
        $(".loading").delay(2000).fadeOut(500);
    });

});