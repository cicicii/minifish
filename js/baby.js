var babyobj =function(){
	this.x;
	this.y;
	this.angle;

	this.babytailTimer=0;
	this.babytailCount=0;

	this.babyeyeTimer=0;
	this.babyeyeCount=0;
	this.babyeyeInterval=1000;

	this.babybodyTimer=0;
	this.babybodyCount=0;

}

babyobj.prototype.init=function(){
	this.x=canWidth*0.5-50;
	this.y=canHeight*0.5+50;
	this.angle=0;
}

babyobj.prototype.draw=function(){
	
	//from commonFunction.js --> function lerpDistance(aim, cur, ratio)
	this.x=lerpDistance(mom.x, this.x, 0.99);	
	this.y=lerpDistance(mom.y, this.y, 0.99);	

	var delayX=this.x-mom.x;
	var deltaY=this.y-mom.y;
	var beta=Math.atan2(deltaY,delayX)//;//Math.atan(y,x)		//(-PI,PI)

	//from commonFunction.js -->function lerpAngle(a, b, t)
	this.angle=lerpAngle(beta,this.angle,0.6);

	//babytail change
	this.babytailTimer+=deltaTime;
	if(this.babytailTimer>50){
		this.babytailCount=(this.babytailCount+1)%8;
		this.babytailTimer %=50;
	}

	//babyeye change
	this.babyeyeTimer+=deltaTime;
	if(this.babyeyeTimer>this.babyeyeInterval)
	{
		this.babyeyeCount=(this.babyeyeCount+1)%2;
		this.babyeyeTimer%=this.babyeyeInterval;

		if(this.babyeyeCount==0)
		{
			this.babyeyeInterval=Math.random()*1500+2000;
		}
		else
		{
			this.babyeyeInterval=200;
		}
	}

	//babybody change
	this.babybodyTimer+=deltaTime;
	if(this.babybodyTimer>600)
	{
		this.babybodyCount=this.babybodyCount+1;
		this.babybodyTimer%=500;
		if(this.babybodyCount>19)
		{
			this.babybodyCount=19;
			//game over
			data.gameover = true;
		}
	}


	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);

	var babytailCount=this.babytailCount;
	ctx1.drawImage(babytail[babytailCount],-babytail[babytailCount].width*0.5+25,-babytail[babytailCount].height*0.5);
	
	var babybodyCount=this.babybodyCount;
	ctx1.drawImage(babybody[babybodyCount],-babybody[babybodyCount].width*0.5,-babybody[babybodyCount].height*0.5);
	
	var  babyeyeCount=this.babyeyeCount;
	ctx1.drawImage(babyeye[babyeyeCount],-babyeye[babyeyeCount].width*0.5,-babyeye[babyeyeCount].height*0.5);
	ctx1.restore();
}