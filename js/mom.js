var momobj=function(){
	this.x;
	this.y;
	this.angle;

	this.bigtailTimer=0;
	this.bigtailCount=0;

	this.bigeyeTimer=0;
	this.bigeyeCount=0;
	this.bigeyeInterval=1000;

	this.bigbodyCount=0;

}

momobj.prototype.init = function() {

	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.angle=0;
}
momobj.prototype.draw=function(){

	//from commonFunction.js --> function lerpDistance(aim, cur, ratio)
	this.x=lerpDistance(mx, this.x, 0.98);	
	this.y=lerpDistance(my, this.y, 0.98);	
	
	var delayX=this.x-mx;
	var deltaY=this.y-my;
	var beta=Math.atan2(deltaY,delayX)//;//Math.atan(y,x)		//(-PI,PI)

	//from commonFunction.js -->function lerpAngle(a, b, t)
	this.angle=lerpAngle(beta,this.angle,0.6);

	//bigtail change
	this.bigtailTimer+=deltaTime;
	if(this.bigtailTimer>50){
		this.bigtailCount=(this.bigtailCount+1)%8;
		this.bigtailTimer %=50;
	}

	//bigeye change
	this.bigeyeTimer+=deltaTime;  
	if(this.bigeyeTimer>this.bigeyeInterval)
	{
		this.bigeyeCount=(this.bigeyeCount+1)%2;
		this.bigeyeTimer%=this.bigeyeInterval;

		if(this.bigeyeCount==0)
		{
			this.bigeyeInterval=Math.random()*1500+2000; 
		}
		else
		{
			this.bigeyeInterval=200;
		}
	}



	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	
	var bigtailCount=this.bigtailCount;
	ctx1.drawImage(bigtail[bigtailCount],-bigtail[bigtailCount].width*0.5+30,-bigtail[bigtailCount].height*0.5);

	var bigbodyCount=this.bigbodyCount;
	if(data.double==1)//eat orange fruit change
	{
		ctx1.drawImage(bigbodyOrg[bigbodyCount],-bigbodyOrg[bigbodyCount].width*0.5,-bigbodyOrg[bigbodyCount].height*0.5);
	}
	else    //eat blue fruit change
	{
		ctx1.drawImage(bigbodyBlue[bigbodyCount],-bigbodyBlue[bigbodyCount].width*0.5,-bigbodyBlue[bigbodyCount].height*0.5);
	}
	
	var  bigeyeCount=this.bigeyeCount;
	ctx1.drawImage(bigeye[bigeyeCount],-bigeye[bigeyeCount].width*0.5,-bigeye[bigeyeCount].height*0.5);
	
	ctx1.restore();
}