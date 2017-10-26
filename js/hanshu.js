
'use strict';


/* $('.box')     	
   $('div')     	
   $('#son')    */ 	
   /*
   获取元素，返回
   添加window.onload
   $(select)
   $(select[,ranger])
   参数：
   select 字符串->选择器 #box .box div
          函数->window.onload
   ranger  范围 dom元素(对象)
   1. 首字符
      # -> document.getElementById
      . -> document.getElementByClassName
      符合标签
   2. return
    */
function $(select,ranger){
	ranger=ranger||document;
	if(typeof select=='string'){//字符串->选择器 #box .box div
        let selector=select.trim();//去空
		let firstChar=selector.charAt(0);//获取首字符
		if(firstChar=='#'){
			return ranger.getElementById(selector.substr(1));
		}else if(firstChar=='.'){
	        return ranger.getElementsByClassName(selector.substr(1));
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selector)){//正则表达式，判断是否符合标签
	        return ranger.getElementsByTagName(selector);
		}
	}else if(typeof select=='function'){//函数->window.onload
        window.onload=function(){
        	select();
        }
	}
}






/*
innerText()
获取或者是设置元素的内容
*/
function text(element,content){
	if(arguments.length==2){
		element.innerText=content;
	}else if(arguments.length==1){
        return element.innerText;
	}

}


/*
innerHTML()
*/
function html(element,content){
	if(arguments.length==2){
		element.innerHTML=content;
	}else if(arguments.length==1){
        return element.innerHTML;
	}

}



/*
设置样式
css(element,attrobj)
element:对象
attrobj:json对象
 */
function css(element,attrobj){
	for(let i in attrobj){
		element.style[i]=attrobj[i];
	}

}




// 添加事件
// element:对象
// type：事件
/*function on(collection,typei,fn){
	for(let i=0;i<collection.length;i++){
		collection[i][typei]=fn;
	}
}*/

function on(element,type,fn){
	element[type]=function(){
		fn();
	}

}


 /*删除事件
element:对象
type：事件
*/

/*function off(collection,typei){
		collection[i][typei]=null;
}
*/
function off(element,type){
	element[type]=null;

}


/*function insertAfter(insert,position){
    let parent=position.parentNode;
    let next=position.nextElementSibling;
    if(next){
       parent.insertBefore(insert,next);
    }else{
       parent.appendChild(insert);
    }
}*/
//
HTMLElement.prototype.insertAfter=function(insert){
    let parent=this.parentNode;
    let next=this.nextElementSibling;
    if(next){
       parent.insertBefore(insert,next);
    }else{
       parent.appendChild(insert);
    }
}



HTMLElement.prototype.prependChild=function(insert){
    let first=this.firstElementChild;
    if(first){
       this.insertBefore(insert,first);
    }else{
       this.appendChild(insert);
    } 
}
HTMLElement.prototype.prependTo=function(parent){
   parent.prependChild(this);
}

HTMLElement.prototype.appendTo=function(parent){
   parent.appendChild(this);
}

//函数调用
/*$(function(){
	let t=$('.box');
    console.log(t)
    html(t[2],`这是<h1>猪</h1>`)
    on(t[1],'onclick',function(){
    	alert(1);
    })
    off(t[1],'onclick')
    css(t[0],{width:'300px',height:'300px','background-color':'red'})

})*/