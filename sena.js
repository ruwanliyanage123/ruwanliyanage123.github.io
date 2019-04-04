/**
 * this part is for the define the canvas
 */
var canv = document.getElementById("canvas");
var cont = canv.getContext("2d");

/**
 * this part is for the loading images
 */
var catepillar  = new Image();
var sky         = new Image();
var paddy       = new Image();
var upper_bambo = new Image();
var lower_bambo = new Image();

catepillar.src  = "images/catepiller.png";
sky.src         = "images/background.png";
paddy.src       = "images/paddy.png";
upper_bambo.src = "images/up.png";
//lower_bambo.src = "images/lowerb.png";

/**
 * this part for the define the variables
 */
var gap          = 585;
var constant;
var catepillar_X = 10;
var catepillar_Y = 150;
var gravity      =1.5;
var score        = 0;

/**
 * this part for get thr keyboard respponse
 */

document.addEventListener("keydown",moveUp);

function moveUp(){
    catepillar_Y -= 25;
}

/**
 * this part for the define abot coordinates
 */
var coord = [];

coord[0] = {
    x : canv.width,
    y : 0
};

/**
 * this part is the heart of the game
 */

function draw(){
    
    cont.drawImage(sky,0,0);
    
    
    for(var i = 0; i < coord.length; i++){
        
        constant = upper_bambo.height+gap;
        cont.drawImage(upper_bambo,coord[i].x,coord[i].y);
        cont.drawImage(lower_bambo,coord[i].x,coord[i].y+constant);
             
        coord[i].x--;
        
        if( coord[i].x == 125 ){
            coord.push({
                x : canv.width,
                y : Math.floor(Math.random()*upper_bambo.height)-upper_bambo.height
            }); 
        }

        /**
         * for avoid the collisions
         */
        
        if( catepillar_X + catepillar.width >= coord[i].x && catepillar_X <= coord[i].x + upper_bambo.width && (catepillar_Y <= coord[i].y + upper_bambo.height || catepillar_Y+catepillar.height >= coord[i].y+constant) || catepillar_Y + catepillar.height >=  canv.height - paddy.height){
            location.reload(); // reload the page
        }
        
        if(coord[i].x == 5){
            score++;
        }
        
        
    }

    cont.drawImage(paddy,0,canv.height - paddy.height);
    cont.drawImage(catepillar,catepillar_X,catepillar_Y);
    catepillar_Y += gravity;
    cont.fillStyle = "#000";
    cont.font = "20px Verdana";
    cont.fillText("Score : "+score,10,canv.height-20);
    requestAnimationFrame(draw);
    
}

draw();
























