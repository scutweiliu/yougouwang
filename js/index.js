$(function(){
/*****************轮播图**********************/
        var imgarr=['url(../img/index-lunbo1.jpg)','url(../img/index-lunbo2.jpg)','url(../img/index-lunbo3.jpg)','url(../img/index-lunbo4.jpg)','url(../img/index-lunbo5.jpg)','url(../img/index-lunbo6.jpg)'];
        var index=0;
        var timer=null;
        changeview();
        changered();
        setTime();
        //计时器控制index的值
        function setTime(){
            timer=setInterval(function(){
        	index++;
        	if(index>=imgarr.length){
        		index=0;
        	}
        	changeview();
            changered();
         },2000);
        }
        //点击圆圈控制index的数值
        $('#body .nav .lunbotu ul:nth-of-type(2) i').each(function(i){
        	          $(this).mousemove(function(){
        	          	index=i;
        	          	changeview();
        	          	changered();
        	          	clearInterval(timer);
        	          	timer=null;
        	          });
        	          $(this).mouseout(function(){
        	          	setTime();
        	          });
        });
        
        //根据index控制图片
        function changeview(){
        		$('#body .nav .lunbotu ul:nth-of-type(1) a').each(function(i){
        	         if(index==i){
        	          $(this).css('display','block');
        	          }
        	         if(index!=i){
        	          $(this).css('display','none');
        	          }
          });
        };
        //根据index控制圆圈
        function changered(){
        		$('#body .nav .lunbotu ul:nth-of-type(2) i').each(function(i){
        	         if(index==i){
        	          $(this).css('background','red');
        	          }
        	         if(index!=i){
        	          $(this).css('background','black');
        	          }
           })
        }
/*****************轮播图end**********************/
/**************添加品牌切换****************/
    //添加品牌框中的图片
    var oBox2=$("#body .Hot .Hot_bot .sbox .yidongtiao");
    for(var j=0;j<3;j++){
    	oBox2.append("<ul>");
    }
    
    for(var i=0;i<20;i++){
    	$("#body .Hot .Hot_bot .sbox .yidongtiao>ul:nth-of-type(1)").append("<a href=''><img /></a>");
    	$("#body .Hot .Hot_bot .sbox .yidongtiao>ul:nth-of-type(1)>a>img").attr('src','img/asics507610277.jpg');
    }
    for(var i=0;i<20;i++){
    	$("#body .Hot .Hot_bot .sbox .yidongtiao>ul:nth-of-type(2)").append("<a href=''><img /></a>");
    	$("#body .Hot .Hot_bot .sbox .yidongtiao>ul:nth-of-type(2)>a>img").attr('src','img/gnshijia503989190.jpg');
    }
    for(var i=0;i<20;i++){
    	$("#body .Hot .Hot_bot .sbox .yidongtiao>ul:nth-of-type(3)").append("<a href=''><img /></a>");
    	$("#body .Hot .Hot_bot .sbox .yidongtiao>ul:nth-of-type(3)>a>img").attr('src','img/lining507645232.jpg');
    }
    var yd_left=0;
    var x=0;
    $("#body .Hot .Hot_bot .right").click(function(){
    	yd_left--;
    	if(yd_left<0){yd_left=2}
    	x=-1100*yd_left+'px';
    	$("#body .Hot .Hot_bot .sbox .yidongtiao").animate({left:x},100);
    });
    $("#body .Hot .Hot_bot .left").click(function(){
    	yd_left++;
    	if(yd_left>2){yd_left=0}
    	x=-1100*yd_left+'px';
    	$("#body .Hot .Hot_bot .sbox .yidongtiao").animate({left:x},100);
    });
/**************添加品牌切换end****************/

/**************添加cloth_arr图片****************/
var cloth_arr=['url(img/womenshoes/3173f3ede69c42c1b4f615a8816f3bd5.jpg)','url(img/menshoes/5e11566bd89e43ba8609810e99959dc5.jpg)','url(img/sport/3f75fe52e0f549cca2c384c024b38960.jpg)','url(img/outdoor/d278084e2019429db4e9e359e0011bed.jpg)','url(img/seoul/501e4e7797cf4e5990259be243cf6abe.jpg)','url(img/clothes/08fa16d065944c2881d350f69f5ce9a9.jpg)','url(img/childrens/4b5af4b3d2ff41da9a912110cc855b05.jpg)'];
    $('#body .cloth_arr>.cloth_arr_bot>.second>a').each(function(i){
    	$(this).css('background',cloth_arr[i]);
    	$(this).css('background-size','100% 100%');
    })
    
/**************特卖专区选框功能****************/
var sale_index=0;
changesale();
changesaleli();
//移入菜单改变sale_index
$('#body .sale .sale_bot>ul>li').each(function(i){
	$(this).mousemove(function(){
		sale_index=i;
		changesale();
		changesaleli();
	});
});
//根据sale_index控制图片显示
function changesale(){
  $('#body .sale .sale_bot>ul>li>div').each(function(i){
	   if(sale_index==i){
	   	var temp=-i*41+'px';
		   $(this).css('display','block');
		   $(this).css('top',temp);
	   }else{
		   $(this).css('display','none');
	   }
  })
}
function changesaleli(){
  $('#body .sale .sale_bot>ul>li').each(function(i){
	   if(sale_index==i){
		   $(this).css('background','black');
	   }else{
		   $(this).css('background','white');
	   }
  })
  $('#body .sale .sale_bot>ul>li>a:nth-of-type(1)').each(function(i){
	   if(sale_index==i){
		   $(this).css('color','white');
	   }else{
		   $(this).css('color','gray');
	   }
  })
}
/**************点击隐藏广告****************/
$('#ad>a:nth-of-type(3)').mousedown(function(){
	$('#ad').css('display','none');
})
/**************fix挂件的滚动****************/
var fix_top=$('#fix').css('top');
$(window).scroll(function(){
//	console.log($(window).scrollTop());
   if($(window).scrollTop()>=200){
   	$('#fix').css('top','15px');
   }else{$('#fix').css('top',parseInt(fix_top)-$(window).scrollTop()+'px');
   }
});
});