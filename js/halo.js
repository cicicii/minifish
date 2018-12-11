var haloobj=function(){
	this.x=[];
	this.y=[];
	this.alive=[];
	this.r=[];
}

haloobj.prototype.num=5;
haloobj.prototype.init = function() {
	for(var i=0;i<this.num;i++){
		this.x[i]=0;
		this.y[i]=0;
		this.alive[i]=false;
		this.r[i]=0;
	}
}

haloobj.prototype.draw=function(){
	ctx1.save();
	ctx1.lineWidth=1;
	ctx1.shadowBlur=1;
	ctx1.shadowColor="orange";
	for(var i=0;i<this.num;i++)
	{
		if(this.alive[i])
		{
			this.r[i] += deltaTime *0.03;
			if(this.r[i]>60)
			{
				this.alive[i]=false;
			}
			var alpha =1-this.r[i]/50;
			//draw cricle
			ctx1.beginPath();
			ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
			ctx1.closePath();
			ctx1.strokeStyle="rgba(180,9,0"+alpha+")";
			ctx1.stroke();
			
		}
	}
}

haloobj.prototype.born=function(x,y){
	for(var i=0;i<this.num;i++)
	{
		if(!this.alive[i])
		{
			this.x[i]=x;
			this.y[i]=y;
			this.r[i]=10;
			this.alive[i]=true;
		}
	}
}