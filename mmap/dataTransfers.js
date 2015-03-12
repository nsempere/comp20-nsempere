/*
 *
 *		Created by: Nicolas Sempere
 *		Date Created: 11 March 2015
 *
 */


var login = "nsempere"; //FIND THE ONE THAT MING SENT YOU

function fetchCoords(position) 
{
		console.log("In fetchCoords");
		var pos = "login=" + login + 
			      "&lat=" + position.coords.latitude + 
			      "&lng" + position.coords.longitude;
		/*document.getElementById("test").innerHTML =*/ console.log(pos);
}

function err(position)
{

	console.log("error loading your coordinates");
}

function findMyLocation()
{
		if (navigator.geolocation) {
			console.log("geolocation is good. Must be fetchCoords")
			navigator.geolocation.getCurrentPosition(fetchCoords, err);
			console.log("done ...");
		}
		else {
			document.getElementById("test").innerHTML="<p> GEOLOCATION NOT SUPPORTED HERE </p>";
			console.log("geolocation failed")
		}
}


/*function sendMyLocation()
{

	xml = new XMLHttpRequest();

	xml.open("post", true);

	xml.send();
}

function writeMap()
{
		sendMyLocation();


}*/