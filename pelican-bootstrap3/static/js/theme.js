MathJax.Hub.Config({
            tex2jax: {
                skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
                inlineMath: [['$', '$'], ["\\(", "\\)"]],
                processEscapes: true
            },
            extensions: ["tex2jax.js"],
            jax: ["input/TeX", "output/HTML-CSS"],
            "HTML-CSS": {
                availableFonts: ["TeX"],
                scale:85,
                imageFont: null
            }

        });



$(document).ready(function(){
    var fancybox_settings = {
            padding: 0,
            smallBtn: true,
            toolbar: true,
            closeBtn: true,
            fitToView: true,
            autoSize: true,
            helper:{
            /*
                title:{
                    type: 'outside',
                    position:top,
                },*/
                thumbs	: {
                				width	: 50,
                				height	: 50
                			}
            },
        }
         $('.post-container').each(function(i){
           $(this).find('img').each(function(){
             if ($(this).parent().hasClass('data-fancybox')) return;
             var alt = this.alt;
             /*if (alt) $(this).after('<span class="caption">' + alt + '</span>');*/
             $(this).wrap('<a href="' + this.src + '"  data-fancybox rel="gallery"></a>');
           });
           $(this).find('.data-fancybox').each(function(){
             $(this).attr('rel', 'article' + i);
           });
         });
         $('[data-fancybox]').fancybox(fancybox_settings);

       });
