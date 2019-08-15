// 选项卡
$('.main>div>.check-btn>li').click(function(){
	var arr=['../img/chen/banner.png','../img/chen/banner.png','../img/chen/banner3.png','../img/chen/banner4.png','../img/chen/banner5.png']
	var arr2=['产品中心','乳胶制品','智能产品','保健产品','无纺布纸巾']
	var index=$(this).index()
	console.log(index)
	$(this).addClass('active').siblings().removeClass('active');
	// 点击改变相应图片
	$('.banner>div>img').attr('src',arr[index]);
	// 点击改变相应文字
	$('.banner>div>.text>p').text(arr2[index])
	// $('.main>div>.check-content').animate({left:83.9*-index+'vw'} )
})

//移入图标上下滑动
	$('.box3>li').hover(function(){
		$(this).addClass('jump')
	},function(){
		$(this).removeClass('jump')
	})
	
// 返回顶部
$('.footer_right>.top').click(function(){
	$('body,html').stop().animate({scrollTop:0})
})
