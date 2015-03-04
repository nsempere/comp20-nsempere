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
 	arena.src = 'pacman10-hp-sprite.png';

 	arena.onLoad = function(){

 		context.drawImage(arena.src, 315, 0, 465, 120, 10, 10, 465, 120); 
	};
 	
}

