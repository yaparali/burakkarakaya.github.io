function PDPswipeToStart(){var n,a;$(".ftc-swipe").each(function(){a=$(this),n=a.parents(".ftc-media").find("video"),$("button",this).off().on("click touchstart",function(){a.hasClass("playing")?(n[0].pause(),a.removeClass("playing"),n.off("ended")):(n[0].play(),a.addClass("playing"),n.on("ended",function(){a.removeClass("playing")}))})})}