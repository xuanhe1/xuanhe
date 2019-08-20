
//移入图标上下滑动
$('.box3 li a i').hover(function(){
	$(this).addClass('jump')
},function(){
	$(this).removeClass('jump')
})

	
// 返回顶部
$('.footer_right>.top').click(function(){
	$('body,html').stop().animate({scrollTop:0})
})

//初始化
$.ajax({
	url:'../js/chen/product.json',
	success:function(res){
		// 刚开始就出现
		var data=res.f001.list
		fn(data)
	}
})
var attr=["f001","f002","f003","f004","f005"];
var arr=['../img/chen/1.jpg','../img/chen/2.jpg','../img/chen/3.jpg','../img/chen/4.jpg','../img/chen/5.jpg']
			var arr2=['产品中心','乳胶制品','智能产品','保健产品','无纺布纸巾']

// 切换内容数据引入
$('.main>div>.check-btn>li').click(function(){
	$('.check-content>div').css({'left':0})
	var index=$(this).index()
	 attr[ index];
	// console.log(index)
	$(this).addClass('active').siblings().removeClass('active');
	// 点击改变相应图片
	$('.banner>div>img').attr('src',arr[index]);
	// 点击改变相应文字
	$('.banner>div>.text>p').text(arr2[index])
	
	
	$.ajax({
		url:'../js/chen/product.json',
		success:function(res){
			console.log(res)
			// 刚开始就出现
			var data=res[attr[ index]].list;
			 fn(data)
		}
	})
	
	
})
function fn(ss){
	var obj = {
		wrapid: 'wrap1', //页面显示分页器容器id
		total:ss.length, //数据总条数
		pagesize: 4, //每页显示4条
		currentPage: 1, //当前页
		onPagechange: onPagechange,
		btnCount: 3 //页数过多时，显示省略号的边界页码按钮数量
	}
	pagination.init(obj);
	$('.check-content>div').html("");
	var ulLength =Math.ceil(ss.length/4);
	
	$('.main>.check-content>div').css({width:500+"vw"})
	
	for(var j=0;j<ulLength;j++){
		$('.check-content>div').append("<ol></ol>");
	};
	var num=0;//数据
	var inp=0;//ol个数
	for(var i=0;i<ss.length;i++){
		num++	
		if(num>4){
			num=1;//当数量大于4的时候 就为1  ol新添加一个
			inp++;
		};
		console.log(ss[i].pid);
		$('.check-content>div>ol').eq(inp).append(
		'<li>'+
				'<a href="./details.html?id='+ss[i].pid+'" target="_blank">'+
					'<div class="top">'+
					'<img src="'+ss[i].newsImg+'" alt="">'+
					'</div>'+
				'</a>'+
				'<div class="bottom">'+
					'<h5>'+ss[i].name+'</h5>'+
					'<span>'+ss[i].introduce+'</span>'+
					'<p class="line"></p>'+
					'<p class="text">'+ss[i].Introduction+'</p>'+
					'<a href="./details.html?id='+ss[i].pid+'" target="_blank">'+
						'<div>MORE <div class="san"></div></div></a>'+
				'</div>'+
			'</li>'
			);
	}
}

function onPagechange (page) {
	$(".main>.check-content>div").stop().animate({
		left: -(page - 1) *86+ "vw"
	})

}