
	/**************图片懒加载****************/
      var lazyarr=[];
      var aheight=[];
      var awidth=[];
      $("img").each(function(i){
      	$(this).addClass('lazy');
      	lazyarr.push($(this).attr('src'));
      	$(this).attr('data-original',lazyarr[i]);
      	$(this).attr('src',"../img/lazyplaceholder.png");
      });
      $("img").lazyload({
      	placeholder:"../img/lazyplaceholder.png",
      	effect: "fadeIn"});