var can1,can2;

var ctx1,ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var bgPic=new Image();

var ane;
var fruit;

var mom,baby;

var mx,my;

//baby
var babytail=[];
var babyeye=[];
var babybody=[];

//mom
var bigtail=[];
var bigeye=[];
var bigbodyOrg=[];
var bigbodyBlue=[];

var data;

var wave;

var halo;

var dust;
var dustPic=[];

document.body.onload=game;

function game(){
	init();
	lastTime=Date.now();
	deltaTime=0;
	gameloop();
}

function init(){
	//获得canvas context
	can1=document.getElementById("canvas1");//fishes
	ctx1=can1.getContext('2d');
	can2=document.getElementById("canvas2");//background
	ctx2=can2.getContext('2d');

	can1.addEventListener('mousemove',onMousemove,false);
	bgPic.src="./src/background.jpg";
	canWidth=can1.width;
	canHeight=can1.height;

	ane=new aneobj();
	ane.init();
	
	fruit=new fruitobj();
	fruit.init();
	
	mom=new momobj();
	mom.init();

	baby=new babyobj();
	baby.init();

	mx=canWidth*0.5;
	my=canHeight*0.5;

	//babyfish change
	for(var i=0;i<8;i++)
	{
		babytail[i]=new Image();
		babytail[i].src="./src/babyTail" + i +".png";
	}

	for(var i=0;i<2;i++)
	{
		babyeye[i]=new Image();
		babyeye[i].src="./src/babyEye" + i +".png";
	}

	for(var i=0;i<20;i++)
	{
		babybody[i]=new Image();
		babybody[i].src="./src/babyFade" + i +".png";
	}


	//big fish change
	for(var i=0;i<8;i++)
	{
		bigtail[i]=new Image();
		bigtail[i].src="./src/bigTail" + i +".png";
	}

	for(var i=0;i<2;i++)
	{
		bigeye[i]=new Image();
		bigeye[i].src="./src/bigEye" + i +".png";
	}

	data=new dataobj();

	for(var i=0;i<8;i++)
	{
		bigbodyOrg[i]=new Image();
		bigbodyBlue[i]=new Image();
		bigbodyOrg[i].src="./src/bigSwim" + i +".png";
		bigbodyBlue[i].src="./src/bigSwimBlue" + i +".png";
	}

	ctx1.font= "25px Verdana";
	ctx1.textAlign="center";

	wave=new waveobj();
	wave.init();

	halo=new haloobj();
	halo.init();

	for(var i=0;i<7;i++)
	{
		dustPic[i]=new Image();
		dustPic[i].src="./src/dust" + i +".png";
	}
	dust=new dustobj();
	dust.init();

}

function gameloop(){
	window.requestAnimFrame(gameloop);  //setInterval,setTimeout,frame per second
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	if(deltaTime>40)  deltaTime=40;
	drawbackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	baby.draw();
	monFruirsCollision();
	mombabyCollision();
	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();
}

function onMousemove(e){
	if(!data.gameover)
	{
		if(e.offSetX||e.layerX){
			mx=e.offSetX==undefined ? e.layerX : e.offSetX;
			my=e.offSetY==undefined ? e.layerY : e.offSetY;
		}
	}
	
}
