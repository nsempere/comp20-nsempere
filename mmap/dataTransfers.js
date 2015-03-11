/*
 *
 *		Created by: Nicolas Sempere
 *		Date Created: 11 March 2015
 *
 */


var login = "nsempere"; //FIND THE ONE THAT MING SENT YOU

function findMyLocation()
{
		if (navigator.geolocation) {
			position = navigator.geolocation.getCurrentPosition();
			var pos = "login=" + login + 
					  "&lat=" + position.coords.latitude + 
					  "&lng" + position.coords.longitude;
			console.log(pos);
		}
}

function sendMyLocation()
{

	xml = new XMLHttpRequest();

	xml.open("post", true);

	xml.send();
}

function writeMap()
{
		sendMyLocation();


}