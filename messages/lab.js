/*
 *
 *		Created by: Nicolas Sempere
 *		Date created: 8 March 2015
 *
 */

 function parse() {

 		var infoFeed = document.getElementById('messages');

 		request = new XMLHttpRequest();
 		request.open("GET", "data.json", true);
 		request.onreadystatechange = post_data(infoFeed);
 		request.send();


 }

 function post_data(output) 
 {

 		var contents = "";

 		/* Only do so if request got a successful return */
 		if (request.readyState == 4 && request.status == 200) {

 			data = JSON.parse(request.responseText);

 			/* creates a new <p> element for every element in the JSON-parsed array of objects */
 			for (var i = 0; i < data.length; i++) {
 				contents += "<p>" + data[i].content + " " + data[i].username + "</p>";
 			}
 		}
 		/* HTML element to be modified get new <p> tags */
 		output.innerHTML = contents;
 }

