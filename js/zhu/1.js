$.ajax({
		type:"get",
		url:"../data/news.json",
		async:true,
		success:function(data){
		
			$(".floor-ul-List").html("");
			
			//创建页数
			let num =0;
			for(var i=0;i<data.newsCenter.length/6;i++){
				num++;
				$(".floor-ul-List").css({width:num*86+"vw"})
			
				$(`<ul class='M-List'></ul`).appendTo(".floor-ul-List")
			}
			
			//计算6条数据的计数器
			let ipu=0
			let sp=0;
			$.each(data.newsCenter, function(item,index) {
				sp++;
				if(sp>6){
					sp=1;
					ipu++;
				}
				
				$(".M-List").eq(ipu).append(`<li class="list-uLi">
			 		<div>
			 			<figure><img src="../images/mao/ss3.png"/></figure>
			 			
				 		<div class="list-uLi-box">
				 			<h2>智能科技</h2>
				 			<span>2019-08-22</span>
				 			<span class="width-55"></span>
				 			<p>智能家居和普通家具究竟有何不同?  近两年全球正在悄悄的燃起一场智能化的革命</p>
				 			<a href="#" class="floor-xbox-btn">
								MORE
							</a>
				 		</div>
			 		</div>
			 	<>`);
			 	
			});
			
			
			
			
			//分页器
			var obj = {
				wrapid:'page', //页面显示分页器容器id
				total:data.newsCenter.length,//总条数
				pagesize:6,//每页显示10条
				currentPage:1,//当前页
				onPagechange:animateBox,
				btnCount:3
				/nCount:7 页数过多时，显示省略号的边界页码按钮数量，可省略，且值是大于5的奇数
			}
			pagination.init(obj);
			function animateBox(page){
				$(".floor-ul-List").animate({left:-(page-1)*86+"vw"})
			}
			
			
			
			//切换新闻中心或行业动态
			$(".list").on("click","li",function(){
				index=$(this).index();
				$(this).addClass("active").siblings().removeClass("active");
			})
		}
	});
