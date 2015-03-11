/*
 *
 *		Created by: Nicolas Sempere
 *		Date created: 8 March 2015
 *
 */

 function parse() {


 		request = new XMLHttpRequest();
 		request.open("GET", "data.json", true);

 		request.onreadystatechange = post_data();

 		request.send();


 }

 function post_data() 
 {


 		if (request.readyState == 4 && request.status == 200) 
 		{

 			data = JSON.parse(request.responseText);

 			for (var i = 0; i < data.length; i++) 
 			{
 				data[i]
 			};
 		}
 }

