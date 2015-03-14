/*
 *
 *		Created by: Nicolas Sempere
 *		Date Created: 11 March 2015
 *
 */


var login = "KendallRumfelt";
var map;
var myPos;

function findMyLocation()
{
		if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(fetchCoords, err);
		}
		else {
				document.getElementById("mapCanvas").innerHTML = "<p> Geolocation is not supported </p>";
		}
}


/* Helper functions for findMyLocation() */
function err(position)
{

		var obj = document.getElementById("mapCanvas");
		obj.innerHTML = "<p class = 'otherFeedBack'> We couldn't find your position </p>";
}

function fetchCoords(position) 
{
		var pos = "login=" + login + 
		      "&lat=" + position.coords.latitude + 
		      "&lng=" + position.coords.longitude;

		mapMyself(position.coords.latitude, position.coords.longitude);
		sendMyLocation(pos);
}


function mapMyself(lat, lng)
{

		myPos = new google.maps.LatLng(lat, lng);
		ISolemnlySwearIAmUpToNoGood(myPos);
}

/* Had to make the reference. This function initilaizes a map object and displays it on the page. */
function ISolemnlySwearIAmUpToNoGood(myPos) 
{


	document.getElementById("magic").innerHTML = "The Real Maurauder's Maps";

	myDetails = {
					zoom: 8,
					center: myPos,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};

	map = new google.maps.Map(document.getElementById("mapCanvas"), myDetails);

	var marker = new google.maps.Marker({ position: myPos, title: login, icon: "legend-of-zelda.png"});
	marker.setMap(map);
	google.maps.event.addListener(marker, 'click', function(){
 
			var myInfoWindow = new google.maps.InfoWindow();
			myInfoWindow.setContent(marker.title);
			myInfoWindow.open(map, marker);
	});
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
				var peers = JSON.parse(request.response);
				displayOtherUsers(peers);
		}

}

function displayOtherUsers(peers) 
{

		for (var i = 0; i < peers.length; i++) {
				addMarker(peers[i]);
		}
}

function addMarker(peer)
{
		var pos = new google.maps.LatLng(peer.lat, peer.lng);
		var peerMarker = new google.maps.Marker({position: pos, title: peer.login});
		peerMarker.setMap(map);

		var distance = haversine(peer);

		google.maps.event.addListener(peerMarker, 'click', function(){
				var peerInfoWindow = new google.maps.InfoWindow();

				peerInfoWindow.setContent("Name:   " + peerMarker.title + "  Distance from you:   " + distance + " miles");
				peerInfoWindow.open(map, peerMarker);
		});
}

function haversine(peer)
{
		var dlat = ((peer.lat - myPos.k) * ((Math.PI) / 180));
		var dlon = ((peer.lng - myPos.D) * ((Math.PI) / 180));
		var mylat = (myPos.k * (Math.PI/180));
		var mylng = (myPos.D * (Math.PI/180));
		var earthRadius = 3959; //Distance will now be returned in miles

		var val1 = Math.sin(dlat/2) * Math.sin(dlat/2)+ 
				   Math.sin(dlon/2) * Math.sin(dlon/2) *
				  (Math.cos(mylat) * Math.cos(mylng));

		var arctan = Math.atan(Math.sqrt(val1), Math.sqrt(1 - val1)) * 2;
		var distance = earthRadius * arctan;
		return distance;

}
