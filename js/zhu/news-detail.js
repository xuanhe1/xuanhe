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