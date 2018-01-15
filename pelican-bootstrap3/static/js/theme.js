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
            image : {
                           // Wait for images to load before displaying
                           // Requires predefined image dimensions
                           // If 'auto' - will zoom in thumbnail if 'width' and 'height' attributes are found
                           preload : true
                       },
            /*
            helper:{
                title:{
                    type: 'outside',
                    position:top,
                }
            },*/
        }
         $('.post-container').each(function(i){
           $(this).find('img').each(function(){
             if ($(this).parent().hasClass('data-fancybox')) return;
             var alt = this.alt;
             /*if (alt) $(this).after('<span class="caption">' + alt + '</span>');*/
             $(this).wrap('<a href="' + this.src + '"  data-fancybox rel='img'></a>');
           });
           $(this).find('.data-fancybox').each(function(){
             $(this).attr('rel', 'article' + i);
           });
         });
         $('[data-fancybox]').fancybox(fancybox_settings);

       });
