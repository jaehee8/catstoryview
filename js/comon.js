$(document).ready(function(){
    $(window).scroll(function(){
     //scroll: 스크롤 되었을 때 scrollTop(); 스크롤의 0에서부터 얼마큼 떨어졌는지 거리값
         var scrollOffset=$(window).scrollTop();
         console.log(scrollOffset);
        
     //조건:500보다 scrollTop()의 값이 크면 .on이 추가, 500보다 scrollTop()의 값이 작으면 .on이 제거
         if(scrollOffset>500) {
             $('.btn_top a , .btn_write').stop().fadeIn();
         } else {
             $('.btn_top a , .btn_write').stop().fadeOut();
         }

    });

    $('.btn_top').click(function(){
        //scrollTop:0
        //animate()
        $('body, html').stop().animate({scrollTop:0}, 300);
    });
 });