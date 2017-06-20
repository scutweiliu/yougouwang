$(function(){
	    		$("#daogou .lunbotu .box>ul>img").attr('src', '../img/adidas506399348.jpg');
	    		var nav_bot = [{
	    			value: ['皮 肤 衣', 'T    恤', '衬    衫', '卫衣', '软壳', '抓绒衣裤', '冲锋衣', 'POLO衫', '棉服', '速干衣裤', '休闲裤', '短裤','羽绒服','骑行衣裤']
	    		}, {
	    			value: ['徒步鞋', '溯溪鞋', '营地鞋', '凉拖鞋', '沙滩鞋', '休闲鞋', '登山鞋','越野鞋','工装靴']
	    		}, {
	    			value: ['登山包','其他包','腰包/挎包','','卡包/钱包','','摄影包','','日常背包','']
	    		}, {
	    			value: ['帽子/头巾/眼镜','露营装备','帐篷','登山杖','手套/袜子','水具','睡袋','','防潮垫','']
	    		}];
	    		//添加分类推荐
	    		$('#nav ul .nav_bot').each(function(i) {
	    			for(let j = 0; j < nav_bot[i].value.length; j++) {
	    				$(this).append('<a href="">' + nav_bot[i].value[j] + '</a><i>|</i>');
	    			}
	    		});
	    		//添加热门品牌
	    		var iMG = ['camel507617935.jpg', 'cat507636509.jpg', 'chums507603735.jpg', 'columbia507642261.jpg', 'rax507727741.jpg', 'thenorthface507728112.jpg', 'timberland507609698.jpg', 'toread507608931.jpg', 'camel507617935.jpg', 'cat507636509.jpg', 'chums507603735.jpg', 'columbia507642261.jpg', 'rax507727741.jpg', 'thenorthface507728112.jpg', 'timberland507609698.jpg', 'toread507608931.jpg',
	    			'camel507617935.jpg', 'cat507636509.jpg', 'chums507603735.jpg', 'columbia507642261.jpg'
	    		]
	    		for(let i = 0; i < 20; i++) {
	    			$('#body .Hot .Hot_mid').append('<img src=../img/outdoor/' + iMG[i] + ' />');
	    		}
	    	    
	    	    /**************特卖专区选框功能****************/
var sport_sale_index=[];
for(let n=0;n<$('#body .sale').length;n++){
	sport_sale_index.push(0);
}
changespsale();
changespsaleli();
//移入菜单改变sale_index
for(let j=0;j<$('#body .sale').length;j++){
$('#body .sale:eq('+j+') .sale_bot>ul>li').each(function(i){
	$(this).mousemove(function(){
		sport_sale_index[j]=i;
		changespsale();
		changespsaleli();
	});
});
}
//根据sale_index控制图片显示
function changespsale(){
	for(let k=0;k<$('#body .sale').length;k++){
		$('#body .sale:eq('+k+') .sale_bot>ul>li>div').each(function(i){
	   if(sport_sale_index[k]==i){
	   	var temp=-365-i*137+'px';
		   $(this).css('display','block');
		   $(this).css('left',temp);
	   }else{
		   $(this).css('display','none');
	   }
})
	}
}
function changespsaleli(){
	for(let k=0;k<$('#body .sale').length;k++){
		$('#body .sale:eq('+k+') .sale_bot>ul>li').each(function(i){
	   if(sport_sale_index[k]==i){
		   $(this).css('background','gray');
	   }else{
		   $(this).css('background','white');
	   }
})
$('#body .sale:eq('+k+') .sale_bot>ul>li>a:nth-of-type(1)').each(function(i){
	   if(sport_sale_index[k]==i){
		   $(this).css('color','white');
	   }else{
		   $(this).css('color','gray');
	   }
})
	}

}
/**************特卖专区选框轮播图功能****************/
var timer_arr=[];
for(let n=0;n<$('#body .sale').length;n++){
	timer_arr.push(null);
}
for(let m=0;m<timer_arr.length;m++){
	    timer_arr[m]=setInterval(function(){
	    sport_sale_index[m]++;
	    if(sport_sale_index[m]>=sport_sale_index.length){
        		sport_sale_index[m]=0;
        	}
	    changespsale();
        changespsaleli();
    },3000);
  }

})