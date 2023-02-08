$(function(){
    /*
    * Sticky header
    */
   $('.page-header').each(function(){
     let $window = $(window),
         $header = $(this),

        // ヘッダーのクローン
        $headerClone = $header.contents().clone(),
        
        // ヘッダーのクローンのコンテナ
        $headerCloneContainer = $('<div class="page-header-clone"></div>'),

        threshold = $header.offset().top + $header.outerHeight();

     $headerCloneContainer.append($headerClone);
     $headerCloneContainer.appendTo('body');

     $window.on('scroll', $.throttle(1000 / 15, function(){
        if($window.scrollTop() > threshold){
            $headerCloneContainer.addClass('visible');
        }else{
            $headerCloneContainer.removeClass('visible');
        }
     }));

     $window.trigger('scroll');
   });
});