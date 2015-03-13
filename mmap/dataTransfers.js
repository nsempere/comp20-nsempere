/*
 *
 *		Created by: Nicolas Sempere
 *		Date Created: 11 March 2015
 *
 */

login = "KendallRumfelt";

function findMyLocation()
{
		if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(fetchCoords, err);
		}
		else {
				document.getElementById("test").innerHTML = "<p> Geolocation is not supported </p>";
		}
}

/* Helper functions for findMyLocation() */
		function fetchCoords(position) 
		{
				pos = "login=" + login + 
				      "&lat=" + position.coords.latitude + 
				      "&lng=" + position.coords.longitude;
				sendMyLocation(pos);
		}

		function err(position)
		{

			var obj = document.getElementById("test");
			obj.innerHTML = "<p> Mischief managed! We couldn't find your position <p>";
		}

function sendMyLocation(position)
{

	request = new XMLHttpRequest();
	var URI = "http://secret-about-box.herokuapp.com/sendLocation";

	request.open("POST", URI, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = parseLocationFeedback;

	request.send(position);

}

function parseLocationFeedback()
{
		if 	(request.readyState == 4 &&	request.status == 200) {
				peerLocations = JSON.parse(request.response);

		}

}