	var btn1=document.getElementById("btn1");
	var btn2=document.getElementById("btn2");
    var btn3=document.getElementById("btn3");
	var canvas=document.getElementById("canvas");
	var context=canvas.getContext("2d");
	context.beginPath();
	var image=new Image();
		image.src="img/beauty.jpg";
		image.onload=function(){
			context.drawImage(image,0,0);
		}
	btn1.onclick=function(){
		image.src="img/beauty.jpg";
		image.onload=function(){
			context.drawImage(image,0,0);
			var imageData=context.getImageData(0,0,300,500);
			var data=imageData.data;
			for (i=0;i<data.length;i+=4) {
				var gray=(data[i]+data[i+1]+data[i+2])/3;
				data[i]=data[i+1]=data[i+2]=gray;
			}
			context.beginPath();
			context.putImageData(imageData,200,350);
		}
	}
	btn2.onclick=function(){
		image.src="img/beauty.jpg";
		image.onload=function(){
			context.drawImage(image,0,0);
			var imageData=context.getImageData(0,0,300,500);
			var data=imageData.data;
			for (i=0;i<data.length;i+=4) {
				data[i]=255-data[i];
				data[i+1]=255-data[i+1];
				data[i+2]=255-data[i+2];
			}
			context.beginPath();
			context.putImageData(imageData,200,350);
		}
	}
	btn3.onclick=function(){
		image.src="img/beauty.jpg";
		image.onload=function(){
			context.drawImage(image,0,0);
			var imageData=context.getImageData(0,0,500,335);
			var data=imageData.data;
//竖线切割
			for (j=100;j<500;j+=100) {			//循环三条竖线
				for (i=0;i<335;i++) {
					var n=(i*500+j)*4;			//第n个点的下标（所有的点都排列一行）
					data[n+3]=0;
					data[n+7]=0;
					data[n+11]=0;
				}
			}
//横线切割
			for(j=100;j<335;j+=100){
				for (i=0;i<500;i++) {
					var n=(j*500+i)*4;
					data[n+3]=0;
					data[n+1603]=0;
				}
			}
			context.putImageData(imageData,0,0);
		}
	}