var waveobj =function(){
	this.x=[];
	this.y=[];
	this.alive=[];
	this.r=[];
}

waveobj.prototype.num = 10;
waveobj.prototype.init = function(){
	for(var i=0;i<this.num;i++)
	{
		this.alive[i] = false;
		this.r[i]=0;
	}
}

waveobj.prototype.draw = function(){
	
	ctx1.save();
	ctx1.lineWidth=1;
	ctx1.shadowBlur=6;
	ctx1.shadowColor="white";
	for(var i=0;i<this.num;i++)
	{
		if(this.alive[i])
		{
			this.r[i] += deltaTime *0.05;
			if(this.r[i]>50)
			{
				this.alive[i]=false;
			}
			var alpha =1-this.r[i]/50;
			//draw cricle
			ctx1.beginPath();
			ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
			ctx1.closePath();
			ctx1.strokeStyle="rgba(255,255,255"+alpha+")";
			ctx1.stroke();
			
		}
	}
	ctx1.restore();
}

waveobj.prototype.born=function(x,y){
	for(var i=0;i<this.num;i++)
	{
		if(!this.alive[i])
		{
			this.alive[i]=true;
			this.r[i]=10;
			this.x[i]=x;
			this.y[i]=y;
			//console.log("born");
			//born;
			return;
		}
	}
}