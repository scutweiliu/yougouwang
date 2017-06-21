$(function(){
	    		$("#daogou .lunbotu .box>ul>img").attr('src', '../img/adidas506399348.jpg');
	    		var nav_bot = [{
	    			value: ['T恤', 'POLO衫', '短裤', '卫衣', '夹克', '牛仔裤', '衬衫', '外套', '休闲裤', '针织衫', '风衣', '套装']
	    		}, {
	    			value: ['T恤', '背心', '短裤', '针织衫', '衬衫', '打底裤', '卫衣','风衣','牛仔裤','外套','套装','休闲裤']
	    		}, {
	    			value: ['LEE','茵曼','CAT','初语','Wrangler','lesmart','佐丹奴','Dickies']
	    		}, {
	    			value: ['流行单品','POLO衫','情侣装','短裤','T恤','半身裙','雪纺','连衣裙']
	    		}];
	    		//添加分类推荐
	    		$('#nav ul .nav_bot').each(function(i) {
	    			for(let j = 0; j < nav_bot[i].value.length; j++) {
	    				$(this).append('<a href="">' + nav_bot[i].value[j] + '</a><i>|</i>');
	    			}
	    		});
	    		//添加热门品牌
	    		var iMG = ['deerway544848164.jpg', 'dickies507636553.jpg', 'europrimo464928410.jpg', 'giordano507610836.jpg', 'inman507610638.jpg', 'lee506398422.jpg', 'lesmart460444728.jpg', 'deerway544848164.jpg', 'dickies507636553.jpg', 'europrimo464928410.jpg', 'giordano507610836.jpg', 'inman507610638.jpg', 'lee506398422.jpg', 'lesmart460444728.jpg','markfairwhale506403575.jpg','deerway544848164.jpg', 'giordano507610836.jpg', 'inman507610638.jpg', 'lee506398422.jpg', 'deerway544848164.jpg'
	    		]
	    		for(let i = 0; i < 20; i++) {
	    			$('#body .Hot .Hot_mid').append('<img src=../img/clothes/' + iMG[i] + ' />');
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