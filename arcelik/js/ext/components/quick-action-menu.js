var quickActionMenu={init:function(){this.build(),this.events()},build:function(){$.each($(".quick-action-menu").find(".swiper-slide").get().reverse(),function(e,t){$("#quick-menu").prepend($(t).find(".quick-menu-item").clone())}),$.each($("#quick-menu").find(".quick-menu-item"),function(e,t){var i=$(t).attr("data-onclick"),i=(i&&$(t).attr("onclick",i),$(t).attr("data-id")),i=(i&&$(t).attr("id",i),$(t).attr("data-target")),i=(i&&$(t).attr("target",i),$(t).attr("data-href"));i&&$(t).attr("href",i)}),new Swiper('.swiper-container[data-swiper="quickMenu"]',{slidesPerView:1,loop:!0,autoplay:{delay:3e3},pagination:!1,on:{slideChange:function(){var e=this.slides[this.activeIndex].querySelector(".quick-menu-item").dataset.tooltip;$(".quick-action-tooltip").text(e)}}})},events:function(){$(document).on("click",".swiper-container .quick-menu-item",function(e){e.preventDefault(),$(".quick-action-menu").addClass("opened"),$(".quick-action-menu").removeClass("closed")}),$(document).on("click",".quick-menu-close",function(e){e.preventDefault(),$(".quick-action-menu").removeClass("opened"),$(".quick-action-menu").addClass("closed"),setTimeout(function(){$(".quick-action-menu").removeClass("closed")},500)}),$(document).on("click","#quick-menu .quick-digital",function(e){e.preventDefault(),$("#digital-assistant-activation-button").trigger("click")}),$(document).on("click","#quick-menu .quick-usabilla",function(e){e.preventDefault(),$(".arc-grs-btn").trigger("click")})}};