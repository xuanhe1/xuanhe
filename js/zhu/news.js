$(function(){
	//返回顶部
	$('.top').click(function() {
		$('body,html').stop().animate({
			scrollTop: 0
		})
	})
	
	//移入图标上下滑动
	$('.box3 li a i').hover(function() {
		$(this).addClass('jump')
	}, function() {
		$(this).removeClass('jump')
	})
	
	
	//数据渲染
	$.ajax({
		type: "get",
		url: "../data/news.json",
		async: true,
		success: function(d) {
			console.log(d)
			function fn(newsList) {
				$(".main-top").empty().html(
					'<div class="headImg"><img class="headimg" src="'+d[newsList].inImg+'" ></div>'+
						'<div class="main-top-right" data-id='+d[newsList].pid+'>'+
							'<p class="main-top-title">'+d[newsList].titleNew+'</p>'+
							'<p class="main-top-content">'+d[newsList].introduce+'</p>'+
							'<h4 class="main-content-bottom">'+
								'<span>'+d[newsList].time+'</span>'+
								'<span>'+d[newsList].enterprise+'</span>'+
								'<a href="./news-detail.html" class="more">&nbsp;MORE<div class="san"></div></a>'+
							'</h4>'+
						'</div>'
				)
				$(".main-bottom .p_list_box").empty()
				var ulLength = Math.ceil(d[newsList].content.length / 6);
				$(".p_list_box").css({
					"width": ulLength * 100 + "vw"
				})
				var lilength = d[newsList].content.length
				//分页器
				var onPagechange = function(page) {
					console.log('当前点击页码', page);
					$(".main-bottom .p_list_box").stop().animate({
						left: (page - 1) * -100 + "vw"
					})
				}
				var obj = {
					wrapid: 'wrap1', //页面显示分页器容器id
					total: ulLength * 6, //总条数
					pagesize: 6, //每页显示6条
					currentPage: 1, //当前页
					onPagechange: onPagechange,
					btnCount: 3 //页数过多时，显示省略号的边界页码按钮数量
				}
				pagination.init(obj);
	
				for (var j = 0; j < ulLength; j++) {
					var ul = $("<ul class='p_list'></ul>")
					var ulL = j * 6 + 6;
					if (ulL > lilength) {
						ulL = lilength
					}
					for (var i = j * 6; i < ulL; i++) {
						$(
							'<li data-id="'+d[newsList].content[i].pid+'">'+
										'<div class="p_list_headImg">'+
											'<img class="listImg" src="'+d[newsList].content[i].lisImg+'" >'+
										'</div>'+
										'<div class="p_list_content">'+
											'<h3>'+d[newsList].content[i].title+'</h3>'+
											'<p>'+d[newsList].content[i].name+'</p>'+
											'<span class="slider"></span>'+
											'<p>'+d[newsList].content[i].information+'</p>'+
											'<a href="./news-detail.html" class="more">&nbsp;MORE<div class="san"></div></a>'+
										'</div>'+
									'</li>'
						).appendTo(ul)
					}
					$(".p_list_box").append(ul)
				}
			}
			fn("f001")
			$(".main .tab").on("click", ".tabson", function() {
				$(".main-bottom .p_list_box").css({
					"left": 0 + "vw"
				})
				pagination.init({
					currentPage: 1
				});
				var index = $(this).index();
				var arr = ['../img/zhu/banner1.jpg', '../img/zhu/banner2.jpg']
				var arr2 = ['新闻中心', '行业动态']
				$('.banner').attr('src', arr[index]);
				$('.banner-text>.text').text(arr2[index])
				$(".tabson").eq(index).addClass("tabon").siblings().removeClass("tabon");
				if (index == 0) {
					fn("f001")
				} else if (index == 1) {
					fn("f002")
				}
			})
		}
	})
	// 页面跳转拼接id
	$('.main-bottom').on("click", ".p_list>li img", function(e) {
		e.preventDefault()
		
		var id = $(this).parents("li").attr("data-id")
		location.href = "./news-detail.html?id=" + id
		return false;
	})
	$('.main-bottom').on("click", ".p_list>li a", function(e) {
		e.preventDefault()
		
		var id = $(this).parents("li").attr("data-id")
		location.href = "./news-detail.html?id=" + id
		return false;
	})
	
	$(".main-top").on("click", ".main-content-bottom a", function(e) {
		e.preventDefault()
		var id = $(this).parents(".main-top-right").attr("data-id")
		location.href = "./news-detail.html?id=" + id
	})
	$(".main-top").on("click", ".headImg img", function(e) {
		e.preventDefault()
		var id = $(this).parents(".headImg").next().attr("data-id")
		location.href = "./news-detail.html?id=" + id
	})
})