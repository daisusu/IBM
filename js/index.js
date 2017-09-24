var font = document.getElementById('font');
var cover = document.getElementById('cover');
var ifa = document.getElementById('ifa');
var tit = document.getElementById('tit');
cover.onclick = function(){
	cover.style = 'display:none';
	ifa.style = 'display:none';
}
font.onclick = function(){
	cover.style = 'display:block';
	ifa.style = 'display:block';
}
tit.onclick = function(){
	ifa.style = 'display:none';
	cover.style = 'display:none';
}


 //置顶 
  window.onscroll = function(){
     var st = document.documentElement.scrollTop || document.body.scrollTop;
    if (st > 200){
        document.getElementById("to-top").style.display = "block";
    } else{
         document.getElementById("to-top").style.display = "none";
    }
  }

