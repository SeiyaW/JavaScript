$(function(){
    $('.back-to-top').on('click', function(){
        $.smoothScroll({
            easing: 'easeOutExpo',// イージングの種類
            speed: 500            // 所要時間
        });
    });
});