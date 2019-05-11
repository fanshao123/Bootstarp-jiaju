$(function(){
// 身体第一个轮播图
	$(".diyi>.y>.l>.x>.y>div>a").hover(function(){
		$(this).children().css("transform","scale(1.4)")
		
	},function(){
		$(this).children().css("transform","scale(1)")
	})
//	身体第二部分
    $(".dier>.e").hover(function(){
    	$(".dier>.e>.z>div>p>span").stop().animate({left:80});
    },function(){
    	$(".dier>.e>.z>div>p>span").stop().animate({left:0});
    })
	$(".dier>.e>.z>.img>img").hover(function(){
		$(this).stop().css("transform","scale(1.1)");
	},function(){
		$(this).stop().css("transform","scale(1)");
	})
	$(".dier>.n>.z>.z>.img>img").hover(function(){
		$(this).stop().css("transform","scale(1.1)");
	},function(){
		$(this).stop().css("transform","scale(1)");
	})
	  $(".dier>.n>.z>.w").hover(function(){
    	$(this).children().stop().animate({left:50});
    },function(){
    	$(this).children().stop().animate({left:0});
    })
	
})