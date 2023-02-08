$(function(){
    /*
    * Tabs
    */
   $('.work-section').each(function(){
        let $container = $(this),
            $navItems  = $container.find('.tabs-nav li'),
            $highlight = $container.find('.tabs-highlight');

        // jQuery UI Tabs を実行 
        $container.tabs({
            hide: { duration: 250 },
            show: { duration: 125 },

            create: moveHighlight,
            activate: moveHighlight
        });

        function moveHighlight(event, ui){
            let $newTab = ui.newTab || ui.tab,
                left = $newTab.position().left;

            $highlight.animate({ left: left }, 500, 'easeOutExpo');
        }
   });
});