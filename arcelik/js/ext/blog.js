var blog={init:function(){this.detail.init(),this.assistant.init()},detail:{init:function(){this.stickyBar(),this.events()},stickyBar:function(){$("#blog-site-header").outerHeight()<$(window).scrollTop()?$("body").addClass("blog-sticky"):$("body").removeClass("blog-sticky")},updateProgressBar:function(){var t=$(".progress-bar"),s=$(".blog-detail-content"),i=$("#blog-site-footer"),o=$(window).scrollTop(),e=$(window).height(),s=o/($(document).height()-s.scrollTop()-i.outerHeight()-e)*100;t.css("width",s+"%"),0<o&&$(".progress-bar").css("background-color","#63d3a3"),clearTimeout($.data(this,"scrollTimer")),$.data(this,"scrollTimer",setTimeout(function(){$(".progress-bar").css("background-color","#ffd938")},15e3)),100<=s&&$(".progress-bar").css("background-color","#b32424")},events:function(){var t=this;$(window).on("scroll",function(){t.stickyBar(),t.updateProgressBar()})}},assistant:{init:function(){this.events()},start:function(){$(".blog-step-list").find('[data-step="2"]').show(),$(".blog-step-list").find('[data-step="1"]').hide()},events:function(){var t=this;$('[data-selector="assistant-next"]').on("click",function(){t.start()})}}};