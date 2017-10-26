$(function(){
	

//蔬菜展示详情页JS
	let slis1=$('.show-cont1>li');
	let slis2=$('.show-cont2>li');
	let mask1=$('.mask').first();
	let mask2=$('.mask').last();
	let close1=$('.icon-guanbi').first();
	let close2=$('.icon-guanbi').last();
	let nextt1=$('.icon-xiajiantou').first();
	let nextt2=$('.icon-xiajiantou').last();
	let prev1=$('.icon-houtui').first();
	let prev2=$('.icon-houtui').last();
	let mImg1=$('.mask-box>img').first();
	let mImg2=$('.mask-box>img').last();
	let index1;
	let index2;
	slis1.click(function(){
		index1=$(this).index();
		let src=$(this).find('a>img').attr('src');
		mImg1.attr('src',src);
		mask1.addClass('active');
	})
	
	//利用事件委派，委派给文档document
	/*$(document).click(function(e){
		let element=e.target;
		if(element.nodeName=="IMG"){
			let src=$(element).attr('src');
			mImg.attr('src',src);
			mask.addClass('active');
		}
	})*/
	
	//关闭按钮
	close1.click(function(){
		mask1.removeClass('active');
	})
	
	//nextt键
	nextt1.click(function(){
		if(index1==2){
		   return;
		}
		index1++;
		let src=$('.show-cont>li>a').slice(3,6).eq(index1).find('img').attr('src');
		mImg1.attr('src',src);
	})
	
	//prev键
	prev1.click(function(){
		if(index1==0){
			return;
		}
		index1--;
		let src=$('.show-cont>li>a').slice(3,6).eq(index1).find('img').attr('src');
		mImg1.attr('src',src);
	})
	
	//屏蔽浏览器的默认行为
	$(document).mousedown(false);
	
	//点击图片左侧实现prev键的功能
	/*mask1.click(function(e){
		let lefts=e.clientX;
		if(lefts<window.innerWidth / 2){
			prev1.trigger('click');
		}
	})*/
	//点击图片右侧实现next键的功能
	/*mask1.click(function(e){
		let lefts=e.clientX;
		if(lefts>window.innerWidth / 2){
			nextt1.trigger('click');
		}
	})*/
	
	





	slis2.click(function(){
		index2=$(this).index();
		let src=$(this).find('a>img').attr('src');
		mImg2.attr('src',src);
		mask2.addClass('active');
	})
	
	//利用事件委派，委派给文档document
	/*$(document).click(function(e){
		let element=e.target;
		if(element.nodeName=="IMG"){
			let src=$(element).attr('src');
			mImg.attr('src',src);
			mask.addClass('active');
		}
	})*/
	
	//关闭按钮
	close2.click(function(){
		mask2.removeClass('active');
	})
	
	//nextt键
	nextt2.click(function(){
		if(index2==2){
		   return;
		}
		index2++;
		let src=$('.show-cont>li>a').eq(index2).find('img').attr('src');
		mImg2.attr('src',src);
	})
	
	//prev键
	prev2.click(function(){
		if(index2==0){
			return;
		}
		index2--;
		let src=$('.show-cont>li>a').eq(index2).find('img').attr('src');
		mImg2.attr('src',src);
	})
	
	//屏蔽浏览器的默认行为
	$(document).mousedown(false);
	
	//点击图片左侧实现prev键的功能
	/*mask2.click(function(e){
		let lefts=e.clientX;
		if(lefts<window.innerWidth / 2){
			prev2.trigger('click');
		}
	})*/
	//点击图片右侧实现next键的功能
	/*mask2.click(function(e){
		let lefts=e.clientX;
		if(lefts>window.innerWidth / 2){
			nextt2.trigger('click');
		}
	})*/
	

})