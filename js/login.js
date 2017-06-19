$(function(){
	//鼠标移入我的优购显示我的收藏
	hoverslide("#header .header_ad .ad_right li:nth-of-type(3) a:nth-of-type(1)","#header .header_ad .ad_right li:nth-of-type(3) a:nth-of-type(2)");
//	name1:移入的地方
//	name2:弹出的窗口
	function hoverslide(name1,name2) {
		var name1=$(name1);
	    var name2=$(name2);
		name1[0].onmouseenter = function() {
			name2.show();
		}
		name1[0].onmouseout = function() {
			name2.hide();
		}
		name2[0].onmousemove = function() {
			name2.show();
		}
		name2[0].onmouseout = function() {
			name2.hide();
		}
	}
	//点击切换界面
	var toggle=1;
	function changestyle(){
		if(toggle==1){
		$('#body .login_box .form .first .choice>a:nth-of-type(1)').css('display','block');
		$('#body .login_box .form .first .choice>a:nth-of-type(2)').css('display','none');
		$('#body .login_box .form .first .choice').css('cursor','default');
		}else if(toggle==2){
		$('#body .login_box .form .first .choice>a:nth-of-type(1)').css('display','none');
		$('#body .login_box .form .first .choice>a:nth-of-type(2)').css('display','block');
		$('#body .login_box .form .first .choice').css('cursor','default');
		}else if(toggle==-1){
		$('#body .login_box .form .first .choice>a:nth-of-type(1)').css('display','block');
		$('#body .login_box .form .first .choice>a:nth-of-type(2)').css('display','block');
		$('#body .login_box .form .first .choice').css('cursor','pointer');
		}
	}
	$('#body .login_box .form .first .choice>a:nth-of-type(1)').on('mousedown',true,function(){
		toggle=1;
		changestyle();
	});
	$('#body .login_box .form .first .choice>a:nth-of-type(2)').on('mousedown',true,function(){
		toggle=2;
		changestyle();
	});
	$('#body .login_box .form .first .choice').on('click',false,function(){
		if(toggle==1||toggle==2){
			toggle=-1;
		}
		changestyle();
	});
})
