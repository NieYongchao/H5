$(function () {
	var k = $(window).height();//屏幕高度
	// 点击next 往下播放一屏幕
	$(".next").click(function () {
		$.fn.fullpage.moveSectionDown();
	});
	
	$("#fullpage").fullpage( {  //fullpage方法里面接受json对象形式
		navigation: true,
		
		// 回调函数滚动到第二屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
		afterLoad: function(anchorLink, index) {
			if(index == 2) {
				$(".next").fadeOut();
				$(".search").show().animate({'right':370}, 1500, function () {
					//方块走进来，沙发2个字显示
					$(".search-words").animate({'opacity':1}, 500, function () {
					  $(".search").hide();
						$(".search-02-1").show().animate({"height": 30, "right": 250, "bottom": 452}, 1000);
						//沙发显示并变大
						$(".goods-02").show().animate({'height': 218}, 1000);
						//白色文字显示
						$(".words-02").animate({'opacity': 1},500);
						$(".next").fadeIn();
					});
				});
			}
		},
		
		// 刚开始滚动屏幕就触发的回调函数 onLeave
		// 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，从1开始计算；
		//nextIndex 是滚动到的“页面”的序号，从1开始计算；direction 判断往上滚动还是往下滚动，值是 up 或 down
		onLeave: function (index, nextIndex, direction) {
			$(".next").fadeOut();
			if(index == 2 && nextIndex == 3) {
				$(".shirt-02").show().animate({'bottom': - (k - 250), 'width': 207, 'left': 260}, 1500, function () {
					$(".img-01").animate({'opacity': 1}, 500, function () {
						$(".btn-01").animate({'opacity': 1}, 500, function () {
							$(".next").fadeIn();
						});
					});
				});
				$(".cover").show();
			}
			//第三屏往第四屏过渡
			if(index == 3 && nextIndex == 4) {
				$(".shirt-02").hide();
				$(".t1f").show().animate({"bottom" : -((k - 250) + 50), "left": 260 }, 2000, function () {
					$(this).hide();//动画完毕自动隐藏
					$(".car-img").show();
					$(".car").animate({'left': '150%'}, 1500, function () {
						$(".note").show();
						$(".note-img, .word-04-a").animate({'opacity': 1}, 500, function () {
							$(".next").fadeIn();
						});
					});
				});
			}
			//第四屏往第五屏过渡
			if(index == 4 && nextIndex == 5) {
				//小手上来
				$(".hand-05").animate({'bottom': 0}, 1500, function () {
					//鼠标显示
					$(".mouse-05-a").animate({'opacity': 1});
					// 沙发从 800 到  70
					$(".t1f-05").show().animate({'bottom': 70}, 1000, function () {
						//单子上走
						$(".order-05").animate({'bottom': 390}, function () {
							//文字动画
							$(".words-05").addClass("words-05-a");
							$(".next").fadeIn();
						});
					})
				});
			}
			//第五屏到第六屏过渡
			if(index == 5 && nextIndex == 6) {
				//第五屏沙发掉落
				$(".t1f-05").animate({'bottom': - (k - 500), 'left': '40%', 'width': 65}, 1500, function () {
					$(".t1f-05").hide();
				});
				//盒子往右走,再往下落
				$(".box-06").animate({'left': '38%'}, 1500, function () {
					$(this).animate({'bottom': 20}, 500, function () {
						$(this).hide();
						//小车移动，其实就是背景移动
						$(".section6").animate({'backgroundPositionX': '100%'}, 1800, 'linear', function () {
							$(".boy").animate({'bottom': 116, 'height': 305}, 1000, function () {
								$(this).animate({'right': 500}, 500, function () {
									//门打开
									$(".door").animate({'opacity': 1}, 200, function () {
										//女孩走出来
										$(".girl").show().animate({'right': 350, 'height': 306}, 500, function () {
											$(".pop-06").show();
											$(".next").fadeIn();
										});
									})
								})
							});
						});
						$(".words-06-a").show().animate({'left': '30%'}, 1800, 'linear');
						$(".pop-88").show();
					});
				});
			}
			//第六屏到第七屏过渡
			if(index == 6 && nextIndex == 7) {
				setTimeout(function () {
					$(".star").animate({'width': 120}, 500, function () {
						$(".good-07").show();
						$(".next").fadeIn();
					});
				},1000);
			}
			//第七屏到第八屏过渡
			$(".beginShopping").hover(function () {
				$(".btn-08-a").toggle(); //购物按钮
			});
			//小手跟随鼠标移动
			$(document).mousemove(function (event) {
				//把鼠标的坐标给 小手
				var x = event.pageX - $(".hand-08").width() / 2;
				var y = event.pageY + 10;
				 // 手的top 值不能小于 这个大小minY   当前屏幕的高度 K  减去手的高度  449 
				var minY = k - 449;
				if(y < minY) {
					y = minY;
				}
				
				$(".hand-08").css({'left': x, 'top': y});
			});
			//回到顶部
			$(".again-08").click(function () {
				//1.返回第一屏
				$.fn.fullpage.moveTo(1);
				//2.重置动画效果 即清楚所有动画效果图片的行内样式 div动画盒子添加一个move类清空行内样式
				$("img, .move").attr('style', '');
			});
		},
	} );  
});