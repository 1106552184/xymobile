//判断如果是pc端，自动跳到pc/index.html
	//安卓手机自动跳到mobile/index.html
	var userAgent = navigator.userAgent.toLowerCase();
	
	if(userAgent.indexOf('android') != -1 |
	userAgent.indexOf('iphone') != -1 ||
	userAgent.indexOf('ipad') != -1)
	
	location.href = '../mobile/index.html';
	