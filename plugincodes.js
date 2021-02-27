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



});
