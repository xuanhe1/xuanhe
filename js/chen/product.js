
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
var arr=['../img/chen/banner.png','../img/chen/banner.png','../img/chen/banner3.png','../img/chen/banner4.png','../img/chen/banner5.png']
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
					// 刚开始就出现
					var data=res[attr[ index]].list;
				
					 fn(data)
				}
			})
			
			
		})

















//分页器
		function fn(ss){
				console.log("i:"+ss.length);
				
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
				var ulLength = Math.ceil(ss.length/4);
				$('.main>.check-content>div').css({width:ulLength*86+"vw"})
		
		
			
			
			
		
			
			
			
			
			
			for(var j=0;j<ulLength;j++){
				
				
				$('.check-content>div').append("<ol></ol>")
			}
			let num=0;
			let inp=0;
			for(var i=0;i<ss.length;i++){
				num++
					
				if(num>4){
					num=0;
					inp++;
				}
				
				$('.check-content>div>ol').eq(inp).append(`<li>
						<div class='top'>
							<img src="${ss[i].newsImg}" alt="">
						</div>
						<div class='bottom'>
							<h5>${ss[i].name}</h5>
							<span>${ss[i].introduce}</span>
							<p class='line'></p>
							<p class='text'>${ss[i].Introduction}</p>
							<div>MORE <div class='san'></div>
							</div>
						</div>
					</li>`);
			}
		}
		
		
		function onPagechange (page) {
			$(".main>.check-content>div").stop().animate({
				left: -(page - 1) *86+ "vw"
			})
		
		}