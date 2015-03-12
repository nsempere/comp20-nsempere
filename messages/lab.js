/*
 *
 *		Created by: Nicolas Sempere
 *		Date created: 8 March 2015
 *
 */

 function parse() {

 		//var infoFeed = document.getElementById('messages');

 		request = new XMLHttpRequest();
 		request.open("GET", "https://github.com/tuftsdev/comp20-nsempere/blob/gh-pages/messages/data.json", true);
 		request.onreadystatechange = post_data();
 		request.send();


 }

 function post_data() 
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
 		document.getElementById("messages").innerHTML = contents;
 }

