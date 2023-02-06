$(function(){
  $('.slideshow').each(function(){
    let $container = $(this),
        $slideGroup = $container.find('.slideshow-slides'),
        $slides = $slideGroup.find('.slide'),
        $nav = $container.find('.slideshow-nav'),
        $indicator = $container.find('.slideshow-indicator'),

        slideCount = $slides.length,
        indicatorHTML = '',
        currentIndex = 0,
        duration = 500,
        easing = 'easeInOutExpo',
        interval = 7500,
        timer;

        // 各スライドの位置を決定し、
        // 対応するインジケーターのアンカーを生成
        $slides.each(function(i){
            $(this).css({left: 100 * i + '%' });
            indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
        });

        $indicator.html(indicatorHTML);

        // 任意のスライドを表示する関数
        function goToSlide(index){
            $slideGroup.animate({left: - 100 * index + '%'}, duration, easing);
            currentIndex = index;
            updateNav();
        }

        // スライドの状態に応じてナビゲーションとインジケーターを更新する関数
        function updateNav(){
            let $navPrev = $nav.find('.prev'),
                $navNext = $nav.find('.next');

            if(currentIndex === 0){
                $navPrev.addClass('disabled');
            }else{
                $navPrev.removeClass('disabled');
            }

            if(currentIndex === slideCount - 1){
                $navNext.addClass('disabled');
            }else{
                $navNext.removeClass('disabled');
            }

            $indicator.find('a').removeClass('active').eq(currentIndex).addClass('active');
        }

        // タイマーを開始する関数
        function startTimer(){
            timer = setInterval(function(){
                let nextIndex = (currentIndex + 1) % slideCount;
                goToSlide(nextIndex);
            }, interval);
        }

        // タイマーを停止する関数
        function stopTimer(){
            clearInterval(timer);
        }

        // ナビゲーションのリンクがクリックされたら該当するスライドを表示
        $nav.on('click', 'a', function(event){
            event.preventDefault();
            if($(this).hasClass('prev')){
                goToSlide(currentIndex - 1);
            }else{
                goToSlide(currentIndex + 1);
            }
        });

        // インジケーターのリンクがクリックされたら該当するスライドを表示
        $indicator.on('click', 'a', function(event){
            event.preventDefault();
            if(!$(this).hasClass('active')){
                goToSlide($(this).index());
            }
        });

        // マウスが乗ったらタイマーを停止、はずれたら開始
        $container.on({
            mouseenter: stopTimer,
            mouseleave: startTimer
        });

        // 最初のスライドを表示
        goToSlide(currentIndex);

        // タイマーをスタート
        startTimer();
  });
});