/*
 *
 *		Created By: Nicolas Sempere
 *		Date Created: 2 March 2015
 *
 */


function init() 
{

 	var pac_man_canvas = document.getElementById("game_canvas");
 	var context = pac_man_canvas.getContext('2d');

 	var arena = new Image();
 	var mspacman = new Image();
 	
 	arena.onLoad = function(){

 		//drawing arena
 		context.drawImage(arena.src, 315, 0, 465, 120, 10, 10, 465, 120); 
 		//drawing ms pac man at some spot in the arena
 		context.drawImage(mspacman.src, 80, 5, 15, 15, 100, 100, 15, 15);
	};
 	arena.src = 'pacman10-hp-sprite.png';

}

