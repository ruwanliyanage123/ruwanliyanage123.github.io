var canv = document.getElementById("canvas");
var cont = canv.getContext("2d");

/**
 * this part for the images loading
 */

var catepilar = new Image();
var sky       = new Image();
var paddy     = new Image();
var bambo     = new Image();

catepilar.src = "images/catepiller.png";
sky.src       = "images/background.png";
paddy.src     = "images/fg.png";
bambo.src     = "images/up.png";

/**
 * this part for the patrameter estimation for the game
 */
 var gap       = 300;
 var constant;
 var bX        = 10;
 var bY        = 150;
 var gravity   = 1.5;
 var score     = 0;

 /**
  * this function for get the keyboard commands 
  */
 document.addEventListener("keydown", moveUp);

 function moveUp(){
     bY -=25;
     fly.play();
 }

 /**
  * this part for the cordinators
  */

  var coord = [];

  coord[0] = {
      x: canv.clientWidth,
      y: 0
  };


  /**
   * this part for the draw images
   */

   function draw(){
      cont.drawImage(sky,0,0);

      constant = paddy.height+gap;
      cont.drawImage(paddy,coord[i].x,coord[i].y);
      //cont.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);

      coord[i].x--;

      if( coord[i].x == 125 ){
        coord.push({
            x : canv.width,
            y : Math.floor(Math.random()*bambo.height)-bambo.height
        }); 
      }

      /**
       * this for the collision detection
       */

      if(bX + catepilar.width >= coord[i].x && bX <= coord[i].x + bambo.width && (bY <= coord[i].y + bambo.height || bY+catepilar.height >= coord[i].y+constant) || bY + catepilar.height >=  canv.height - paddy.height){
        location.reload(); // reload the page
      }

      if(coord[i].x == 5){
        score++;
        scor.play();
     }

   }