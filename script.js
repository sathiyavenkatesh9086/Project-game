var roof=document.getElementById("roof");
var space=document.getElementById("space");
var char=document.getElementById("char")
var jumping =0;;
var counter=0

space.addEventListener('animationiteration', () => {
    var random = Math.random()*3;
    var top=(random*100)+150;
    space.style.top=-(top) + "px";
    counter++
});

setInterval(function(){
    var charTop=parseInt(window.getComputedStyle(char).getPropertyValue("top"));
    if(jumping==0){
    char.style.top=(charTop+3)+ "px"
    }
    var roofLeft=parseInt(window.getComputedStyle(roof).getPropertyValue("left"));
    var spaceTop=parseInt(window.getComputedStyle(space).getPropertyValue("top"));
    var cTop=-(500-charTop);
    if((charTop>480)||((roofLeft<20)&&(roofLeft>-50)&&((cTop<spaceTop)||(cTop>spaceTop+130))))
    {
        alert("Game Over . Score: "+counter);
        char.style.top=100 + "px"
        counter=0;
    }

    
},10);

function jump()
{
jumping=1;
let jumpCount=0;
var jumpInterval=setInterval(function(){
    var charTop=parseInt(window.getComputedStyle(char).getPropertyValue("top"));
    if((charTop>6)&&(jumpCount<15))
    {
    char.style.top=(charTop-5)+ "px";
    }
    if(jumpCount>20)
    {
        clearInterval(jumpInterval);
        jumping=0;
        jumpCount=0;
    }
    jumpCount++

},10);
}

