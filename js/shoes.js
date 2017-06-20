$(function(){
	    		$("#daogou .lunbotu .box>ul>img").attr('src', '../img/adidas506399348.jpg');
	    		var nav_bot = [{
	    			value: ['2017新品', '乐福鞋', '平底鞋', '小白鞋', '高跟鞋', '中空鞋', '满帮鞋', '尖头鞋']
	    		}, {
	    			value: ['鱼嘴鞋', '中空凉鞋', '纯凉鞋', '平底凉鞋', '拖鞋', '坡跟凉鞋', '后空凉鞋','罗马凉鞋']
	    		}, {
	    			value: ['平底鞋','中空鞋','坡跟鞋','尖头鞋','粗跟鞋','增高鞋','高跟鞋','豆豆鞋']
	    		}, {
	    			value: ['平底鞋','内增高','坡跟鞋','乐福鞋','粗跟鞋','布洛克','高跟鞋','运动风']
	    		}, {
	    			value: ['2017新品','帆布鞋','休闲男鞋','豆豆鞋','正装鞋','内增高','乐福鞋','纯凉鞋']
	    		}];
	    		//添加分类推荐
	    		$('#nav ul .nav_bot').each(function(i) {
	    			for(let j = 0; j < nav_bot[i].value.length; j++) {
	    				$(this).append('<a href="">' + nav_bot[i].value[j] + '</a><i>|</i>');
	    			}
	    		});
	    		//添加热门品牌
	    		var iMG = ['basto523422927.jpg', 'bata507639265.jpg', 'belle507639379.jpg', 'crocs507644176.jpg', 'hushpuppies507610094.jpg', 'innet474093564.jpg', 'joypeace468306549.jpg', 'staccato507605520.jpg', 'basto523422927.jpg', 'bata507639265.jpg', 'belle507639379.jpg', 'crocs507644176.jpg', 'hushpuppies507610094.jpg', 'innet474093564.jpg', 'joypeace468306549.jpg', 'staccato507605520.jpg','tata544791364.jpg', 'teenmix507609543.jpg', 
	    			'belle507639379.jpg', 'crocs507644176.jpg'
	    		]
	    		for(let i = 0; i < 20; i++) {
	    			$('#body .Hot .Hot_mid').append('<img src=../img/womenshoes/' + iMG[i] + ' />');
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