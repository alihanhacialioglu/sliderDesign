function gezinti(index){
var slider=document.getElementsByClassName("slider")[0];
var clicked=document.getElementsByClassName("menu")[index];
var yuvarlak=document.getElementsByClassName("circle")[0];


for(i=0;i<3;i++){
   var menus=document.getElementsByClassName("menu")[i];
   menus.style.color="black";
}

if(clicked.children[0]){
    yuvarlak.style.backgroundColor="black"; 
}
else{
    yuvarlak.style.backgroundColor="orange";  
}

slider.style.position="relative";
slider.style.left=clicked.offsetLeft+"px";
slider.style.transition = "0.5s";
slider.style.left="%4";
slider.style.backgroundColor="aquamarine";
clicked.style.zIndex="2";
clicked.style.color="white";
clicked.style.transition="color 1s";


   

}