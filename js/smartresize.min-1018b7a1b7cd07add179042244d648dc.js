!function(i,t){jQuery.fn[t]=function(i){return i?this.bind("resize",(e=i,function(){var i=this,t=arguments;n&&clearTimeout(n),n=setTimeout(function(){e.apply(i,t),n=null},100)})):this.trigger(t);var e,n}}(jQuery,"smartresize");