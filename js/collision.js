//判断bigfish与果实距离
function monFruirsCollision(){

	if(!data.gameover)
	{
		for (var i=0;i<fruit.num;i++) {
			if(fruit.alive[i]){
				//from commonFunction.js -->function calLength2(x1, y1, x2, y2)
				var l=calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
				if(l<900){
					//eat fruit
					fruit.dead(i);
					data.fruitnum++;
					mom.bigbodyCount++;
					if(mom.bigbodyCount>7)
					{
						mom.bigbodyCount=7;
					}
					if(fruit.fruitType[i] == "blue")		//fruit blue
					{
						data.double = 2;

					}
					wave.born(fruit.x[i],fruit.y[i]);
				}
			}
		}
	}
	
}

//mom and baby collision
function mombabyCollision(){

	if(data.fruitnum>0 && !data.gameover)
	{
		var l=calLength2(mom.x,mom.y,baby.x,baby.y);
		if(l<900){
			//baby alive
			baby.babybodyCount=0;
			

			mom.bigbodyCount = 0;
			//score update
			data.addScore();
			halo.born(baby.x,baby.y);
		}
	}
	
}