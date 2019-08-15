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

//移入图标上下滑动
$('.content_top>div ol li a').hover(function(){
	$(this).addClass('jump')
},function(){
	$(this).removeClass('jump')
})

//点击楼层按钮
$(".fixed li").click(function(){
	var count = $(this).index();
	var iTop = -100 * count + "%"
	$(".wrap ul").css({top:iTop},1000);
	index = count;
	//调用公共的侧边栏js
	common();
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
		
		if(index > 0){
			$('.box').fadeIn();
		}else{
			$('.box').fadeOut();
		}
		
		//调用公共的侧边栏js
		common()
		//滚轮事件改变ul的top值
		ul.style.top = -100 * index + "%"
		then = new Date();
	}
}
document.addEventListener('DOMMouseScroll', wheel, false);
document.onmousewheel = wheel;