$(function(){
	//鼠标移入手机优购显示app下载
	hoverslide("#header .header_ad .ad_left a:nth-of-type(3)","#header .header_ad .ad_left .hide");
	//鼠标移入我的优购显示我的收藏
	hoverslide("#header .header_ad .ad_right li:nth-of-type(3) a:nth-of-type(1)","#header .header_ad .ad_right li:nth-of-type(3) a:nth-of-type(2)");
    //鼠标移入公告显示
    hoverslide("#header .header_ad .ad_right li:nth-of-type(5)","#header .header_ad .ad_right li:nth-of-type(5) .gonggao");
    //鼠标移入更多显示
    hoverslide("#header .header_ad .ad_right li:nth-of-type(6)","#header .header_ad .ad_right li:nth-of-type(6) .gengduo");
    //鼠标移入购物车显示
    hoverslide("#header .header_content .shop_car .shop","#header .header_content .shop_car>div");
    
    //添加轮播图中的图片
    var oBox=$("#daogou .lunbotu .box");
    for(var i=0;i<72;i++){
    	oBox.append("<ul>");
    	$("#daogou .lunbotu .box>ul").html("<img/><a href=''></a>");
    	$("#daogou .lunbotu .box>ul>img").attr('src','img/adidas506399348.jpg');
    	$("#daogou .lunbotu .box>ul>img").click(function(){
    		alert(1);
    	});
        $("#daogou .lunbotu .box>ul>a").html("阿迪达斯");
    }
    $("#daogou .lunbotu .right").click(function(){
    	$("#daogou .lunbotu .box>ul").css('top','-244px')
    });
    $("#daogou .lunbotu .left").click(function(){
    	$("#daogou .lunbotu .box>ul").css('top','0')
    });
    
//	弹窗效果
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
	
	
})
