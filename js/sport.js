$(function(){
	    		$("#daogou .lunbotu .box>ul>img").attr('src', '../img/adidas506399348.jpg');
	    		var nav_bot = [{
	    			value: ['跑步鞋', '篮&nbsp;球&nbsp;鞋', '休闲鞋', '板&nbsp;&nbsp;&nbsp;鞋', '羽毛球鞋', '足球鞋', '复古鞋', '户&nbsp;外&nbsp;鞋', '网球鞋', '帆布鞋', '训&nbsp;练&nbsp;鞋', '凉拖鞋']
	    		}, {
	    			value: ['T&nbsp;&nbsp;恤', '紧身服', 'POLO衫', '夹&nbsp;&nbsp;克', '卫&nbsp;&nbsp;衣', '针织衫', '短&nbsp;&nbsp;裤', '中&nbsp;&nbsp;裤', '长&nbsp;&nbsp;裤', '棉&nbsp;&nbsp;服', '马&nbsp;&nbsp;甲', '羽绒服']
	    		}, {
	    			value: ['双肩包', '腰&nbsp;&nbsp;包', '装&nbsp;&nbsp;备', '斜挎包', '通&nbsp;&nbsp;包', '球&nbsp;&nbsp;类', '单肩包', '袜&nbsp;&nbsp;子', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', '手提包', '帽&nbsp;&nbsp;子', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;']
	    		}, {
	    			value: ['跑&nbsp;&nbsp;步', '滑&nbsp;&nbsp;板', '足&nbsp;&nbsp;球', '游&nbsp;&nbsp;泳', '篮&nbsp;&nbsp;球', '户&nbsp;&nbsp;外', '网&nbsp;&nbsp;球', '羽毛球']
	    		}];
	    		//添加分类推荐
	    		$('#nav ul .nav_bot').each(function(i) {
	    			for(let j = 0; j < nav_bot[i].value.length; j++) {
	    				$(this).append('<a href="">' + nav_bot[i].value[j] + '</a><i>|</i>');
	    			}
	    		});
	    		//添加热门品牌
	    		var iMG = ['adidas506399348.jpg', 'adidasclassic507604745.jpg', 'adidasneo507638832.jpg', 'converse506750560.jpg', 'gzh2.jpg', 'newbalance507610154.jpg', 'nike507646290.jpg', 'puma507639858.jpg',
	    			'adidas506399348.jpg', 'adidasclassic507604745.jpg', 'adidasneo507638832.jpg', 'converse506750560.jpg', 'gzh2.jpg', 'newbalance507610154.jpg', 'nike507646290.jpg', 'puma507639858.jpg', 'reebok534338687.jpg', 'xtep507609335.jpg', 'reebok534338687.jpg', 'xtep507609335.jpg'
	    		]
	    		for(let i = 0; i < 20; i++) {
	    			$('#body .Hot .Hot_mid').append('<img src=../img/sport/' + iMG[i] + ' />');
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