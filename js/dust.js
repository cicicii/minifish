var dustobj=function(){
	this.x=[];
	this.y=[];
	this.amp=[];
	this.No=[];
	this.alpha;
}

dustobj.prototype.num=30;
dustobj.prototype.init = function() {
	for(var i=0;i<this.num;i++)
	{
		this.x[i]=Math.random()*canWidth;
		this.y[i]=Math.random()*canHeight;
		this.amp[i]=20+Math.random()*25;
		this.No[i]=Math.floor(Math.random()*7);//[0,7）floor 指归一

	}
	this.alpha=0;
}

dustobj.prototype.draw=function(){

	this.alpha+=deltaTime*0.0007;
	var l=Math.sin(this.alpha);
	for(var i=0;i<this.num;i++)
	{
		var no=this.No[i];
		ctx1.drawImage(dustPic[no],this.x[i]+this.amp[i]*l,this.y[i]);
	}
}