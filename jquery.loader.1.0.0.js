(function($) {
    $.fn.loader = function(options) {
        
        var defaults = { 
          classname: 'jquery-loader',
          icon: '',
          bgcolor: '#F6F6F6',
          opacity: '0.5'
        }; 

        var options = $.extend({}, defaults, options); 

        this.each(function() {
            var left = $(this).position().left;
            var top = $(this).position().top;
            
            var width = $(this).outerWidth();
            var height = $(this).outerHeight();
            
            $(this).after('<div id="'+options.classname+'" style="background:url(\''+ options.icon +'\') no-repeat center center '+ options.bgcolor +';opacity:'+ options.opacity +';position:absolute;left:'+left+'px;top:'+top+'px;width:'+width+'px;height:'+height+'px;"></div>');
        });

        return this;
    }
})(jQuery);
