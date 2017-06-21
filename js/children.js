$(function(){
	    		$("#daogou .lunbotu .box>ul>img").attr('src', '../img/adidas506399348.jpg');
	    		var nav_bot = [{
	    			value: ['T恤', 'POLO衫', '卫衣', '裤装', '裙装', '套装', '外套/风衣', '衬衣', '毛衣/针织']
	    		}, {
	    			value: ['跑步鞋', '板鞋', '学步鞋', '户外鞋', '足球鞋', '篮球鞋', '训练鞋','皮鞋','凉拖鞋']
	    		}, {
	    			value: ['背包','帽子','袜子','连体衣','婴儿上衣','婴儿裤装','婴儿套装','玩具','妈妈用品']
	    		}, {
	    			value: ['阿迪达斯','三叶草','耐克','PUMA','鬼冢虎','亚瑟斯','小黄人','芭比','米菲']
	    		}];
	    		//添加分类推荐
	    		$('#nav ul .nav_bot').each(function(i) {
	    			for(let j = 0; j < nav_bot[i].value.length; j++) {
	    				$(this).append('<a href="">' + nav_bot[i].value[j] + '</a><i>|</i>');
	    			}
	    		});
	    		//添加热门品牌
	    		var iMG = ['bigwasp507612274.jpg', 'ce500386316.jpg', 'chums507603735.jpg', 'crocs507644176.jpg', 'deerway544848164.jpg', 'gzh2.jpg', 'nike507646290.jpg', 'puma507639858.jpg', 'bigwasp507612274.jpg', 'ce500386316.jpg', 'chums507603735.jpg', 'crocs507644176.jpg', 'deerway544848164.jpg', 'gzh2.jpg', 'nike507646290.jpg', 'puma507639858.jpg', 'deerway544848164.jpg', 'gzh2.jpg','chums507603735.jpg', 'crocs507644176.jpg'
	    		]
	    		for(let i = 0; i < 20; i++) {
	    			$('#body .Hot .Hot_mid').append('<img src=../img/childrens/' + iMG[i] + ' />');
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