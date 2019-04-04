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