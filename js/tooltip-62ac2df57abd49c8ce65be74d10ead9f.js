var tooltips=document.querySelectorAll(".tooltip");function position_tooltip(){var tooltip=this.parentNode.querySelector(".tooltiptext"),tooltip_rect=tooltip.getBoundingClientRect(),fontsize=parseFloat(getComputedStyle(this.parentNode).fontSize);tooltip_rect.y<10?tooltip.style.bottom=-tooltip_rect.height/fontsize-2+"em":tooltip.style.bottom="2em"}tooltips.forEach(function(tooltip,index){tooltip.addEventListener("mouseover",position_tooltip)});