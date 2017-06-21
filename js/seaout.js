$(function(){
	 /**************特卖专区选框功能****************/
var senav_index=-1;
//移入菜单改变sale_index
$('#header .header_senav>ul').each(function(i){
	$(this).mousemove(function(){
		senav_index=i;
		changeseul();
		changesebot();
	});
	$(this).mouseout(function(){
		senav_index=-1;
		changeseul();
		changesebot();
	});
});
//根据senav_index控制ul>b显示
function changeseul(){
    $('#header .header_senav>ul').each(function(i){
	   if(senav_index==i){
//	   	var temp=-i*148+'px';
		   $(this).children('b').css('display','block');
		   $(this).children('b').css('top','0');
	   }else{
		   $(this).children('b').css('display','none');
	   }
    })
}
//根据senav_index控制ul>.box_bot显示
function changesebot(){
	$('#header .header_senav>ul .box_bot').each(function(i){
	   if(senav_index==i){
		   $(this).css('display','block');
	   }else{
		   $(this).css('display','none');
	   }
    });

}
/**************两张图轮播图功能****************/
var l_index=0;
var timer=null;
setTime();
//计时器控制index的值
        function setTime(){
            timer=setInterval(function(){
        	l_index++;
        	if(l_index>=$('#body .lunbo>li').length){
        		l_index=0;
        	}
        	changebigimg();
		    changesub();
         },3000);
        }
$('#body .lunbo>li').each(function(i){
	$(this).mouseenter(function(){
		l_index=i;
		changebigimg();
		changesub();
		clearInterval(timer);
        timer=null;
	});
	$(this).mouseout(function(){
        setTime();
    });
});
function changebigimg(){
    $('#body .lunbo>a').each(function(i){
	   if(l_index==i){
		   $(this).css('display','block');
	   }else{
		   $(this).css('display','none');
	   }
    })
}
function changesub(){
    $('#body .lunbo>li').each(function(i){
	   if(l_index==i){
		   $(this).css('background','black');
	   }else{
		   $(this).css('background','gray');
	   }
    })
}

})
