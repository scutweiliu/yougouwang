$(function(){
    //添加品牌框中的图片
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
/********************公共jQend***************************/
    //
//	var nav=[{
//		'picture_x1':'0',
//		'picture_y1':'-26px',
//		'picture_x2':'-52px',
//		'picture_y2':'-26px',
//		'picture':'url(../img/indexnav2img_01.jpg)',
//		'title':['男鞋','女鞋'],
//		'list':['凉鞋上新','浅口鞋'],
//		'sub-title':['精美女鞋','精品男鞋','时尚品牌'],
//		'sub-list1':['女凉鞋','热销单鞋','浅口鞋','乐福鞋','满帮鞋','专柜同款','平底鞋','尖头女鞋','坡跟鞋','玛丽珍','鱼嘴鞋','布洛克','运动风','松糕鞋'],
//	    'sub-list2':['男凉鞋','打孔鞋','热销男鞋','专柜同款','正装鞋','帆布鞋','布洛克','豆豆鞋','休闲男鞋','乐福鞋'],
//	    'sub-list3':['百丽','她他','天美意','思加图','百思图','真美诗','森达','暇步士','妙丽','拔佳'],
//	},{},{},{},{},{},{}
//	];
	
	//添加html元素
//	var oDaogou=$('#body .nav .daogou');
//	for(var i=0;i<nav.length;i++){
//		oDaogou.append('<ul>');
//		var selector1='#body .nav .daogou>ul:nth-of-type('+(i+1)+')';
//		var oUl=$(selector1);
////		var oUl.index=i;
//		oUl.append('<div>');
//		var selector2='#body .nav .daogou>ul:nth-of-type('+i+1')';
//		var oBackground=$();
//		oBackground.addClass(selector2);
//		var otitle=oUl.append('<li>');
//		for(var j=0;j<nav[i].title.length;j++){
//			otitle.append('<a href=""></a>');
//			var oA=$('#body .nav .daogou>ul>li:nth-of-type(1)');
//			oA.html(nav[0].title[j]);
//		}
//		var olist=oUl.append('<li>');
//		
//	}


/**************图片懒加载****************/
      var lazyarr=[];
      $("img").each(function(i){
      	$(this).addClass('lazy');
      	lazyarr.push($(this).attr('src'));
      	$(this).attr('data-original',lazyarr[i]);
      });
      $("img").lazyload({
      	placeholder:"img/lazyplaceholder.png",
      	effect: "fadeIn"});

})
