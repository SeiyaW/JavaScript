$(function(){
    /*
    * Slideshow
    */
   $('.slideshow').each(function(){
        let $slides = $(this).find('img'), // すべてのスライド
            slideCount = $slides.length,   // スライドの点数
            currentIndex = 0;              // 現在のスライドのインデックス

        $slides.eq(currentIndex).fadeIn();
        setInterval(showNextSlide, 7500);

        function showNextSlide(){
            let nextIndex = (currentIndex + 1) % slideCount;
            $slides.eq(currentIndex).fadeOut();
            $slides.eq(nextIndex).fadeIn();
            currentIndex = nextIndex;
        }
   });
});