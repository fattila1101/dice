var K;

if(!K)
 var K={};

K.$=function(id)
{
	return document.getElementById(id);
}

K.cube={};

K.cube.throws=function()
{
	var value=Math.floor(Math.random()*6)+1;
	var value2=Math.floor(Math.random()*6)+1;
	var rand=[value,value2];
	return rand;
}

K.cube.show=function()
{
	var rand=K.cube.throws();
	for(var i=1; i<=6; i++)
	{
		if(rand[0]==i)
			K.$("image").src="img/"+i+".png";
		if(rand[1]==i)
			K.$("image2").src="img/"+i+".png";
	}
	K.$("result").innerHTML=rand[0]+rand[1];
}

K.cube.init=function()
{
	K.$("throwing").addEventListener("click",K.cube.show,false);
}

window.addEventListener("load",K.cube.init,false);