!function(i,t){jQuery.fn[t]=function(i){return i?this.bind("resize",(e=i,function(){var i=this,t=arguments;u&&clearTimeout(u),u=setTimeout(function(){e.apply(i,t),u=null},100)})):this.trigger(t);var e,u}}(jQuery,"smartresize");