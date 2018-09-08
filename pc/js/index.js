$(function() {
	/*
	 * 文档就绪
	 *
	 * */
	//回到顶部按钮
	var topcontrol = $('#topcontrol');
	//导航条对象
	var nav = $('.nav-wrap')

	//导航条相对于网页原点的垂直位置
	var navPos = nav.offset().top;

	//导航条高度
	var navHeight = nav.outerHeight();

	//滚动条事件
	$(window).scroll(function() {

		//过的滚动条的位置
		var sTop = $(window).scrollTop();

		//判断滚动条位置，动态显示隐藏回到顶部按钮
		if (sTop >= 200) {

			topcontrol.fadeIn('normal');

		} else {

			topcontrol.fadeOut('normal');

		}

		//自动给导航条加fixed
		if (sTop >= navPos) {
			if (!nav.hasClass('fix')) {
				nav.addClass('fix');
				$('.banner').css('margin-bottom', navHeight); //占位
			}

		} else {
			if (nav.hasClass('fix')) {
				nav.removeClass('fix');
				$('.banner').css('margin-bottom', 0); //取消占位
			}

		}
		//判断是否进入了海量正版免费下的区域
		var introPos = {
			start: $('#post-intro').offset().top - navHeight,
			end: $('#post-intro').offset().top - navHeight + $('#post-intro').outerHeight()
		}
		
		if ( sTop >= introPos.start && sTop <introPos.end){
			$('.intro').addClass('active');
			
		}else{
			$('.intro').removeClass('active');
		}
		//判断是否进入了无需苹果账号区域
		var introPos = {
			start: $('#post-usage').offset().top - navHeight,
			end: $('#post-usage').offset().top - navHeight + $('#post-usage').outerHeight()
		}
		
		if ( sTop >= introPos.start && sTop <introPos.end){
			$('.usage').addClass('active');
			
		}else{
			$('.usage').removeClass('active');
		}
		//判断是否进入了手机瘦身区域
		var introPos = {
			start: $('#choiceness').offset().top - navHeight,
			end: $('#choiceness').offset().top - navHeight + $('#choiceness').outerHeight()
		}
		
		if ( sTop >= introPos.start && sTop <introPos.end){
			$('.choice').addClass('active');
			
		}else{
			$('.choice').removeClass('active');
		}

			
	});
	//回到顶部按钮单击事件
	topcontrol.click(function() {

		$('html,body').animate({
			scrollTop: 0
		}, 1000);

	});

	//网页内部锚点链接跳转
	$('.nav-wrap a').click(function() {
		$('.nav-wrap a').stop();
		//获得对应区域的相对于网页原点位置
		var top = $(this.hash).offset().top - navHeight + 7;
		$('html,body').animate({
			scrollTop: top
		}, 1000);
		return false;
	})

});