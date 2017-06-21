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
	$('#body .login_box .login_box_top li').each(function(i){
		$(this).click(function(){
			//更改登录框样式
			$('#body .login_box form>div:lt(4)').css('display','none');
	        $('#body .login_box form>div:nth-of-type('+(2*i+1)+')').css('display','block');
		    $('#body .login_box form>div:nth-of-type('+(2*i+2)+')').css('display','block');
	        //更改点击选项样式
	        $('#body .login_box .login_box_top>li:lt(2)').css('background','lightgray');
		    $(this).css('background','black');
		    $('#body .login_box .login_box_top>li:lt(2)>a').css('color','black');
		    $(this).children('a').css('color','white');
		    hover();
		    //更改警告框样式
		    $('#body .login_box form>i:lt(4)').css('display','none');
	        $('#body .login_box form>i:nth-of-type('+(2*i+1)+')').css('display','block');
		    $('#body .login_box form>i:nth-of-type('+(2*i+2)+')').css('display','block');
		});
	});
	hover();
	function hover(){
		$('#body .login_box .login_box_top>li>a').each(function(i){
		if($(this).css('color')=='rgb(0, 0, 0)'){
			$(this).mouseenter(function(){
				$(this).css('color','red');
			});
			$(this).mouseout(function(){
				$(this).css('color','black');
			});
		}else if($(this).css('color')=='rgb(255, 255, 255)'){
			$(this).mouseenter(function(){
				$(this).css('color','white');
			});
			$(this).mouseout(function(){
				$(this).css('color','white');
			});
		}
	});
	}
	
	//表单框验证
	//手机号格式验证
	$('.user_text').blur(function(){
		var phone_text_reg=/^1\d{10}$/;
		var user_text_reg=/^[a-zA-Z]+$/;
		var mail_text_reg=/^\w+@[0-9a-z]+\.[a-z]{2,4}$/;
		if($(this).val()){
			$('#body .login_box form>i:eq(0)').text('格式错误，请重新输入');
		}else{
			$('#body .login_box form>i:eq(0)').text('请输入手机号/会员名称/邮箱');
		};
		if(phone_text_reg.test($(this).val())||user_text_reg.test($(this).val())||mail_text_reg.test($(this).val())){
			$('#body .login_box form>i:eq(0)').css('visibility','hidden');
		}else{
			$('#body .login_box form>i:eq(0)').css('visibility','visible');
		};
	});
	$('.mima_text').blur(function(){
		var mima_text_reg=/^\w{6,25}$/;
		if($(this).val()){
			$('#body .login_box form>i:eq(1)').text('密码应6-25位之间');
		}else{
			$('#body .login_box form>i:eq(1)').text('请输入密码');
		};
		if(mima_text_reg.test($(this).val())){
			$('#body .login_box form>i:eq(1)').css('visibility','hidden');
		}else{
			$('#body .login_box form>i:eq(1)').css('visibility','visible');
		};
	});
	$('.phone_text').blur(function(){
		var phone_text_reg=/^1\d{10}$/;
		if($(this).val()){
			$('#body .login_box form>i:eq(2)').text('手机号码格式错误');
		}else{
			$('#body .login_box form>i:eq(2)').text('请输入手机号码');
		};
		if(phone_text_reg.test($(this).val())){
			$('#body .login_box form>i:eq(2)').css('visibility','hidden');
		}else{
			$('#body .login_box form>i:eq(2)').css('visibility','visible');
		};
	});
	$('.yanzhengma_text').blur(function(){
		var yanzhengma_text_reg=/^\d{6}$/;
		if($(this).val()){
			$('#body .login_box form>i:eq(3)').text('密码应为6位数');
		}else{
			$('#body .login_box form>i:eq(3)').text('请输入短信验证码');
		};
		if(yanzhengma_text_reg.test($(this).val())){
			$('#body .login_box form>i:eq(3)').css('visibility','hidden');
		}else{
			$('#body .login_box form>i:eq(3)').css('visibility','visible');
		};
	});
	
	
})
