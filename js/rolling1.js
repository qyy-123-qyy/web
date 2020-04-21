(function(){
	var roll=document.getElementById("rolling1");//大盒子
	var munit=document.getElementById("munit");//运功盒子
	var lisul=munit.getElementsByTagName("ul")[0];
	var imgs=lisul.getElementsByTagName("img");
	//定义折返点
	var zhefandian;
	//复制li
	lisul.innerHTML+=lisul.innerHTML;
	//得到所有li，包括新的li
	var lis=lisul.getElementsByTagName("li");
	//获取li个数
	var lislength=lis.length;
	//计算折返点  offsetLeft[lislength/2]
	for(var i=0,count=0;i<imgs.length;i++){
		imgs[i].onload=function(){
			count++;
			if(count==imgs.length){
				zhefandian=lis[lis.length/2].offsetLeft;
				//让图片开始运动
			}
		}
	}
	var timer;
	var nowleft=0;
	//鼠标移入事件
	roll.onmouseover=function(){
		clearInterval(timer);
	}
	//鼠标移出事件
	roll.onmouseout=function(){
		move();
	}
	function move(){
		clearInterval(timer);
		timer=setInterval(function(){
			nowleft-=5;
			if(nowleft<=zhefandian){
				nowLeft=0;
			}
			munit.style.left=nowleft+"px";
		},20)
	}
	
})();
