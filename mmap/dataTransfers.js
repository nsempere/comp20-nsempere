/*
 *
 *		Created by: Nicolas Sempere
 *		Date Created: 11 March 2015
 *
 */


var login = "nsempere"; //FIND THE ONE THAT MING SENT YOU

function fetchCoords(position) 
{
		var pos = "login=" + login + 
			      "&lat=" + position.coords.latitude + 
			      "&lng" + position.coords.longitude;
		document.getElementById("test").innerHTML = "<p>" + pos + "</p>";
}

function err(position)
{

	obj = document.getElementById("test")
	obj.innerHTML = "<p> Mischief managed! We couldn't find your position <p>";
}

function findMyLocation()
{
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(fetchCoords, err);
		}
		else {
			document.getElementById("test").innerHTML = "<p> Geolocation is not supported </p>";
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