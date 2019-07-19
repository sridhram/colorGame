var mode=6;
//For easy mode
document.getElementById("easy").addEventListener("click",function(){mode=3;
	document.getElementById("new").innerHTML="New Colors"
	document.getElementById("easy").classList.add("highlight");
	document.getElementById("hard").classList.remove("highlight");
	colors=random(mode);
	for(i=0;i<colors.length;i++)
	c[i].style.backgroundColor=colors[i];
	c[3].style.backgroundColor="rgb(47, 49, 54)";
	c[4].style.backgroundColor="rgb(47, 49, 54)";
	c[5].style.backgroundColor="rgb(47, 49, 54)";
	picked=Math.floor(Math.random()*colors.length);
	var tag=document.querySelector("h1 span").innerHTML=colors[picked]
	document.getElementById("answer").innerHTML="";
	document.getElementById("container").style.backgroundColor="steelblue";
});
//For hard mode
document.getElementById("hard").addEventListener("click",function(){mode=6;
	document.getElementById("new").innerHTML="New Colors"
	document.getElementById("hard").classList.add("highlight");
	document.getElementById("easy").classList.remove("highlight");
	colors=random(mode);
	for(i=0;i<c.length;i++)
		c[i].style.backgroundColor=colors[i];
	document.getElementById("answer").innerHTML="";
	picked=Math.floor(Math.random()*colors.length);
	var tag=document.querySelector("h1 span").innerHTML=colors[picked];
	document.getElementById("container").style.backgroundColor="steelblue";
});
var colors=random(mode);//assigning random colors to the array
var c=document.querySelectorAll(".color");//selecting the 6 color boxes
//adding functionality for new color button
document.getElementById("new").addEventListener("click",function(){
	this.innerHTML="New Colors";
	document.getElementById("container").style.backgroundColor="steelblue";
	document.getElementById("answer").innerHTML="";
	colors=random(mode);
	for(i=0;i<c.length;i++)
	c[i].style.backgroundColor=colors[i];
	var picked=Math.floor(Math.random()*colors.length);
	var tag=document.querySelector("h1 span").innerHTML=colors[picked];
});
function random(num){
	var arr=[];
	for(var i=0;i<num;i++){
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		arr.push("rgb("+r+", "+g+", "+b+")");
	}
	return arr;
}
var picked=Math.floor(Math.random()*colors.length);
var tag=document.querySelector("h1").innerHTML;
tag+=" <span>"+colors[picked]+"</span>"//assigning the rgb text to header
document.querySelector("h1").innerHTML=tag;
//adding functionality for clicks on color boxes 
for(i=0;i<c.length;i++){	
	c[i].style.backgroundColor=colors[i];
	c[i].addEventListener("click",function(){
		var col=this.style.backgroundColor;
		if(col==colors[picked]){
			document.getElementById("answer").innerHTML="Correct!";
			for(i=0;i<colors.length;i++)
				c[i].style.backgroundColor=col;
			document.getElementById("container").style.backgroundColor=col;
			document.getElementById("new").innerHTML="PLAY AGAIN?";
		}
		else
		{
			document.getElementById("answer").innerHTML="Tryagain!";
			this.style.backgroundColor="rgb(47,49,54)";
		}
	});
}