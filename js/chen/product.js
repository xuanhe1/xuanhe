// 选项卡


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

// 切换内容数据引入
$.ajax({
	url:'../js/chen/product.json',
	success:function(res){
		console.log(res)
		// 刚开始就出现
		var data=res.f001.list
		fn(data)
		
		$('.main>div>.check-btn>li').click(function(){
			$('.check-content>div').css({'left':0})
			var arr=['../img/chen/banner.png','../img/chen/banner.png','../img/chen/banner3.png','../img/chen/banner4.png','../img/chen/banner5.png']
			var arr2=['产品中心','乳胶制品','智能产品','保健产品','无纺布纸巾']
			var index=$(this).index()
			// console.log(index)
			$(this).addClass('active').siblings().removeClass('active');
			// 点击改变相应图片
			$('.banner>div>img').attr('src',arr[index]);
			// 点击改变相应文字
			$('.banner>div>.text>p').text(arr2[index])
			if(index==0){
				var data=res.f001.list
				console.log(data)
				fn(data)
				
			}else if(index==1){
				var data=res.f002.list
				fn(data)
			}else if(index==2){
				var data=res.f003.list
				fn(data)
			}else if(index==3){
				var data=res.f004.list
				fn(data)
			}else if(index==4){
				var data=res.f005.list
				fn(data)
			}
		})
		function fn(ss){
			 $('.check-content>div').empty()
			var ulLength = Math.ceil(ss.length/4);
			console.log(ss)
			console.log(ulLength)
			var onPagechange = function(page) {
				console.log('当前点击页码', page);
				$(".main>.check-content>div").animate({
					left: (page - 1) * -100 + "%"
				})
			
			}
			var obj = {
				wrapid: 'wrap1', //页面显示分页器容器id
				total:ulLength*4, //数据总条数
				pagesize: 4, //每页显示4条
				currentPage: 1, //当前页
				onPagechange: onPagechange,
				btnCount: 3 //页数过多时，显示省略号的边界页码按钮数量
			}
			pagination.init(obj);
			for(var j=0;j<ulLength;j++){
				let ol=$("<ol></ol>")
				var ulL=j*4+4
				if(ulL>ss.length){
					ulL=ss.length
				}
				for(var i=j*4;i<ulL;i++){
					
					$(`<li>
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
						</li>`).appendTo(ol)
				}
				$('.check-content>div').append(ol)
			}
			
		}
	}
})