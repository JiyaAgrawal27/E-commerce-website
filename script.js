var MainImg=document.getElementById("MainImg");
var smallimg=document.getElementsByClassName("smallproimg");
smallimg[0].onclick=function(){
    MainImg.src=smallimg[0].src;
}
smallimg[1].onclick=function(){
    MainImg.src=smallimg[1].src;
}
smallimg[2].onclick=function(){
    MainImg.src=smallimg[2].src;
}