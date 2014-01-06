/*
* quick-readmore.js jQuery plugin
* Author: @cyrilbarragan
* Project home: cyrilbarragan.github.io/QuickReadmore
* Licensed under the MIT license
*/

jQuery.fn.extend({
    readmore: function(pOpts) {
        // Default options
        var opts = {more: "<a href='#''>Read more</a>", less: "<a href='#''>Close</a>", toggleSpeed: "fast"};
        
        if (pOpts) {
            opts = $.extend(opts, pOpts);
        }
        
        return this.each(function(key, item) {
            var pElem = this;
            var moreLessLink = $(opts.more);
            var linkContainer = $("<div class='link-container'></div>");
            $(linkContainer).append(moreLessLink);
            $(item).append(linkContainer);
            
            moreLessLink.click(function (){
                var moreTextElem = $(pElem).children('.more')[0];
                
                if ($(moreTextElem).is(":visible")) {
                    $(this).html(opts.more);
                } else {
                    $(this).html(opts.less);
                }
                
                $(moreTextElem).toggle(opts.toggleSpeed);
                return false;
            });
        });
    }
});  