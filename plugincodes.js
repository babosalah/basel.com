$(function(){

$('.carousel').carousel({
    interval:6000
})
// show box toll
$(".cog-check").click(function(){

    $('.option-color').toggle(500);
});


//chang etheme color
$('.option-color ul li')
.eq(0).css("backgroundColor" ,"#d31336").end()
.eq(1).css("backgroundColor" ,"#ff8e2b").end()
.eq(2).css("backgroundColor" ,"#2e77ae").end()
.eq(3).css("backgroundColor" ,"#73b932");

$('.option-color ul li').click(function(){

    $("link[href*='theme']").attr("href" ,$(this).attr("data-value"));
});

// scroll to top

$('#scroll-to-top').click(function(){
    $("html,body").animate({scrollTop: 0},1000)
 });


 //trigger nice croll
 $('html').niceScroll({

    cursorcolor: '#d31336' ,
    cursorwidth: '13px',
    corsorborder: '1px solid #d31336',
    corsorborderradius:0,
    zindex:99999

 });

/*

var  scrollbotton =("#scroll-to-top");
$(window).scroll(function(){
$(this).scrollTop()>=700 ? scrollbotton.show() : scrollbotton.hide();

});
scrollbotton.click(function(){
    $("html,body").animate({scrollTop: 0},600)
});
/*
//loading screen
$(window).load(function(){
    $("body").css("overflow","auto");

    $(".loadin-overlay .loader").fadeOut(2000,
        function(){
            $(this).parent().fadeOut(2000,
                function(){
                    $(this).remove();

                });
        });
});
*/


});
