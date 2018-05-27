function initMap() {alert("ok");}

/*
function initMap() {
  console.log("----hola----")
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4
  });
  var bounds = new google.maps.LatLngBounds();

  var n = airports.length;
  for (var i = 0; i < n; i++) {
    var marker = new google.maps.Marker({
      position: {lat: parseFloat(airports[i].latitude), lng: parseFloat(airports[i].longitude)},
      title: airports[i].name,
      map: map
    });
    bounds.extend(marker.position);
  }

  map.fitBounds(bounds);
}
*/