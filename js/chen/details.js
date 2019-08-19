 var did = location.search.split("=")[1].substr(4,4);
 console.log(did)
$.ajax({
	url:'../js/chen/details.json',
	success:function(res){
		console.log(res)
		$.each(res,function(index,item){
			
		
			if(did==item.pid){
				$(`<div class="img">
				<img src=${item.tImg} alt="">
			</div>
			<div class='text'>
				<p>${item.title}</p>
				<h3>乳胶枕</h3>
				<span>蝴蝶形的弧度外观为人体提供了殷实的护肩作用，着重于舒缓肩部肌肉，契合肩部与枕头的空袭</span>
			</div>
		</div>
		<!-- banner结束 -->

		<div class="nav clearfix">
			<!-- 导航条开始 -->
			<div class="nav-content">
				<div class='list'>
					<p>当前位置：</p>
					<ul>
						<li>首页</li>
						<li>></li>
						<li>产品中心</li>
						<li>></li>
						<li><a href="#">乳胶产品</a></li>
						<li>></li>
						<li>释压按摩进口乳胶枕</li>
					</ul>
				</div>
				<!-- 导航条结束 -->
				<div class="content1">
					<div class="left">
						<div class='title'>
							<div>
								<img src="../img/chen/装饰.png" alt="">
								<p>释压按摩进口乳胶枕</p>
							</div>
						</div>
						<div class="left-top">
							<div>
								<div class='l_left'>
									优&nbsp;&nbsp;&nbsp;点&nbsp;&nbsp;：
								</div>
								<div class='l_right'>
									<p>1.与美容按摩枕所不一样的是该款美容枕采用两面蜂巢式透气孔的设计，提升乳胶枕头的透气性，让容易出汗的女性在睡眠时能够享受到一个</p>
									<p>2.该款枕头在柔软度上也比美容按摩枕好，舒适柔软的体验感，使睡眠质量变好。</p>
									<p>3.蝴蝶形的弧度外观为人体提供了殷实的护肩作用，着重于舒缓肩部肌肉，契合肩部与枕头的空隙。"</p>
								</div>
							</div>
						</div>
						<div class="left-bottom">
							<div>
								<div>
									产品名称：
								</div>
								<p>释压按摩进口乳胶枕</p>
							</div>
							<div>
								<div>
									外枕套：
								</div>
								<p>80%棉 20%聚酯纤维</p>
							</div>
						</div>
						<div class="left-bottom">
							<div>
								<div>
									枕头材质：
								</div>
								<p>85%天然乳胶 15%发泡助剂</p>
							</div>
							<div>
								<div>
									内枕套：
								</div>
								<p>聚酯纤维</p>
							</div>
						</div>
						<div class="left-bottom">
							<div>
								<div>
									规 格：
								</div>
								<p>60*40*10/12cm</p>
							</div>
							<div>
								<div>
									推荐人群：
								</div>
								<p>各类人群</p>
							</div>
						</div>
						<div class='btn'><a href="javascript:;">进一步了解></a></div>
					</div>
					<div class="right">
						<div class='left'>
							<img src="../img/chen/d-main1.png" alt="">
						</div>
						<div class='right'>
							<img src="../img/chen/d-main2.png" alt="">
							<img src="../img/chen/d-main3.png" alt="">
							<img src="../img/chen/d-main4.png" alt="">
						</div>
					</div>
				</div>
			</div>`).appendTo(".banner")
			}
		})
	}
})