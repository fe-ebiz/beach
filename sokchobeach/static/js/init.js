$(function () {
	init();
	
	sliderFn();
	
    if( $('div').hasClass('topbn-wrap') && $('.topbn-wrap').css('display') != 'none' ){
        tbnheaderFn();
    }
});

function init() {
	var contents = $(".contents"),
		main = $(".contents .wrap.main"),
		mainSlide = $(".contents .wrap.main .slide-container"),
		wh = $(window).height();
	
	$(window).resize(function() {
		wh = $(window).height();
		main.height(wh);	
		mainSlide.height(wh);	
	}).resize();
}

function sliderFn() {
	var slider = $(".contents .slide-container");
	slider.bxSlider({
//		mode: 'vertical',
		mode: 'fade',
		auto: true,
		autoControls: true,
		speed: 800,
		duration: 5000,
		onSliderLoad: function(currentIndex){
			slider.children().addClass("active");
			slider.children().eq(currentIndex + 1).removeClass("active");
		},
		onSlideAfter: function ($slideElement, oldIndex, newIndex) {
			slider.children().removeClass("active");
			$slideElement.addClass("active");
		}
	});
	
}

/* 상단띠배너 존재 시 헤더 */
function tbnheaderFn() {
	var hd = $('header');
	var tbnH = $('.topbn-wrap').height();
    
    $(window).scroll(function(){
        var num = $(this).scrollTop();
        
         if( num > (tbnH-1) ){
             hd.css({'position' : 'fixed', 'padding-top' : 0 +'px'})
         }else{
             hd.css({'position' : 'absolute', 'padding-top' : tbnH +'px'})
         }
    });
}

