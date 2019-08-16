var ul = document.querySelector('.wrap ul');
var div = document.querySelector('.second');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var index = 0;
var then = new Date();

//初始化
$('.fixed li').eq(index).css({
	border: '1px solid orange'
})
$('.fixed li').eq(index).find('p').css({
	background: 'orange',
	transform: 'scale(1.2)'
})
$('.content_top').addClass('cTop');
$('.one-content').addClass('mobile');
$('.w-content .line p').addClass('oP');
$('.home .nav').addClass('oNav');


$('.content_top').addClass('cTop');
$('.listMenu>ul>li').eq(0).children('a').addClass('oTop');
$('.listMenu>ul>li').eq(0).find('a img').addClass('big');
$('.listMenu>ul>li').eq(0).find('.list_none').addClass('transY');

//移入图标上下滑动
$('.content_top>div ol li a').hover(function(){
	$(this).addClass('jump')
},function(){
	$(this).removeClass('jump')
})

$('.box3 li a').hover(function(){
	$(this).addClass('jump');
},function(){
	$(this).removeClass('jump');
})

//点击楼层按钮
$(".fixed li").click(function(){
	var count = $(this).index();
	var iTop = -100 * count + "%"
	$(".wrap ul").css({top:iTop},1000);
	index = count;
	//调用公共的侧边栏js
	common();
	//调用滑动点击事件
	slide(count);
	
})

//返回顶部
$('.top').click(function(){
	$('body,html').stop().animate({
		scrollTop: 0
	})
})

//封装侧边栏公共的js
function common(){
	$('.fixed li').eq(index).css({
		border: '0.5px solid orange',
		animation: 'border 0.5s'
	}).siblings().css({
		border: '',
		animation: ''
	})
	$('.fixed li').eq(index).find('p').css({
		background: 'orange',
		transform: 'scale(1.2)'
	}).parent().siblings().find('p').css({
		background: '',
		transform: ''
	})
	$('.fixed_content .num p').eq(0).find('span').html(index+1);
}

/*滑动点击事件*/
function slide(num){
	//导航淡隐淡出
	if(num > 0){
		$('.box').fadeIn();
	}else{
		$('.box').fadeOut();
	}
	/*关于煊赫的动画*/
	if(num == 1){
		$('.about>.img>img').addClass('nImg')
		$('.about>img').addClass('aImg')
		$('.about>.img>.text h1').addClass('nH1')
		$('.about>.img>.text p span').addClass('oSpan')
		$('.about>.img>.text button').addClass('opacity')
	}
	/*产品列表的动画*/
	if(num == 2){
		$('.listMenu').addClass('oMenu')
	}
	//新闻中心动画
	if(num == 3){
		$('.News>img').addClass('animated fadeInDown delay-1s');
		$('.news-left img').addClass('animated fadeInUp delay-1s');
		$('.news-left h1,.news-left h2,.news-left h3').addClass('animated fadeInLeft delay-1s');
		$('.news-right').addClass('animated fadeInRight delay-1s');
		$('.news-left>p>span').addClass('animated fadeInUp delay-2s');
		$('.title .left').addClass('animated fadeInLeft delay-2s');
		$('.title .right').addClass('animated fadeInRight delay-2s');
		$('.news-right p span').addClass('animated fadeInUp delay-2s');
		$('.news-left>a').addClass('animated fadeIn delay-2s');
		$('.mask').addClass('oMask');
	}
	//联系我们动画
	if(num == 4){
		$('.contactUs>.us-content>.usLeft').addClass('animated fadeInLeft');
		$('.contactUs>.us-content>.usRight').addClass('usOpacity');
	}
}

/*第三模块的点击事件*/
click()
function click(){
	$('.listMenu>ul>li').click(function(){
		$(this).css('width','40%').siblings().css('width','25%');
		$(this).find('a img').addClass('big').removeClass('big1').parent().parent().siblings().find('a img').addClass('big1').removeClass('big');
		$(this).children('a').addClass('oTop').removeClass('oBottom').parent().siblings().children('a').addClass('oBottom').removeClass('oTop');
		$(this).find('.list_none').addClass('transY').removeClass('ntransY').parent().siblings().find('.list_none').addClass('ntransY').removeClass('transY');
	})
}


function wheel(e) {
	var now = new Date();
	var e = e || window.event;
	if (now - then > 500) {
		if (e.detail) {
			if (e.detail > 0) {
				index++;
			} else {
				index--;
			}
		} else {
			if (e.wheelDelta > 0) {
				index--;
			} else {
				index++;
			}
		}
		if (index < 0) {
			index = 0;
		}else if(index>4){
			index = 4;
		}
		/*调用滑动点击事件*/
		slide(index);
		//调用公共的侧边栏js
		common();
		//滚轮事件改变ul的top值
		ul.style.top = -100 * index + "%"
		then = new Date();
	}
}
document.addEventListener('DOMMouseScroll', wheel, false);
document.onmousewheel = wheel;