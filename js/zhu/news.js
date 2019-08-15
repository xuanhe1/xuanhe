var index = 0
$(".main .tab").on("click", ".tabson", function() {
	index = $(this).index();
	console.log(index)
	$(".tabson").eq(index).addClass("tabon").siblings().removeClass("tabon");
	// $(".list").animate({left:index*-95.1+"vw"})
})


//返回顶部
$('.top').click(function(){
	$('body,html').stop().animate({
		scrollTop: 0
	})
})

	//移入图标上下滑动
	$('.box3>li').hover(function(){
		$(this).addClass('jump')
	},function(){
		$(this).removeClass('jump')
	})