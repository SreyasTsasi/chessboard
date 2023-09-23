const count=8;
const size=5;


let x=0,y=0;

let pawn=document.getElementById("pawn");

function move(dir) {
    console.log(dir);
    switch(dir) {
     case "up": y-= size;
     break;
     case "down":y+= size;
     break;
     case "left": x-= size;
     break;
     case "right":x+= size;
     break;

   }
x=x<0 ? size*(count -1) :x%(count*size);
y=y<0 ? size*(count -1) :y%(count*size);
pawn.style.transform=`translate(${x}rem,${y}rem)`;
}
