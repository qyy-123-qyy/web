var $={
				ajax:function(options){
//					console.log(options);
					//封装url
					var url=options.url;//得到地址
					if(url===undefined){
					//throw new Error()抛出异常
					throw new Error("ajax必须要写url");
					return;
					}
					//封装类型
					var type=options.type||"get";//默认get请求
					var datatype=options.datatype||"string";//或者默认字符串
					var xhr=null;
					if (window.XMLHttpRequest) {
						xhr=new XMLHttpRequest;
					} else{
						xhr=new ActiveXObject("Microsoft.XMLHTTP");
					}
					xhr.onreadystatechange=function(){
						if (xhr.status==4) {
							//判断状态码
							if (xhr.status>=200&&xhr.status<300||xhr.status==304) {
								if(typeof options.success==="function"){
									var response="";
									if(datatype=="string"){
										response=xhr.responseText;
									}else if(datatype=="json"){
										response=JSON.parse(xhr.responseText);
									}
									options.success(response);
								}
							} 
								
							}
						}
					xhr.open(type,url,true);
				xhr.send(null);
					
				
				}
			}
			//当我们请求后台接口
//			$.ajax({
//				type:"get",
//				url:"后台数据接口",
//				async:true,
//				success:function(response){console.log(response)}
//			});
			//本地的json
			$.ajax({
				"type":"get",
				"url":"../json/caijing.json",
				"async":true,
				"datatype":"json",
				"success":function(response){
					console.log(response);
				}
			});
	